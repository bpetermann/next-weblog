import PostDetail from '../../components/posts/PostDetail';
import { getAllPosts, getSinglePost } from '../../lib/posts-util';
import Head from 'next/head';

const BlogPost = ({ post }) => {
  return (
    <>
      <Head>
        <title>nextBlog {post.data.title}</title>
        <meta name='description' content='{post.data.title}' />
      </Head>
      <PostDetail post={post} />
    </>
  );
};

export async function getStaticProps(context) {
  const postId = context.params.postId;
  const getPost = getSinglePost(postId);

  return {
    props: {
      post: getPost,
    },
  };
}

export function getStaticPaths() {
  const allPosts = getAllPosts();
  const ids = allPosts.map((post) => post.data.id);

  const pathsWithParams = ids.map((id) => ({ params: { postId: id } }));

  return {
    paths: pathsWithParams,
    fallback: false,
  };
}

export default BlogPost;
