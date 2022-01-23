import { graphqlWithAuth } from "./utils";

export type Data = {
  success: boolean;
  totalCount?: number;
  timeWeeks?: number;
  timeYears?: number;
  averageOverWeeks?: number;
  timestamp?: number;
};

const START_YEAR = 2018;
const constructDateString = (yr: number) => `${yr}-01-01T00:00:00Z`;

export default async function handler(): Promise<Data> {
  try {
    let totalCommits = 0;

    let year = START_YEAR;
    const endYear = new Date().getFullYear();
    while (year <= endYear) {
      const { user } = await graphqlWithAuth(
        `
          query getCommits($owner: String!, $from: DateTime) {
            user(login: $owner) {
              createdAt
              contributionsCollection(from: $from) {
                totalCommitContributions
              }
            }
          }
        `,
        {
          owner: "zacowan",
          from: constructDateString(year),
        }
      );
      totalCommits += user.contributionsCollection.totalCommitContributions;
      year += 1;
    }
    const weeks = (endYear - START_YEAR) * 52.25;
    const years = endYear - START_YEAR;
    return {
      success: true,
      totalCount: totalCommits,
      timeWeeks: weeks,
      timeYears: years,
      averageOverWeeks: totalCommits / weeks,
      timestamp: Date.now(),
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
    };
  }
}
