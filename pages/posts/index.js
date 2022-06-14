import PostsOverview from '../../components/posts/PostsOverview';
import { DUMMY_POSTS } from '../../lib/posts-util';

const AllPosts = ({ posts }) => {
  return (
    <>
      <PostsOverview posts={posts} />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      posts: DUMMY_POSTS,
    },
  };
}

export default AllPosts;
