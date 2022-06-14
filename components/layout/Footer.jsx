import styles from './Footer.module.css';
import { SiTwitter, SiSpotify, SiFacebook, SiInstagram } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <div className={styles['icon-container']}>
        <SiTwitter size={36} />
        <SiSpotify size={36} />
        <SiFacebook size={36} />
        <SiInstagram size={36} />
      </div>
    </footer>
  );
};

export default Footer;
