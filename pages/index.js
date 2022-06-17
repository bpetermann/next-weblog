import Slider from '../components/homepage/Slider';
import Introduction from '../components/homepage/Introduction';
import { getAllPosts } from '../lib/posts-util';
import Head from 'next/head';

const HomePage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>nextBlog</title>
        <meta name='description' content='Welcome to my Blog' />
      </Head>
      <Slider posts={posts} slides={1} width={2400} height={1600} />
      <Introduction />
      <Slider posts={posts} slides={3} width={300} height={200} />
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

export default HomePage;
