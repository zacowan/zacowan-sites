import { storyblok } from "./utils";

export type Data = {
  success: boolean;
  about?: About;
};

export type About = {
  picture: string;
  who: string;
  passion: string;
  goals: string;
};

export default async function handler(): Promise<Data> {
  try {
    const { data } = await storyblok.get(`cdn/stories/about-me`);
    let about: About | undefined = undefined;
    if (data.story.content) {
      let content = data.story.content;
      content.picture = data.story.content.picture.filename + "/m/";
      about = content;
    }
    return {
      success: true,
      about: about,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
    };
  }
}
