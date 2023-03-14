import styles from "./styles.module.css";
import LogoWhite from "../../../public/logoWhite.png";
import IconApple from "../../../public/IconApple.svg";
import IconGoogle from "../../../public/IconGoogle.svg";
import IconHearth from "../../../public/IconHearth.svg";
import Image from "next/image";

export function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer id={styles.container}>
      <div>
        <Image src={LogoWhite} alt="imagem Bit Book" />

        <p id={styles.direitos}>© {year} - Todos os direitos reservados</p>
      </div>
      <div>
        <p id={styles.baixeApp}>Baixe nosso app</p>
        <div id={styles.containerIconLoja}>
          <a
            className={styles.containerLinkLoja}
            href="https://play.google.com/store/apps/details?id=br.app.bitbook"
          >
            <Image src={IconGoogle} alt="imagem Google" />
          </a>
          <a
            className={styles.containerLinkLoja}
            href="https://apps.apple.com/br/app/bit-book/id1641568359"
          >
            <Image src={IconApple} alt="imagem Apple" />
          </a>
        </div>
      </div>
      <div id={styles.thirdBox}>
        <p id={styles.textBitTech}>
          Desenvolvido por: Bit Tecnologia
          <Image
            id={styles.iconeHearth}
            src={IconHearth}
            alt="Imagem coração"
          />
        </p>
      </div>
    </footer>
  );
}
