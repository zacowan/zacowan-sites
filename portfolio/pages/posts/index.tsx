import type { NextPage } from "next";
import getPosts, { Post } from "../../utils/get-posts";

type Props = {
  posts: Array<Post>;
};

const Posts: NextPage<Props> = ({ posts }) => {
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post._uid}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const postsInfo = await getPosts();

  let posts: Array<Post> = [];

  if (postsInfo.success && postsInfo.posts) {
    posts = postsInfo.posts;
  }

  return {
    props: {
      posts: posts,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 24 hours
    revalidate: 60 * 60 * 24, // In seconds
  };
}

export default Posts;
