'use server';
/**
 * @fileOverview Translates and narrates a summary of text into multiple languages.
 *
 * - translateAndNarrateSummary - A function that translates the summary into specified languages and generates audio files.
 * - TranslateAndNarrateSummaryInput - The input type for the translateAndNarrateSummary function.
 * - TranslateAndNarrateSummaryOutput - The return type for the translateAndNarrateSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import wav from 'wav';

const TranslateAndNarrateSummaryInputSchema = z.object({
  text: z.string().describe('The text to translate and narrate.'),
  targetLanguages: z.array(z.string()).describe('A list of target languages to translate the text into.'),
});
export type TranslateAndNarrateSummaryInput = z.infer<typeof TranslateAndNarrateSummaryInputSchema>;

const TranslateAndNarrateSummaryOutputSchema = z.object({
  narratedTranslations: z.record(z.string(), z.string()).describe('A map of language code to narrated audio data URI.'),
});
export type TranslateAndNarrateSummaryOutput = z.infer<typeof TranslateAndNarrateSummaryOutputSchema>;

export async function translateAndNarrateSummary(
  input: TranslateAndNarrateSummaryInput
): Promise<TranslateAndNarrateSummaryOutput> {
  return translateAndNarrateSummaryFlow(input);
}

async function toWav(
  pcmData: Buffer,
  channels = 1,
  rate = 24000,
  sampleWidth = 2
): Promise<string> {
  return new Promise((resolve, reject) => {
    const writer = new wav.Writer({
      channels,
      sampleRate: rate,
      bitDepth: sampleWidth * 8,
    });

    let bufs = [] as any[];
    writer.on('error', reject);
    writer.on('data', function (d) {
      bufs.push(d);
    });
    writer.on('end', function () {
      resolve(Buffer.concat(bufs).toString('base64'));
    });

    writer.write(pcmData);
    writer.end();
  });
}

const translateAndNarrateSummaryFlow = ai.defineFlow(
  {
    name: 'translateAndNarrateSummaryFlow',
    inputSchema: TranslateAndNarrateSummaryInputSchema,
    outputSchema: TranslateAndNarrateSummaryOutputSchema,
  },
  async input => {
    const {text, targetLanguages} = input;
    const narratedTranslations: Record<string, string> = {};

    for (const language of targetLanguages) {
      const translatePrompt = ai.definePrompt({
        name: `translatePrompt_${language}`,
        input: {
          schema: z.object({
            text: z.string(),
            language: z.string(),
          }),
        },
        output: {
          schema: z.object({
            translation: z.string(),
          }),
        },
        prompt: `Translate the following text to {{language}}: {{{text}}}`,
      });

      const {output: translationOutput} = await translatePrompt({
        text: text,
        language: language,
      });

      if (!translationOutput?.translation) {
        throw new Error(`Failed to translate to ${language}`);
      }

      const translatedText = translationOutput.translation;

      const { media } = await ai.generate({
        model: 'googleai/gemini-2.5-flash-preview-tts',
        prompt: translatedText,
        config: {
          responseModalities: ['AUDIO'],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Algenib' },
            },
          },
           safetySettings: [
            {
              category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
              threshold: 'BLOCK_ONLY_HIGH',
            },
          ],
        },
      });

      if (!media) {
        throw new Error('no media returned from TTS');
      }
      
      const audioBuffer = Buffer.from(
        media.url.substring(media.url.indexOf(',') + 1),
        'base64'
      );
      const wavDataUri = 'data:audio/wav;base64,' + (await toWav(audioBuffer));

      narratedTranslations[language] = wavDataUri;
    }

    return {narratedTranslations: narratedTranslations};
  }
);
