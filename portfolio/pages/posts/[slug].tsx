import type { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import getPosts, { Post } from "../../utils/get-posts";
import getPost from "../../utils/get-post";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import Image from "next/image";

type Props = {
  post: Post;
};

const Post: NextPage<Props> = ({ post }) => {
  const router = useRouter();
  return (
    <div className="container mx-auto flex flex-col items-center space-y-4 px-4 py-20">
      <div className="container max-w-prose self-center">
        <a
          onClick={() => router.back()}
          className="flex w-fit cursor-pointer items-center py-2 text-indigo-500 hover:underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </a>
      </div>
      <div className="relative h-96 w-full max-w-prose self-center">
        <Image
          src={post.image + "1310x768/smart"}
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </div>
      <article className="prose prose-indigo">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSlug]}>
          {post.long_text}
        </ReactMarkdown>
      </article>
    </div>
  );
};

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const postsInfo = await getPosts();
  let posts: Array<Post> = [];

  if (postsInfo.success && postsInfo.posts) {
    posts = postsInfo.posts;
  }

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

type Params = {
  params: {
    slug: string;
  };
};

// This also gets called at build time
export async function getStaticProps({ params }: Params) {
  // params contains the post `slug`.
  // If the route is like /posts/post-name, then params.slug is post-name
  const postInfo = await getPost(params.slug);

  // Pass post data to the page via props
  return { props: { post: postInfo.post } };
}

export default Post;
