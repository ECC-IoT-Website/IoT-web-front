import type { Member } from "../types/member";

export type Achievement = {
  id: number;
  title: string;
  description?: string;
  category: string;
  date: string;
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
  projectId?: number;
  members?: Member[];
};
