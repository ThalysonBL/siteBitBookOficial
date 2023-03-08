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
import Image from "next/image";

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
        <SwiperSlide className={styles.boxItems}>
          <Image className={styles.imageBox} src={IconDown} alt="imagem" />
          <span>
            <p className={styles.boxTitle}>Baixe grátis</p>
            <p className={styles.boxDetail}>download simples e fácil.</p>
          </span>
        </SwiperSlide>
        <SwiperSlide className={styles.boxItems}>
          <Image className={styles.imageBox} src={IconSeguranca} alt="imagem" />
          <span>
            <p className={styles.boxTitle}>Temas autorais</p>
            <p className={styles.boxDetail}>toda semana temas novos.</p>
          </span>
        </SwiperSlide>
        <SwiperSlide className={styles.boxItems}>
          <Image className={styles.imageBox} src={IconFolhaCheck} alt="imagem" />
          <span>
            <p className={styles.boxTitle}>Leitura fácil</p>
            <p className={styles.boxDetail}>utilize em qualquer plataforma.</p>
          </span>
        </SwiperSlide>
        <SwiperSlide className={styles.boxItems}>
          <Image className={styles.imageBox} src={IconCronometro} alt="imagem" />
          <span>
            <p className={styles.boxTitle}>Acesso ilimitado</p>
            <p className={styles.boxDetail}>a todo conteúdo do app</p>
          </span>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
