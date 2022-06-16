import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import styles from './PostDetail.module.css';

const PostDetail = ({ post }) => {
  const { content } = post;
  const { title, image } = post.data;
  const imagePath = `/images/posts/${image}`;

  return (
    <article>
      <header className={styles['header']}>
        <h1>{title}</h1>
        <div className={styles['image']}>
          <Image src={imagePath} alt={title} width={300} height={300} />
        </div>
      </header>
      <div className={styles['content']}>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </article>
  );
};

export default PostDetail;
