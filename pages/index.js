import Slider from '../components/homepage/Slider';
import Introduction from '../components/homepage/Introduction';
import { getAllPosts } from '../lib/posts-util';

const HomePage = ({ posts }) => {
  return (
    <div>
      <Slider posts={posts} />
      <Introduction />
    </div>
  );
};

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts: posts,
    },
  };
}

export default HomePage;
