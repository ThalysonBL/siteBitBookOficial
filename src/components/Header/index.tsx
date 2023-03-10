import React, { useRef, useEffect } from "react";
import styles from "./styles.module.css";

import Logo from "../../../public/logo.png";
import Image from "next/image";

export function Header() {
  return (
    <header id={styles.container}>
      <div id={styles.contentFixed}>
        <div id={styles.content}>
          <Image src={Logo} alt="Logo Bit Book" />

          <a
            id={styles.duvidasApp}
            href="https://api.whatsapp.com/send/?phone=5533984264226&text&type=phone_number&app_absent=0"
          >
            Dúvidas? Fale conosco ✌
          </a>
        </div>
      </div>
    </header>
  );
}
