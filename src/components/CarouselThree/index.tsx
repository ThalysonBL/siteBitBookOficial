import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

import styles from "./styles.module.css";

import IconDown from "../../../public/IconDown.svg";
import IconSeguranca from "../../../public/IconSeguranca.svg";
import IconFolhaCheck from "../../../public/IconFolhaCheck.svg";
import IconCronometro from "../../../public/IconCronometro.svg";
import IconBitBook from "../../../public/IconBitBook.svg";
import Image from 'next/image';

export function CarouselThree() {
  const numberOne = 1.2;
  return (
    <div id={styles.containerCarousel}>
      <Swiper
        slidesPerView={1.2}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
        style={{
          width: "100%",
          maxHeight: "280px",
          marginTop: "41px",
          marginBottom: "10px",
        }}
      >
        <SwiperSlide className="boxItems">
          <Image className="imageBox" src={IconDown} alt="imagem" />
          <span>
            <p className="boxTitle">Baixe grátis</p>
            <p className="boxDetail">download simples e fácil.</p>
          </span>
        </SwiperSlide>
        <SwiperSlide className="boxItems">
          <Image className="imageBox" src={IconSeguranca} alt="imagem" />
          <span>
            <p className="boxTitle">Temas autorais</p>
            <p className="boxDetail">toda semana temas novos.</p>
          </span>
        </SwiperSlide>
        <SwiperSlide className="boxItems">
          <Image className="imageBox" src={IconFolhaCheck} alt="imagem" />
          <span>
            <p className="boxTitle">Leitura fácil</p>
            <p className="boxDetail">utilize em qualquer plataforma.</p>
          </span>
        </SwiperSlide>
        <SwiperSlide className="boxItems">
          <Image className="imageBox" src={IconCronometro} alt="imagem" />
          <span>
            <p className="boxTitle">Acesso ilimitado</p>
            <p className="boxDetail">a todo conteúdo do app</p>
          </span>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
