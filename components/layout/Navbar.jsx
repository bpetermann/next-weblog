import styles from './Navbar.module.css';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillTriangleFill } from 'react-icons/bs';

const Navbar = () => {
  return (
    <header className={styles['fixed']}>
      <div className={styles['navbar']}>
        <div className={styles['navbar-left']}>
          <Link href='/posts'>
            <a className={styles['mobile-posts-link']}>
              <GiHamburgerMenu size={26} className={styles['burger-button']} />
            </a>
          </Link>
          <Link href='/'>
            <a className={styles['logo']}>
              <h2>
                <BsFillTriangleFill
                  size={20}
                  className={styles['logo-icon']}
                />
                <span>next</span>Blog
              </h2>
            </a>
          </Link>
        </div>

        <div className={styles['navbar-center']}>
          <Link href='/posts'>
            <a className={styles['all-posts-link']}>
              <h2>All Posts</h2>
            </a>
          </Link>
        </div>
        <div className={styles['searchbar']}>
          <AiOutlineSearch size={26} className={styles['search-icon']} />
          <input
            className={styles['search']}
            type='text'
            placeholder='Search...'
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
