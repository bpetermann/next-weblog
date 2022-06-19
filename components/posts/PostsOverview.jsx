import styles from './PostsOverview.module.css';
import PostsOverviewItem from './PostsOverviewItem';

const PostsOverview = ({ posts }) => {
  if (posts.length === 0) {
    return (
      <div className={styles['no-post-info']}>
        <p>No posts with this tag</p>
      </div>
    );
  }

  return (
    <ul className={styles['container']}>
      {posts.map((post) => (
        <PostsOverviewItem post={post} key={post.data.id} />
      ))}
    </ul>
  );
};

export default PostsOverview;
