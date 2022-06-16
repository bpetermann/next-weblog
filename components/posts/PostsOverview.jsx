import styles from './PostsOverview.module.css';
import PostsOverviewItem from './PostsOverviewItem';

const PostsOverview = ({ posts }) => {

  return (
    <ul className={styles['container']}>
      {posts.map((post) => (
        <PostsOverviewItem post={post} key={post.id} />
      ))}
    </ul>
  );
};

export default PostsOverview;
