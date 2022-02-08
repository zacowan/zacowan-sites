import type { NextPage } from "next";
import Link from "next/link";
import { micromark } from "micromark";
import getPosts, { Post } from "../../utils/get-posts";
import getPost from "../../utils/get-post";
import Image from "next/image";

type Props = {
  post: Post;
};

const Post: NextPage<Props> = ({ post }) => {
  return (
    <div className="container mx-auto flex flex-col items-center space-y-4 p-4">
      <div className="container max-w-prose self-center text-xl">
        <Link href="/posts">
          <a className="flex w-fit items-center py-2 text-indigo-500 hover:underline">
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
            All Posts
          </a>
        </Link>
      </div>
      <div className="relative h-96 w-96 self-center">
        <Image src={post.image} alt="" layout="fill" />
      </div>
      <article
        className="prose lg:prose-xl prose-slate"
        dangerouslySetInnerHTML={{ __html: micromark(post.long_text) }}
      />
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
