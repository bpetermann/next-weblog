import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import styles from './PostDetail.module.css';

const PostDetail = ({ post }) => {
  const { title, image, content } = post;
  const imagePath = `/images/posts/${image}`;

  return (
    <article>
      <header className={styles['header']}>
        <h1>{title}</h1>
        <Image src={imagePath} alt={title} width={200} height={150} />
      </header>
      <div className={styles['content']}>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </article>
  );
};

export default PostDetail;
