// Import Swiper styles
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import AVATAR1 from '../../assets/avatar1.jpg';
import AVATAR2 from '../../assets/avatar2.jpg';
import AVATAR3 from '../../assets/avatar3.jpg';
import AVATAR4 from '../../assets/avatar4.jpg';
import styles from './style.module.scss';




const data = [
  {
    avatar: AVATAR1,
    name: 'John Doe',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    avatar: AVATAR2,
    name: 'Shatta White',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    avatar: AVATAR3,
    name: 'Kwame Despite',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    avatar: AVATAR4,
    name: 'Sarah Smith',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  }
];

export function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper modules={[Pagination]}
              spaceBetween={40}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              className={`${styles.container} ${styles.testimonials}`}>
        {data.map(({ avatar, name, review }, index) => (
          <SwiperSlide key={index} className={`${styles.testimonials__testimonial}`}>
            <div className={`${styles.testimonials__avatar}`}>
              <img src={avatar} />
            </div>
            <h5 className={styles.testimonials__name}>
              {name}
            </h5>
            <small className={styles.testimonials__review}>
              {review}
            </small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}