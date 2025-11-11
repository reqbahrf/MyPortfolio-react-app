import type { GitHubProxyStatResponse } from '../../libs/types/stat';
export const config = {
  runtime: 'edge',
};

const GITHUB_GRAPHQL_URL = 'https://api.github.com/graphql';
const ALLOWED_ORIGIN = process.env.APP_URL;

export default async function handler(req: Request): Promise<Response> {
  const username = 'reqbahrf';
  const origin = req.headers.get('origin') || req.headers.get('referer') || '';

  if (!Boolean(process.env.APP_DEBUG === 'true') && origin !== ALLOWED_ORIGIN) {
    return new Response(
      JSON.stringify({
        error: 'Forbidden',
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
        status: 403,
      }
    );
  }
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

    return new Response(
      JSON.stringify({
        repos,
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
