import type { GitHubProxyStatResponse } from '../../libs/types/stat';
export const config = {
  runtime: 'edge',
};

const GITHUB_GRAPHQL_URL = 'https://api.github.com/graphql';

export default async function handler(): Promise<Response> {
  const username = 'reqbahrf';

  const query = `
    query($login: String!) {
      user(login: $login) {
        repositories(ownerAffiliations: OWNER, first: 100) {
          nodes {
            languages(first: 5, orderBy: { field: SIZE, direction: DESC }) {
              edges {
                size
                node {
                  name
                  color
                }
              }
            }
          }
        }
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
      }
    }
  `;

  try {
    const res = await fetch(GITHUB_GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
      body: JSON.stringify({ query, variables: { login: username } }),
    });

    const json = (await res.json()) as GitHubProxyStatResponse;

    if (!res.ok) {
      throw new Error(JSON.stringify(json));
    }

    const repos = json.data.user.repositories.nodes;
    const calendar =
      json.data.user.contributionsCollection.contributionCalendar;

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

    const topLanguages = Array.from(languageMap.entries())
      .map(([name, [bytes, color]]) => ({ name, bytes, color }))
      .sort((a, b) => b.bytes - a.bytes)
      .slice(0, 5);

    return new Response(
      JSON.stringify({
        topLanguages,
        contributions: {
          totalContributions: calendar.totalContributions,
          weeks: calendar.weeks,
        },
      }),
      {
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'max-age=3600',
        },
        status: 200,
      }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        error: error?.message || 'Failed to fetch GitHub stats',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
