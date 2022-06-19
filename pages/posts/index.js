import React, { useContext } from 'react';
import PostsOverview from '../../components/posts/PostsOverview';
import { getAllPosts } from '../../lib/posts-util';
import Head from 'next/head';
import SearchContext from '../../store/search-context';

const AllPosts = ({ posts }) => {
  const { searchTerm } = useContext(SearchContext);

  let filteredPosts = posts.filter((post) => {
    return post.data.tags.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <Head>
        <title>nextBlog</title>
        <meta name='description' content='All posts' />
      </Head>
      <PostsOverview posts={filteredPosts} />
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
