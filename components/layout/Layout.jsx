import Navbar from './Navbar';
import styles from './Layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className={styles['container']}>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
