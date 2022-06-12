import styles from './Navbar.module.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineSearch } from 'react-icons/ai';

const Navbar = () => {
  return (
    <header className={styles['header']}>
      <div className={styles['navbar-left-content']}>
        <GiHamburgerMenu size={26} className={styles['hamburger']} />
        <h3 className={styles['logo']}>
          <span>next</span>Blog
        </h3>
      </div>
      <div className={styles['searchbar']}>
        <AiOutlineSearch size={26} className={styles['search-icon']} />
        <input className={styles['search']} type='text' placeholder='Search...' />
      </div>
    </header>
  );
};

export default Navbar;
