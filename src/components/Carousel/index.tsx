import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

import "./styles.css";
import { useBreakpointValue } from "@chakra-ui/react";

export function Carousel() {
  const isWideSize = useBreakpointValue({ sm: false, md: false, lg: true });
  const numberOne = 4.5;
  const numberTwo = 1.5;
  const toogle = isWideSize ? numberOne : numberTwo;
  return (
    <>
      {isWideSize ? (
        <Swiper
          slidesPerView={4.5}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          style={{ width: "100%", maxHeight: "280px" }}
        >
          <SwiperSlide className="styleItemSlide">Slide 1</SwiperSlide>
          <SwiperSlide className="styleItemSlide">Slide 2</SwiperSlide>
          <SwiperSlide className="styleItemSlide">Slide 3</SwiperSlide>
          <SwiperSlide className="styleItemSlide">Slide 4</SwiperSlide>
          <SwiperSlide className="styleItemSlide">Slide 5</SwiperSlide>
        </Swiper>
      ) : (
        <Swiper
          slidesPerView={1.5}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          style={{ width: "100%", maxHeight: "280px" }}
        >
          <SwiperSlide className="styleItemSlide">Slide 1</SwiperSlide>
          <SwiperSlide className="styleItemSlide">Slide 2</SwiperSlide>
          <SwiperSlide className="styleItemSlide">Slide 3</SwiperSlide>
          <SwiperSlide className="styleItemSlide">Slide 4</SwiperSlide>
          <SwiperSlide className="styleItemSlide">Slide 5</SwiperSlide>
        </Swiper>
      )}
    </>
  );
}
