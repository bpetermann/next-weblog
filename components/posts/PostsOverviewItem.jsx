import Link from 'next/link';
import Image from 'next/image';
import styles from './PostsOverviewItem.module.css';

const PostsOverviewItem = ({ post }) => {
  return (
    <li className={styles['post']}>
      <Link href={`/posts/${post.id}`}>
        <a>
          <div className={styles['image']}>
            <Image
              src={`/images/${post.image}`}
              alt={post.title}
              width={300}
              height={200}
              layout='responsive'
            />
          </div>
          <div className={styles['content']}>
            <h3>{post.title}</h3>
            <p>{post.text}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostsOverviewItem;
