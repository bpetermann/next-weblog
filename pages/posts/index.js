import PostsOverview from '../../components/posts/PostsOverview';
import { getAllPosts } from '../../lib/posts-util';
import Head from 'next/head';

const AllPosts = ({ posts }) => {
  return (
    <>
      <Head>
        <title>nextBlog</title>
        <meta name='description' content='All posts' />
      </Head>
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
