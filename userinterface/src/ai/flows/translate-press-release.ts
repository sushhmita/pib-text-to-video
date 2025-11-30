'use server';

/**
 * @fileOverview This file defines a Genkit flow for translating press releases into different languages.
 *
 * The flow takes a press release text and a target language as input and returns the translated text.
 * - translatePressRelease - A function that translates the press release.
 * - TranslatePressReleaseInput - The input type for the translatePressRelease function.
 * - TranslatePressReleaseOutput - The return type for the translatePressRelease function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TranslatePressReleaseInputSchema = z.object({
  text: z.string().describe('The press release text to translate.'),
  targetLanguage: z
    .string()
    .describe('The target language for the translation (e.g., es for Spanish).'),
});
export type TranslatePressReleaseInput = z.infer<typeof TranslatePressReleaseInputSchema>;

const TranslatePressReleaseOutputSchema = z.object({
  translatedText: z.string().describe('The translated press release text.'),
});
export type TranslatePressReleaseOutput = z.infer<typeof TranslatePressReleaseOutputSchema>;

export async function translatePressRelease(input: TranslatePressReleaseInput): Promise<TranslatePressReleaseOutput> {
  return translatePressReleaseFlow(input);
}

const translatePressReleasePrompt = ai.definePrompt({
  name: 'translatePressReleasePrompt',
  input: {schema: TranslatePressReleaseInputSchema},
  output: {schema: TranslatePressReleaseOutputSchema},
  prompt: `Translate the following press release text to {{targetLanguage}}:\n\n{{{text}}}`,
});

const translatePressReleaseFlow = ai.defineFlow(
  {
    name: 'translatePressReleaseFlow',
    inputSchema: TranslatePressReleaseInputSchema,
    outputSchema: TranslatePressReleaseOutputSchema,
  },
  async input => {
    const {output} = await translatePressReleasePrompt(input);
    return output!;
  }
);
