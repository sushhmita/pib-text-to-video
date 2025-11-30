'use client';

import { useState } from 'react';
import type { VideoProject } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { CheckCircle2, MoreHorizontal, Send, ThumbsUp, XCircle } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const initialProjects: VideoProject[] = [
  {
    id: 'vid001',
    title: 'New Space Mission Launch',
    submittedDate: '2024-07-20',
    status: 'Pending Approval',
    summary: 'ISRO has announced a new mission to study solar flares. The mission, named Aditya-L2, will launch in 2025.',
    visualUrl: PlaceHolderImages.find(img => img.id === 'dashboard-1')?.imageUrl || ''
  },
  {
    id: 'vid002',
    title: 'Economic Growth Report Q2',
    submittedDate: '2024-07-19',
    status: 'Approved',
    summary: 'The quarterly economic report shows a 6.8% GDP growth, driven by the manufacturing and service sectors.',
    visualUrl: PlaceHolderImages.find(img => img.id === 'dashboard-2')?.imageUrl || ''
  },
  {
    id: 'vid003',
    title: 'National Health Initiative',
    submittedDate: '2024-07-18',
    status: 'Published',
    summary: 'A new nationwide health initiative aims to provide free check-ups in rural areas, targeting over 10 million citizens.',
    visualUrl: PlaceHolderImages.find(img => img.id === 'dashboard-3')?.imageUrl || ''
  },
  {
    id: 'vid004',
    title: 'Infrastructure Project Update',
    submittedDate: '2024-07-17',
    status: 'Rejected',
    summary: 'Update on the national highway expansion project. The summary was unclear and visuals were not relevant.',
    visualUrl: PlaceHolderImages.find(img => img.id === 'dashboard-4')?.imageUrl || ''
  },
];


export default function DashboardClient() {
  const [projects, setProjects] = useState<VideoProject[]>(initialProjects);

  const handleStatusChange = (id: string, newStatus: VideoProject['status']) => {
    setProjects(projects.map(p => (p.id === id ? { ...p, status: newStatus } : p)));
  };

  const getStatusBadge = (status: VideoProject['status']) => {
    switch (status) {
      case 'Pending Approval':
        return <Badge variant="secondary">Pending</Badge>;
      case 'Approved':
        return <Badge variant="outline" className="border-accent text-accent-foreground">Approved</Badge>;
      case 'Rejected':
        return <Badge variant="destructive">Rejected</Badge>;
      case 'Published':
        return <Badge variant="default" className="bg-primary/90">Published</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="grid w-full max-w-6xl items-start gap-6 mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Video Projects</CardTitle>
          <CardDescription>A list of recently generated videos for review.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead className="hidden md:table-cell">Submitted</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell className="font-medium">{project.title}</TableCell>
                  <TableCell className="hidden md:table-cell">{project.submittedDate}</TableCell>
                  <TableCell>{getStatusBadge(project.status)}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button aria-haspopup="true" size="icon" variant="ghost">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        {project.status === 'Pending Approval' && (
                          <>
                            <DropdownMenuItem onClick={() => handleStatusChange(project.id, 'Approved')}>
                              <CheckCircle2 className="mr-2 h-4 w-4" /> Approve
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive" onClick={() => handleStatusChange(project.id, 'Rejected')}>
                              <XCircle className="mr-2 h-4 w-4" /> Reject
                            </DropdownMenuItem>
                          </>
                        )}
                        {project.status === 'Approved' && (
                           <DropdownMenuItem onClick={() => handleStatusChange(project.id, 'Published')}>
                              <Send className="mr-2 h-4 w-4" /> Publish
                            </DropdownMenuItem>
                        )}
                         {project.status === 'Rejected' && (
                           <DropdownMenuItem onClick={() => handleStatusChange(project.id, 'Pending Approval')}>
                              <ThumbsUp className="mr-2 h-4 w-4" /> Re-Submit
                            </DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
