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
      <Slider posts={posts} />
      <Introduction />
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
