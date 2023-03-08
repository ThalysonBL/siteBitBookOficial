import React, { useRef, useState } from "react";

import styles from "./styles.module.css";

import Image from "next/image";
import imgPlim from "../../../public/imgPlim.png";
import imgGiganet from "../../../public/imgGiganet.png";
import imgConexao from "../../../public/imgConexao.png";
import imgSumicity from "../../../public/imgSumicity.png";
import imgOutCenter from "../../../public/imgOutCenter.png";
import imgCuby from "../../../public/imgCuby.png";
import imgAvanza from "../../../public/imgAvanza.png";
import imgAlares from "../../../public/imgAlares.png";
import imgBlink from "../../../public/imgBlink.png";
import imgMultiplay from "../../../public/imgMultiplay.png";

export function SliderProvedores() {
  const images = [
    {
      id: 1,
      img: (
        <Image
          src={imgPlim}
          alt=" Imagem provedor"
          className={styles.imagemProvedor}
        />
      ),
    },
    {
      id: 2,
      img: (
        <Image
          src={imgGiganet}
          alt=" Imagem provedor"
          className={styles.imagemProvedor}
        />
      ),
    },
    {
      id: 3,
      img: (
        <Image
          src={imgConexao}
          alt=" Imagem provedor"
          className={styles.imagemProvedor}
        />
      ),
    },
    {
      id: 4,
      img: (
        <Image
          src={imgSumicity}
          alt=" Imagem provedor"
          className={styles.imagemProvedor}
        />
      ),
    },
    {
      id: 5,
      img: (
        <Image
          src={imgOutCenter}
          alt=" Imagem provedor"
          className={styles.imagemProvedor}
        />
      ),
    },
    {
      id: 6,
      img: (
        <Image
          src={imgCuby}
          alt=" Imagem provedor"
          className={styles.imagemProvedor}
        />
      ),
    },
    {
      id: 7,
      img: (
        <Image
          src={imgAvanza}
          alt=" Imagem provedor"
          className={styles.imagemProvedor}
        />
      ),
    },
    {
      id: 8,
      img: (
        <Image
          src={imgAlares}
          alt=" Imagem provedor"
          className={styles.imagemProvedor}
        />
      ),
    },
    {
      id: 9,
      img: (
        <Image
          src={imgBlink}
          alt=" Imagem provedor"
          className={styles.imagemProvedor}
        />
      ),
    },
    {
      id: 10,
      img: (
        <Image
          src={imgMultiplay}
          alt=" Imagem provedor"
          className={styles.imagemProvedor}
        />
      ),
    },
  ];

  return (
    <div class={styles.wrapper}>
      <div class={styles.slider}>
        <div class={styles.slide_track}>
          {images.map((item) => {
            return (
              <div class={styles.slide} key={item.id}>
                {item.img}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
