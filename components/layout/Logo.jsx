import styles from './Logo.module.css';
import { BsFillTriangleFill } from 'react-icons/bs';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href='/'>
      <a className={styles['logo']}>
        <h2>
          <BsFillTriangleFill size={20} className={styles['logo-icon']} />
          <span>next</span>Blog
        </h2>
      </a>
    </Link>
  );
};

export default Logo;
