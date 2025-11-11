interface Edges {
  size: number;
  node: {
    name: string;
    color: string;
  };
}

interface Languages {
  edges: Edges[];
}

interface Node {
  languages: Languages;
}

interface Repositories {
  nodes: Node[];
}

interface ContributionsCollection {
  contributionCalendar: {
    totalContributions: number;
    weeks: {
      contributionDays: {
        contributionCount: number;
        date: string;
      }[];
    }[];
  };
}

interface User {
  user: {
    repositories: Repositories;
    contributionsCollection: ContributionsCollection;
  };
}

export interface GitHubProxyStatResponse {
  data: User;
}

export interface TopLanguagesProps {
  name: string;
  bytes: number;
  color: string;
  percent: number;
}

export interface ContributionDay {
  contributionCount: number;
  date: string;
}

export interface ContributionsProps {
  contributions: ContributionDay[];
}

export interface StatEndPointResponse {
  topLanguages: Repositories;
  contributions: ContributionsCollection['contributionCalendar'];
}

export interface StatLocalState {
  topLanguages: TopLanguagesProps[];
  contributions: ContributionsCollection['contributionCalendar'];
}
