export type PIBVideoAIState = {
  status: 'idle' | 'summarizing' | 'translating' | 'generating_visuals' | 'done' | 'error';
  summary: string | null;
  narrations: Record<string, string> | null;
  visualUrls: string[] | null;
  error: string | null;
};

export type VideoProject = {
  id: string;
  title: string;
  submittedDate: string;
  status: 'Pending Approval' | 'Approved' | 'Rejected' | 'Published';
  summary: string;
  visualUrl: string;
};
