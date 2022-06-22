import styles from './PreviewSlider.module.css';
import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SearchContext from '../../store/search-context';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

const CategorySlider = ({ categories }) => {
  const { searchTermChange } = useContext(SearchContext);

  return (
    <Swiper
      slidesPerView={3}
      pagination={true}
      modules={[Pagination]}
      navigation
      className={styles['swiper']}
    >
      {categories.map((category) => (
        <SwiperSlide key={category.id}>
          <div
            className={styles['swiper-slider-div']}
            onClick={() => searchTermChange(category.name)}
          >
            <Link href={`/posts/`}>
              <a>
                <Image
                  src={`/images/categories/${category.name}.png`}
                  alt={category.name}
                  width={300}
                  height={200}
                  layout='responsive'
                />
              </a>
            </Link>
            <p className={styles['swiper-slider-text']}>{category.name}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CategorySlider;
