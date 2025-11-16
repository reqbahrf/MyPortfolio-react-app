import type { ContributionDay } from 'libs/types/stat';

export interface HeatmapWorkerIn {
  contributions: ContributionDay[];
}

export interface HeatmapWorkerOut {
  series: {
    name: string;
    data: { x: string; y: number }[];
  }[];
  dayCategories: string[];
}
