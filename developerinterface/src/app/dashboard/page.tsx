import Header from '@/components/layout/header';
import DashboardClient from '@/components/dashboard-client';

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">Officer Approval Dashboard</h1>
          <p className="text-muted-foreground">
            Review, approve, and manage AI-generated videos.
          </p>
        </div>
        <DashboardClient />
      </main>
    </div>
  );
}
