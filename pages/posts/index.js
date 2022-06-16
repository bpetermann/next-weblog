import PostsOverview from '../../components/posts/PostsOverview';
import { getAllPosts } from '../../lib/posts-util';

const AllPosts = ({ posts }) => {
  return (
    <>
      <PostsOverview posts={posts} />
    </>
  );
};

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts: posts,
    },
  };
}

export default AllPosts;
