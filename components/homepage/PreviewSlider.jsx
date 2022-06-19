import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import styles from './PreviewSlider.module.css';

const PreviewSlider = ({ posts }) => {
  return (
    <Swiper
      slidesPerView={1}
      pagination={true}
      modules={[Pagination]}
      navigation
      className={styles['swiper']}
    >
      {posts.map((post) => (
        <SwiperSlide key={post.data.id}>
          <div
            className={styles['swiper-slider-div']}
            onClick={() => test(post.data.id)}
          >
            <Link href={`/posts/${post.data.id}`}>
              <a>
                <Image
                  src={`/images/posts/${post.data.image}`}
                  alt={post.title}
                  width={2400}
                  height={1600}
                  layout='responsive'
                />
              </a>
            </Link>
            <p className={styles['swiper-slider-text']}>{post.data.title}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PreviewSlider;
