import { config } from 'dotenv';
config();

import '@/ai/flows/summarize-press-release-for-video.ts';
import '@/ai/flows/translate-and-narrate-summary.ts';
import '@/ai/flows/generate-video-visuals.ts';