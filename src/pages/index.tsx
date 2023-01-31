import Head from "next/head";
import reactLogo from "../../public/react.svg";
import styles from "@/styles/Home.module.css";

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
import { useBreakpointValue } from "@chakra-ui/react";

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

  return (
    <article>
      <Head>
        <title>Bit Book | Home</title>
      </Head>
      <Header />
      <section id={styles.sectionOne}>
        <div id={styles.contentOne}>
          <p id={styles.titleOne}>um produto bit tecnologia</p>
          <p id={styles.headline}>Seu guia digital de saúde e bem-estar</p>
          <span style={{ marginTop: "-12px" }}>
            <Image src={ImgBarra} id={styles.barrinha} alt="Imagem de linha" />
          </span>

          <p id={styles.subscriptionOne}>
            Baixe o app BitBook e faça parte do&nbsp;
            <span id={styles.subscriptionSpan}>
              melhor clube de leitura sobre saúde e bem-estar do Brasil!
            </span>
            &nbsp; Conteúdos, autorais e enriquecedores.
          </p>

          <div id={styles.containerDownload}>
            <a
              id={styles.contentApple}
              href="https://apps.apple.com/br/app/bittrainers/id1389395944"
            >
              <span>
                <Image src={ImgApple} alt="Imagem Apple Store" />
              </span>
              <div className={styles.contentText}>
                <p className={styles.textDownload}>Download via</p>
                <p className={styles.textLoja}>App Store</p>
              </div>
            </a>
            <a
              id={styles.contentPlayStore}
              href="https://play.google.com/store/apps/details?id=com.bittrainers"
            >
              <div>
                <Image src={ImgGoogle} alt="Imagem Google Store" />
              </div>
              <div className={styles.contentText}>
                <p className={styles.textDownload}>Download via</p>
                <p className={styles.textLoja}>Google Play</p>
              </div>
            </a>
          </div>
        </div>
        <Image
          src={ImgOneSection}
          id={styles.trocaImage}
          alt="Imagem Celular"
        />
        <Image src={ImgCellMobile} id={styles.imgMobile} alt="Imagem Celular" />
      </section>

      <section id={styles.sectionTwo}>
        <div id={styles.blocoImage}>
          <Image
            src={IconRiscado}
            style={{ margin: "-50px 0 40px 0" }}
            alt="Imagem riscado Roxo"
          />
        </div>
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
                <div className={styles.boxItems}>
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
                <div className={styles.boxItems}>
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
            <CarouselThree />
          </div>
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
