import type { StatEndPointResponse } from '../../libs/types/stat';
onmessage = async (e: MessageEvent) => {
  if (e.data !== 'process GitHub stat start') return;
  try {
    const fetchStat = async (): Promise<StatEndPointResponse> => {
      const res = await fetch('/api/github/stat');
      const json = await res.json();
      return json;
    };
    const { repos, contributions } = await fetchStat();
    const languageMap = new Map<string, [number, string]>();

    for (const repo of repos) {
      for (const lang of repo.languages.edges) {
        const { name, color } = lang.node;
        languageMap.set(name, [
          (languageMap.get(name)?.[0] || 0) + lang.size,
          color,
        ]);
      }
    }

    const totalBytes = Array.from(languageMap.values()).reduce(
      (acc, [bytes]) => acc + bytes,
      0
    );

    const topLanguages = Array.from(languageMap.entries())
      .map(([name, [bytes, color]]) => ({
        name,
        bytes,
        color,
        percent: (bytes / totalBytes) * 100,
      }))
      .sort((a, b) => b.bytes - a.bytes)
      .slice(0, 5);

    postMessage({ topLanguages, contributions });
  } catch (error) {
    console.error(error);
    postMessage({ error: error || 'Failed to fetch GitHub stats' });
  }
};
