import { graphql } from "@octokit/graphql";
import StoryblokClient from "storyblok-js-client";

// GitHub graphql access
export const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: `token ${process.env.GIT_PAT}`,
  },
});

// Storyblok client access
export const storyblok = new StoryblokClient({
  accessToken: `${process.env.STORYBLOK_ACCESS_TOKEN}`,
});
