import Head from 'next/head';
import classes from '../styles/404.module.css';
import Logo from '../components/layout/Logo';

const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>Page Not found</title>
        <meta name='description' content="Sorry, we can't find that page!" />
      </Head>
      <div className={classes['container']}>
        <h2 className={classes['not-found-text']}>
          Sorry, we can&apos;t find that page!
        </h2>
        <Logo />
      </div>
    </>
  );
};

export default NotFoundPage;
