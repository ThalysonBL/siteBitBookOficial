import { Container } from "./styles";
import styled from "styled-components";
import LogoWhite from "../../assets/logoWhite.png";
import IconApple from "../../assets/IconApple.svg";
import IconGoogle from "../../assets/IconGoogle.svg";
import IconHearth from "../../assets/IconHearth.svg";
import Image from 'next/image';

export function Footer() {
  return (
    <Container>
      <div>
        <Image src={LogoWhite} alt="imagem Bit Book" />

        <p id="direitos">© 2023 - Todos os direitos reservados</p>
      </div>
      <div>
        <p id="baixeApp">Baixe nosso app</p>
        <a
          className="containerLinkLoja"
          href="https://play.google.com/store/apps/details?id=com.bittrainers"
        >
          <Image className="imgLojas" src={IconGoogle} alt="imagem Google" />
        </a>
        <a
          className="containerLinkLoja"
          href="https://apps.apple.com/br/app/bittrainers/id1389395944"
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
    </Container>
  );
}
