import Link from 'next/link';
import { Film, Github, LayoutDashboard } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur md:px-6">
      <Link href="/" className="flex items-center gap-2 text-lg font-semibold md:text-base">
        <Film className="h-6 w-6 text-primary" />
        <span className="font-bold">PIB Video AI</span>
      </Link>
      
      <div className="ml-auto flex items-center gap-2">
        <Button variant="outline" size="sm" asChild>
          <Link href="/dashboard">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Dashboard
          </Link>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <a href="https://github.com/firebase/studio-pib-video-ai" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
            <Github className="h-5 w-5" />
          </a>
        </Button>
      </div>
    </header>
  );
}
