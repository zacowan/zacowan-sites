import { graphql } from "@octokit/graphql";

export const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: `token ${process.env.GIT_PAT}`,
  },
});
