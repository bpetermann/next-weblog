import PostDetail from '../../components/posts/PostDetail';
import { DUMMY_POSTS } from '../../lib/posts-util';

const BlogPost = ({ post }) => {
  return (
    <>
      <PostDetail post={post} />
    </>
  );
};

export async function getStaticProps(context) {
  const postId = context.params.postId;
  const getPost = DUMMY_POSTS.find((post) => post.id === postId);

  return {
    props: {
      post: getPost,
    },
  };
}

export function getStaticPaths() {
  const ids = DUMMY_POSTS.map((post) => post.id);
  const pathsWithParams = ids.map((id) => ({ params: { postId: id } }));

  return {
    paths: pathsWithParams,
    fallback: false,
  };
}

export default BlogPost;
