import projectsData from '../content/Project.json';

export interface Project {
  id: string;
  coverImg: string;
  title: string;
  description: string;
  targetModal_id: string;
  tags: string[];
}

export interface ProjectsData {
  projects: Project[];
}

export const findProjectByModalId = (modalId: string): Project | null => {
  const data = projectsData as ProjectsData;
  return data.projects.find(project => project.targetModal_id === modalId) || null;
};

export const getAllModalIds = (): string[] => {
  const data = projectsData as ProjectsData;
  return data.projects.map(project => project.targetModal_id);
};
