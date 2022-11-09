import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import imageCarousel1 from "../public/first-carousel-image.jpg";
import imageCarousel2 from "../public/second-carousel-image.jpg";
import imageCarousel3 from "../public/third-carousel-image.jpg";
import imageCarousel4 from "../public/fourth-carousel-image.jpg";

import { ImageCarousel, Content } from "../styles/BannerStyle";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Pagination, Autoplay } from "swiper";

const Banner = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ImageCarousel>
            {/* <Image src={imageCarousel1} alt="" /> */}
            <Image src={imageCarousel1} alt="" />
            <Content>
              hello world, this content is the most extraordinary content on
              this photo which is glued for now.
            </Content>
          </ImageCarousel>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={imageCarousel2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={imageCarousel3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={imageCarousel4} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
