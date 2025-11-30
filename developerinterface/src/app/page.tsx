import Header from '@/components/layout/header';
import PIBVideoClient from '@/components/pib-video-client';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">PIB Press Release to Video</h1>
          <p className="text-muted-foreground">
            Automatically generate a video from a Press Information Bureau (PIB) press release using AI.
          </p>
        </div>
        <PIBVideoClient />
      </main>
    </div>
  );
}
