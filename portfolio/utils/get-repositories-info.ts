import { graphqlWithAuth } from "./utils";

export type Data = {
  success: boolean;
  totalCount?: number;
  spaceBytes?: number;
  avgerageBytesPerRepo?: number;
  numLanguages?: number;
  timestamp?: number;
};

export default async function handler(): Promise<Data> {
  try {
    const { user } = await graphqlWithAuth(
      `
          query getCommits($owner: String!, $maxRepos: Int!, $maxLanguages: Int!) {
            user(login: $owner) {
              createdAt
              repositories(last: $maxRepos) {
                totalCount
                nodes {
                  id
                  diskUsage
                  primaryLanguage {
                    name
                  }
                  languages(first: $maxLanguages) {
                    totalCount
                    totalSize
                    nodes {
                      name
                    }
                  }
                }
              }
            }
          }
        `,
      {
        owner: "zacowan",
        maxRepos: 100,
        maxLanguages: 10,
      }
    );

    let spaceKb = 0;
    let languages: Array<string> = [];

    user.repositories.nodes.forEach((node: any) => {
      spaceKb += node.diskUsage;
      node.languages.nodes.forEach((lang: any) => {
        if (languages.indexOf(lang.name) == -1) {
          languages.push(lang.name);
        }
      });
    });

    return {
      success: true,
      totalCount: user.repositories.totalCount,
      spaceBytes: spaceKb * 1000,
      avgerageBytesPerRepo: (spaceKb * 1000) / user.repositories.totalCount,
      numLanguages: languages.length,
      timestamp: Date.now(),
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
    };
  }
}
