'use client';

import { useActionState, useEffect, useRef, useState, useTransition } from 'react';
import { generateVideoFromPressRelease } from '@/app/actions';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, FileText, Languages, ImageIcon, Package, Send, Loader2, CheckCircle } from 'lucide-react';
import type { PIBVideoAIState } from '@/lib/types';
import Link from 'next/link';


const initialState: PIBVideoAIState = {
  status: 'idle',
  summary: null,
  narrations: null,
  visualUrls: null,
  error: null,
};

function SubmitButton({ disabled }: { disabled: boolean }) {
  const [isPending, startTransition] = useTransition();

  // Use the form's pending state if available
  const pending = isPending;

  return (
    <Button type="submit" disabled={pending || disabled} className="bg-accent hover:bg-accent/90 text-accent-foreground">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
      Generate Video
    </Button>
  );
}

function PipelineTracker({ status }: { status: string }) {
    const pipelineSteps = [
        { id: 'summarizing', icon: FileText, label: 'Summarize' },
        { id: 'translating', icon: Languages, label: 'Translate' },
        { id: 'generating_visuals', icon: ImageIcon, label: 'Visualize' },
        { id: 'done', icon: Package, label: 'Assemble' },
    ];

    const currentStepIndex = pipelineSteps.findIndex(step => step.id === status);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Generation Pipeline</CardTitle>
                <CardDescription>Follow the AI-powered video generation process.</CardDescription>
            </CardHeader>
            <CardContent>
                 <div className="flex items-start justify-between space-x-2 md:space-x-4">
                    {pipelineSteps.map((step, index) => (
                        <div key={step.id} className="flex flex-1 flex-col items-center gap-2 relative">
                             <div className={`flex h-12 w-12 items-center justify-center rounded-full z-10 transition-colors duration-300 ${index <= currentStepIndex ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                                <step.icon className="h-6 w-6" />
                            </div>
                            <span className="text-center text-xs font-medium">{step.label}</span>
                            {status === step.id && status !== 'done' && <Loader2 className="mt-2 h-4 w-4 animate-spin text-primary" />}
                            {index < pipelineSteps.length - 1 && (
                                <div className={`absolute top-6 h-0.5 w-full transition-colors duration-300 ${index < currentStepIndex ? 'bg-primary' : 'bg-muted'}`} />
                            )}
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}

export default function PIBVideoClient() {
  const [state, formAction] = useActionState(generateVideoFromPressRelease, initialState);
  const [pipelineStatus, setPipelineStatus] = useState('idle');
  const [isPending, startTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isPending) {
        const steps = ['summarizing', 'translating', 'generating_visuals'];
        let currentStep = 0;
        setPipelineStatus(steps[currentStep]);

        interval = setInterval(() => {
            currentStep++;
            if (currentStep < steps.length) {
                setPipelineStatus(steps[currentStep]);
            } else {
                clearInterval(interval);
            }
        }, 3000); // Simulate progress, actual time varies
    }
    
    return () => clearInterval(interval);
  }, [isPending]);

  useEffect(() => {
    if (state.status === 'done' || state.status === 'error') {
        setPipelineStatus(state.status);
    }
    if (state.status === 'done' && formRef.current) {
        formRef.current.reset();
    }
  }, [state]);

  const handleFormAction = (formData: FormData) => {
    startTransition(() => {
        formAction(formData);
    });
  }

  const showPipeline = isPending || (pipelineStatus !== 'idle' && pipelineStatus !== 'done' && pipelineStatus !== 'error');
  const showResult = state.status === 'done' && state.visualUrls && state.visualUrls.length > 0;
  const showError = state.status ==='error' && state.error && !isPending;

  return (
    <div className="grid w-full max-w-6xl items-start gap-6 mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Submit Press Release</CardTitle>
          <CardDescription>Paste the full text of the PIB press release below.</CardDescription>
        </CardHeader>
        <CardContent>
          <form ref={formRef} action={handleFormAction} className="space-y-4">
            <Textarea
              name="pressReleaseText"
              placeholder="Paste press release text here..."
              className="min-h-48 bg-input"
              required
              disabled={isPending}
            />
            <SubmitButton disabled={isPending} />
          </form>
        </CardContent>
      </Card>
      
      {showError && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{state.error}</AlertDescription>
        </Alert>
      )}
      
      {showPipeline && <PipelineTracker status={pipelineStatus} />}
      
      {showResult && (
        <Alert className="border-green-500 text-green-700">
          <CheckCircle className="h-4 w-4 text-green-500" />
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription>
            video generated,{' '}
            <Link
              href={state.visualUrls![0]}
              target="_blank"
              className="font-semibold underline hover:text-green-800"
            >
              view in new page
            </Link>
            .
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
