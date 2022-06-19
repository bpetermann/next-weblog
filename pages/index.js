import Head from 'next/head';
import PreviewSlider from '../components/homepage/PreviewSlider';
import Introduction from '../components/homepage/Introduction';
import CategorySlider from '../components/homepage/CategorySlider';
import { getAllPosts, categories } from '../lib/posts-util';

const HomePage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>nextBlog</title>
        <meta name='description' content='Welcome to my Blog' />
      </Head>
      <PreviewSlider posts={posts} />
      <Introduction />
      <CategorySlider categories={categories} />
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
