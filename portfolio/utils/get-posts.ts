import { storyblok } from "./utils";

export type Data = {
  success: boolean;
  posts?: Array<Post>;
};

export type Post = {
  _uid: string;
  slug: string;
  full_slug: string;
  title: string;
  image: string;
  intro: string;
  author: string;
  component: string;
  long_text: string;
  tags: Array<string>;
};

export default async function handler(): Promise<Data> {
  try {
    const { data } = await storyblok.get("cdn/stories", {
      starts_with: "posts/",
    });
    let posts: Array<Post> = [];
    data.stories.forEach((s: any) => {
      if (s.content) {
        let content = s.content;
        content.tags = s.content.tags.split(",");
        content.tags.forEach((t: string) => (t = t.trim()));
        content["full_slug"] = s.full_slug;
        content["slug"] = s.slug;
        posts.push(content);
      }
    });
    return {
      success: true,
      posts: posts,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
    };
  }
}
