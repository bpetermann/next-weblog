import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { SearchContextProvider } from '../store/search-context';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <SearchContextProvider>
      <Layout>
        <Head>
          <title>nextBlog</title>
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </SearchContextProvider>
  );
}

export default MyApp;
