import React, { useRef, useEffect, useState } from "react";

import styles from "./styles.module.scss";

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

import { api } from "../../services/api";

export function SliderProvedores() {
  const [images, setImages] = useState<any>([]);

  useEffect(() => {
    api.get("/api/empresas-integracoes").then((response) => {
      const data = response.data;
      setImages(data);
    });
  }, []);

  return (
    <div className={styles.containerSliderProvedores}>
      <div className={styles.slider}>
        <div className={styles.slide_track}>
          {images.empresas?.map((item: any) => {
            return (
              <div className={styles.slide} key={item.id}>
                <Image
                  src={item.img}
                  alt="Imagem parceiro Bit Book"
                  width="72"
                  height="66"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
