import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import styles from './Slider.module.css';

const Slider = ({ posts }) => {
  return (
    <Swiper
      slidesPerView={1}
      pagination={true}
      modules={[Pagination]}
      navigation
      className={styles['swiper']}
    >
      {posts.map((post) => (
        <SwiperSlide key={post.id}>
          <div className={styles['swiper-slider-div']}>
            <Link href={`/posts/${post.id}`}>
              <a>
                <Image
                  src={`/images/posts/${post.image}`}
                  alt={post.title}
                  width={2400}
                  height={1600}
                  layout='responsive'
                />
              </a>
            </Link>
            <p className={styles['swiper-slider-text']}>{post.title}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
