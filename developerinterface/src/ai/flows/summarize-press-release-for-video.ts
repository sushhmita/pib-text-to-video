'use server';

/**
 * @fileOverview Summarizes a PIB press release for use in video scripts.
 *
 * - summarizePressReleaseForVideo - A function that takes a press release text and returns a concise summary.
 * - SummarizePressReleaseForVideoInput - The input type for the summarizePressReleaseForVideo function.
 * - SummarizePressReleaseForVideoOutput - The return type for the summarizePressReleaseForVideo function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizePressReleaseForVideoInputSchema = z.object({
  pressReleaseText: z
    .string()
    .describe('The full text of the PIB press release to summarize.'),
});
export type SummarizePressReleaseForVideoInput = z.infer<
  typeof SummarizePressReleaseForVideoInputSchema
>;

const SummarizePressReleaseForVideoOutputSchema = z.object({
  summary: z
    .string()
    .describe(
      'A concise summary of the press release, suitable for a short video script.'
    ),
});
export type SummarizePressReleaseForVideoOutput = z.infer<
  typeof SummarizePressReleaseForVideoOutputSchema
>;

export async function summarizePressReleaseForVideo(
  input: SummarizePressReleaseForVideoInput
): Promise<SummarizePressReleaseForVideoOutput> {
  return summarizePressReleaseForVideoFlow(input);
}

const summarizePressReleaseForVideoPrompt = ai.definePrompt({
  name: 'summarizePressReleaseForVideoPrompt',
  input: {schema: SummarizePressReleaseForVideoInputSchema},
  output: {schema: SummarizePressReleaseForVideoOutputSchema},
  prompt: `You are an AI assistant tasked with summarizing press releases from the Press Information Bureau (PIB) of the Government of India for creating short video scripts.

  Your goal is to create a concise summary that captures the most important information from the press release.

  Press Release Text: {{{pressReleaseText}}}

  Summary:`,
});

const summarizePressReleaseForVideoFlow = ai.defineFlow(
  {
    name: 'summarizePressReleaseForVideoFlow',
    inputSchema: SummarizePressReleaseForVideoInputSchema,
    outputSchema: SummarizePressReleaseForVideoOutputSchema,
  },
  async input => {
    const {output} = await summarizePressReleaseForVideoPrompt(input);
    return output!;
  }
);
