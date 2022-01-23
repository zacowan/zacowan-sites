import { graphqlWithAuth } from "./utils";

export type Data = {
  success: boolean;
  totalCount?: number;
  codeBytes?: number;
  avgerageBytesPerRepo?: number;
  numLanguages?: number;
  timestamp?: number;
  primaryLanguages?: Array<PrimaryLanguage>;
};

type PrimaryLanguage = {
  name: string;
  bytesWritten: number;
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

    let codeBytes = 0;
    let languages: Array<string> = [];
    let primaryLanguages: Array<PrimaryLanguage> = [];
    const combinedLanguages = new Map([
      ["HTML", "HTML/CSS"],
      ["CSS", "HTML/CSS"],
      ["TypeScript", "TypeScript & JavaScript"],
      ["JavaScript", "TypeScript & JavaScript"],
    ]);

    user.repositories.nodes.forEach((node: any) => {
      codeBytes += node.languages.totalSize;

      if (node.primaryLanguage) {
        const primaryLangName = combinedLanguages.has(node.primaryLanguage.name)
          ? combinedLanguages.get(node.primaryLanguage.name)
          : node.primaryLanguage.name;
        if (
          primaryLanguages.findIndex((el) => el.name == primaryLangName) == -1
        ) {
          primaryLanguages.push({
            name: primaryLangName,
            bytesWritten: node.languages.totalSize,
          });
        } else {
          const prevBytes =
            primaryLanguages[
              primaryLanguages.findIndex((el) => el.name == primaryLangName)
            ].bytesWritten;
          primaryLanguages[
            primaryLanguages.findIndex((el) => el.name == primaryLangName)
          ] = {
            name: primaryLangName,
            bytesWritten: prevBytes + node.languages.totalSize,
          };
        }
      }

      node.languages.nodes.forEach((lang: any) => {
        if (languages.indexOf(lang.name) == -1) {
          languages.push(lang.name);
        }
      });
    });

    // Massage data
    const bannedLanguages = ["Swift", "C#", "TeX", "Shell"];

    let massagedPrimaryLanguages: Array<PrimaryLanguage> = [];
    primaryLanguages.forEach((l) => {
      if (bannedLanguages.indexOf(l.name) == -1) {
        massagedPrimaryLanguages.push(l);
      }
    });

    // Sort
    massagedPrimaryLanguages.sort((a, b) => b.bytesWritten - a.bytesWritten);

    return {
      success: true,
      totalCount: user.repositories.totalCount,
      codeBytes: codeBytes,
      avgerageBytesPerRepo: codeBytes / user.repositories.totalCount,
      primaryLanguages: massagedPrimaryLanguages,
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
