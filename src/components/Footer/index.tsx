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
    <footer id="container">
      <div>
        <Image src={LogoWhite} alt="imagem Bit Book" />

        <p id="direitos">© {year} - Todos os direitos reservados</p>
      </div>
      <div>
        <p id="baixeApp">Baixe nosso app</p>
        <a
          className="containerLinkLoja"
          href="https://play.google.com/store/apps/details?id=br.app.bitbook"
        >
          <Image className="imgLojas" src={IconGoogle} alt="imagem Google" />
        </a>
        <a
          className="containerLinkLoja"
          href="https://apps.apple.com/br/app/bit-book/id1641568359"
        >
          <Image className="imgLojas" src={IconApple} alt="imagem Apple" />
        </a>
      </div>
      <div id="thirdBox">
        <p id="textBitTech">
          Desenvolvido por: Bit Tecnologia
          <Image id="iconeHearth" src={IconHearth} alt="Imagem coração" />
        </p>
      </div>
    </footer>
  );
}
