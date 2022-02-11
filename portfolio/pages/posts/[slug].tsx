import type {
  NextPage,
  GetStaticPathsResult,
  GetStaticPropsResult,
} from "next";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import getPosts, { Post } from "../../utils/get-posts";
import getPost from "../../utils/get-post";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import Image from "next/image";

type Props = {
  post: Post | null;
};

const Post: NextPage<Props> = ({ post }) => {
  return (
    <div className="container mx-auto flex flex-col items-center space-y-4 p-4 pb-20">
      <div className="container max-w-prose self-center">
        <Link href="/#posts">
          <a className="flex w-fit cursor-pointer items-center py-2 text-indigo-500 hover:underline">
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
            All posts
          </a>
        </Link>
      </div>
      {post && (
        <>
          <div className="relative h-72 w-full max-w-prose self-center md:h-96">
            <Image
              src={post.image + "1310x768/smart"}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
          <article className="prose prose-indigo w-full">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeSlug]}
            >
              {post.long_text}
            </ReactMarkdown>
          </article>
        </>
      )}
      {!post && <p>Whoops! Looks like this post can no longer be found.</p>}
    </div>
  );
};

// This function gets called at build time
export async function getStaticPaths(): Promise<GetStaticPathsResult> {
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
  return { paths, fallback: "blocking" };
}

type Params = {
  params: {
    slug: string;
  };
};

// This also gets called at build time
export async function getStaticProps({
  params,
}: Params): Promise<GetStaticPropsResult<Props>> {
  // params contains the post `slug`.
  // If the route is like /posts/post-name, then params.slug is post-name
  const postInfo = await getPost(params.slug);

  // Pass post data to the page via props
  return {
    props: { post: postInfo.post || null },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 24 hours
    revalidate: 60 * 60 * 24, // In seconds
  };
}

export default Post;
