import Link from 'next/link';
import Image from 'next/image';
import styles from './PostsOverviewItem.module.css';

const PostsOverviewItem = ({ post }) => {
  const { id, title, image, preview, date } = post.data;

  const linkPath = `/posts/${id}`;
  const imagePath = `/images/posts/${image}`;
  const formattedDate = new Date(date).toLocaleDateString('en-Us', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <li className={styles['post']}>
      <Link href={linkPath}>
        <a>
          <div className={styles['image']}>
            <Image
              src={imagePath}
              alt={title}
              width={300}
              height={200}
              layout='responsive'
            />
          </div>
          <div className={styles['content']}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{preview}[…]</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostsOverviewItem;
