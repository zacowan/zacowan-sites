import { storyblok } from "./utils";
import type { Post } from "./get-posts";

export type Data = {
  success: boolean;
  post?: Post;
};

export default async function handler(slug: string): Promise<Data> {
  try {
    const { data } = await storyblok.get(`cdn/stories/posts/${slug}`);
    let post: Post | undefined = undefined;
    if (data.story.content) {
      let content = data.story.content;
      content.tags = data.story.content.tags.split(",");
      content.tags.forEach((t: string) => (t = t.trim()));
      content["full_slug"] = data.story.full_slug;
      content["slug"] = data.story.slug;
      post = content;
    }
    return {
      success: true,
      post: post,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
    };
  }
}
