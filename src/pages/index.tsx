import Head from "next/head";
import reactLogo from "../../public/react.svg";
import styles from "@/styles/Home.module.css";
import React, { useRef } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Carousel } from "../components/Carousel";
import { AccordionHome } from "../components/AccordionHome";
import { CarouselThree } from "../components/CarouselThree";

import logo from "../../public/logo.png";
import ImgApple from "../../public/appleStore.svg";
import ImgGoogle from "../../public/googleStore.svg";
import ImgBarra from "../../public/risco.png";
import ImgOneSection from "../../public/imgOneSection.png";
import ImgCellMobile from "../../public/imgCellMobile.png";

import IconRiscado from "../../public/IconRiscado.png";

import IconStar from "../../public/IconStar.svg";
import IconTable from "../../public/IconTable.svg";
import IconPointer from "../../public/IconPointer.svg";
import IconEstante from "../../public/IconEstante.svg";
import RiscoDeLevis from "../../public/riscoDeLevis.png";

import IconDown from "../../public/IconDown.svg";
import IconSeguranca from "../../public/IconSeguranca.svg";
import IconFolhaCheck from "../../public/IconFolhaCheck.svg";
import IconCronometro from "../../public/IconCronometro.svg";
import IconBitBook from "../../public/IconBitBook.svg";

import ImgUsers from "../../public/ImgUsers.png";
import Image from "next/image";
import ImgStars from "../../public/ImgStars.png";
import { SliderProvedores } from "../components/SliderProvedores/index";

import {
  useBreakpointValue,
  Modal,
  Box,
  Button,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";

import Confetti from "react-confetti";
import { ContentModal } from "../components/ContentModal/index";

export default function Home() {
  const lista = [
    {
      id: 1,
      img: IconStar,
      title: "Conteúdos exclusivos",
      description: "Todos os conteúdos são exclusivos nossos.",
    },
    {
      id: 2,
      img: IconTable,
      title: "Plataforma Intuitiva",
      description: "Com poucos segundos você se sentirá em casa.",
    },
    {
      id: 3,
      img: IconPointer,
      title: "Continue sua leitura",
      description: "Continue a ler seu conteúdo de onde parou.",
    },
    {
      id: 4,
      img: IconEstante,
      title: "Estante",
      description: "Salve seus e-books na estante para ler depois.",
    },
  ];

  const { onOpen, onClose, isOpen } = useDisclosure();
  const finalRef = React.useRef(null);

  return (
    <article>
      <Head>
        <title>Bit Book | Home</title>
      </Head>
      <Header />
      <section id={styles.sectionOne}>
        <div id={styles.containerSectionOne}>
          <div id={styles.contentOne}>
            <p id={styles.headline}>Seu guia digital de saúde e bem-estar</p>

            <p id={styles.subscriptionOne}>
              Descubra se já é cliente de um de nossos parceiros e tenha acesso
              a novos ebooks todos os meses, de forma gratuita e ilimitada.
            </p>
            <button id={styles.verifyBeneficio} onClick={onOpen}>
              Verifique o seu benefício
            </button>

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />

              <ModalContent
                bg="#ffffff"
                width="50%"
                padding="10px 20px"
                margin=" 10% auto"
                borderRadius="8px"
              >
                <ModalCloseButton display="inline" margin="0 0 0 auto" />
                <ModalBody>
                  <ContentModal />
                </ModalBody>
              </ModalContent>
            </Modal>
          </div>
        </div>
      </section>

      <section id={styles.sectionTwo}>
        <p id={styles.headlineTwo}>Cuidar da saúde nunca foi tão fácil...</p>
        <p id={styles.subscriptionTwo}>
          Reunimos diversos conteúdos especializados em um ambiente digital
          super prático para você se cuidar sempre.
        </p>

        <div id={styles.contentTwoList}>
          {lista.map((lista) => {
            return (
              <div className={styles.itemlist} key={lista.id}>
                <span>
                  <Image src={lista.img} alt="imagem" />
                </span>
                <p className={styles.titleListTwo}>{lista.title}</p>
                <p className={styles.descriptionListTwo}>{lista.description}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section id={styles.sectionThree}>
        <div id={styles.containerThree}>
          <div id={styles.containerThreeLeft}>
            <p id={styles.titleThree}>
              Tenha acesso a diversos e-books exclusivos
            </p>
            <Image
              src={RiscoDeLevis}
              style={{ margin: "-10px 0 10px 0", width: "100%" }}
              alt="Imagem riscado"
            />
            <p id={styles.descriptionThree}>
              A maior plataforma de saúde do corpo e da mente.
            </p>
          </div>

          <div id={styles.contentRightThree}>
            <div id={styles.lista}>
              <div id={styles.boxLeft}>
                <div className={styles.boxItems}>
                  <Image
                    className={styles.imageBox}
                    src={IconDown}
                    alt="imagem"
                  />
                  <span>
                    <p className={styles.boxTitle}>Baixe grátis</p>
                    <p className={styles.boxDetail}>
                      download simples e fácil.
                    </p>
                  </span>
                </div>
                <div className={styles.boxItems} style={{ marginTop: "50px" }}>
                  <Image
                    className={styles.imageBox}
                    src={IconSeguranca}
                    alt="imagem"
                  />
                  <span>
                    <p className={styles.boxTitle}>Temas autorais</p>
                    <p className={styles.boxDetail}>toda semana temas novos.</p>
                  </span>
                </div>
              </div>
              <div id={styles.boxRight}>
                <div className={styles.boxItems}>
                  <Image
                    className={styles.imageBox}
                    src={IconFolhaCheck}
                    alt="imagem"
                  />
                  <span>
                    <p className={styles.boxTitle}>Leitura fácil</p>
                    <p className={styles.boxDetail}>
                      utilize em qualquer plataforma.
                    </p>
                  </span>
                </div>
                <div className={styles.boxItems} style={{ marginTop: "50px" }}>
                  <Image
                    className={styles.imageBox}
                    src={IconCronometro}
                    alt="imagem"
                  />
                  <span>
                    <p className={styles.boxTitle}>Acesso ilimitado</p>
                    <p className={styles.boxDetail}>a todo conteúdo do app</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <CarouselThree />
        </div>
      </section>

      <section id={styles.sectionFour}>
        <div>
          <p id={styles.faq}>FAQ</p>
          <p id={styles.headSix}>
            Tudo o que você precisa saber sobre o BitBook
          </p>
          <a id={styles.buttonDownload} href="https://onelink.to/fdc34n">
            Baixe o App
          </a>
        </div>
        <AccordionHome />
        <a id={styles.mostrarNoMobile} href="https://onelink.to/fdc34n">
          Baixe o App
        </a>
      </section>
    </article>
  );
}
