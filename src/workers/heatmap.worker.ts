import type {
  HeatmapWorkerIn,
  HeatmapWorkerOut,
} from '.././../libs/types/HeatmapWorker.types';

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
] as const;
const DAYS_IN_MONTH = 31;
const dayCategories = Array.from({ length: DAYS_IN_MONTH }, (_, i) =>
  (i + 1).toString(),
);
self.onmessage = (e: MessageEvent<HeatmapWorkerIn['contributions']>) => {
  const contributions = e.data;

  const contributionsByMonth: Record<number, Record<number, number>> = {};

  for (const item of contributions) {
    const date = new Date(item.date);
    const month = date.getMonth();
    const dayOfMonth = date.getDate();

    (contributionsByMonth[month] ??= {})[dayOfMonth] = item.contributionCount;
  }

  const series = MONTHS.map((monthName, monthIndex) => {
    const monthData = contributionsByMonth[monthIndex] || {};
    const data = dayCategories.map((day) => ({
      x: day,
      y: monthData[parseInt(day)] || 0,
    }));

    return {
      name: monthName,
      data: data,
    };
  }).reverse();

  self.postMessage({ series, dayCategories } as HeatmapWorkerOut);
};
