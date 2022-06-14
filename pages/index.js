import Slider from '../components/homepage/Slider';
import Introduction from '../components/homepage/Introduction';
import { DUMMY_POSTS } from '../lib/posts-util';

const HomePage = () => {
  return (
    <div>
      <Slider posts={DUMMY_POSTS} />
      <Introduction />
    </div>
  );
};


export default HomePage;
