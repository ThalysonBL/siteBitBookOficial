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
          <Image
            src={IconGoogle}
            alt="imagem Google"
            style={{ zIndex: 900, display: "block" }}
          />
          <Image src={IconApple} alt="imagem Apple" />
        </div>
        <a
          className={styles.containerLinkLoja}
          href="https://play.google.com/store/apps/details?id=br.app.bitbook"
        ></a>

        <a
          className={styles.containerLinkLoja}
          href="https://apps.apple.com/br/app/bit-book/id1641568359"
        ></a>
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
