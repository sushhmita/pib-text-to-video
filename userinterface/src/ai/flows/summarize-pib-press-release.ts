'use server';
/**
 * @fileOverview Summarizes a PIB press release.
 *
 * - summarizePIBPressRelease - A function that summarizes a PIB press release.
 * - SummarizePIBPressReleaseInput - The input type for the summarizePIBPressRelease function.
 * - SummarizePIBPressReleaseOutput - The return type for the summarizePIBPressRelease function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizePIBPressReleaseInputSchema = z.object({
  pressRelease: z
    .string()
    .describe('The PIB press release to be summarized.'),
});
export type SummarizePIBPressReleaseInput = z.infer<
  typeof SummarizePIBPressReleaseInputSchema
>;

const SummarizePIBPressReleaseOutputSchema = z.object({
  summary: z.string().describe('The summary of the press release.'),
});
export type SummarizePIBPressReleaseOutput = z.infer<
  typeof SummarizePIBPressReleaseOutputSchema
>;

export async function summarizePIBPressRelease(
  input: SummarizePIBPressReleaseInput
): Promise<SummarizePIBPressReleaseOutput> {
  return summarizePIBPressReleaseFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizePIBPressReleasePrompt',
  input: {schema: SummarizePIBPressReleaseInputSchema},
  output: {schema: SummarizePIBPressReleaseOutputSchema},
  prompt: `Summarize the following PIB press release:\n\n{{pressRelease}}`,
});

const summarizePIBPressReleaseFlow = ai.defineFlow(
  {
    name: 'summarizePIBPressReleaseFlow',
    inputSchema: SummarizePIBPressReleaseInputSchema,
    outputSchema: SummarizePIBPressReleaseOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
