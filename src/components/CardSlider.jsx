// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./CardSlider.css";

// import required modules
import { Pagination } from "swiper";

const CardSlider = () => {
  return (
    <Swiper
      className="mySwiper"
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
    >
      <SwiperSlide>
        <img
          src="https://s.alicdn.com/@sc04/kf/S14bca15588134b6ab30463fe353f42bfl.jpg_640x640.jpg"
          alt=""
          className="h-full"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://s.alicdn.com/@sc04/kf/S1186220d60e646aa99939c9f591a069eX.jpg_640x640.jpg"
          alt=""
          className="h-full"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://s.alicdn.com/@sc04/kf/S068e69fb6c8a4130baa35705532333065.jpg_640x640.jpg"
          alt=""
          className="h-full"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://s.alicdn.com/@sc04/kf/S8f41a9a5a4e041f6852e4ce5562aa375o.jpg_640x640.jpg"
          alt=""
          className="h-full"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://s.alicdn.com/@sc04/kf/Sfd7fea75089d48d9bffd3d4eaee4eb6eg.jpg_640x640.jpg"
          alt=""
          className="h-full"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://s.alicdn.com/@sc04/kf/S9f199a5ebf574310a29a2141452b11b7Z.jpg_640x640.jpg"
          alt=""
          className="h-full"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default CardSlider;
