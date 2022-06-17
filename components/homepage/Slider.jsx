import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import styles from './Slider.module.css';

const Slider = ({ posts, slides, width, height }) => {
  return (
    <Swiper
      slidesPerView={slides}
      pagination={true}
      modules={[Pagination]}
      navigation
      className={styles['swiper']}
    >
      {posts.map((post) => (
        <SwiperSlide>
          <div className={styles['swiper-slider-div']}>
            <Link href={`/posts/${post.data.id}`}>
              <a>
                <Image
                  src={`/images/posts/${post.data.image}`}
                  alt={post.title}
                  width={width}
                  height={height}
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

export default Slider;
