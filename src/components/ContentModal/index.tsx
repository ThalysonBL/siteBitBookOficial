import styles from "./styles.module.scss";
import React, { useRef, useEffect, useState, useCallback } from "react";
import { api } from "../../services/api";
import Image from "next/image";
//react Hook Form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { object, string } from "yup";

const schema = object({
  cpf: string().required(),
});

import { ResultVerificacao } from "./ResultVerificacao";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
// @ts-ignore
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";
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
  Spinner,
} from "@chakra-ui/react";

import GooglePlay from "../../../public/iconPlayStoreBlack.svg";
import AppleStore from "../../../public/iconAppleStoreBlack.svg";
import QrCodeLoja from "../../../public/qrCodeLoja.png";

interface DataProps {
  id: number;
  nome: string;
  img: string;
  img_lista: string;
  img_grande: string;
  campo_vinculacao: string;
  campo_vinculacao_label: string;
  tipos_vinculacao: string;
  syntesis: string;
  neotv: string;
}

interface EmpresasProps {
  empresas: string;
}

export function ContentModal() {
  const { width, height } = useWindowSize();
  const { onOpen, onClose, isOpen } = useDisclosure();
  const finalRef = React.useRef(null);

  const [parceiros, setParceiros] = useState<any>([]);
  const [query, setQuery] = useState("");
  const [cpf, setCpf] = useState("");
  const [selectedPartner, setSelectedPartner]: any = useState<DataProps>();
  const [userWasFound, setUserWasFound]: any = useState("");
  const [mask, setMask]: any = useState("");

  const handleChange = (e: any) => {
    const rawValue = e.target.value;
    let cpforCnpjValue = rawValue.replace(/\D/g, "");

    if (cpf.length <= 11) {
      cpforCnpjValue = cpforCnpjValue.replace(/(\d{3})(\d)/, "$1.$2");
      cpforCnpjValue = cpforCnpjValue.replace(/(\d{3})(\d)/, "$1.$2");
      cpforCnpjValue = cpforCnpjValue.replace(/(\d{3})(\d{1,2})/, "$1-$2");
      cpforCnpjValue = cpforCnpjValue.replace(/(-\d{2})\d+?$/, "$1");
    } else {
      cpforCnpjValue = cpforCnpjValue.replace(/(\d{2})(\d)/, "$1.$2");
      cpforCnpjValue = cpforCnpjValue.replace(/(\d{3})(\d)/, "$1.$2");
      cpforCnpjValue = cpforCnpjValue.replace(/(\d{3})(\d)/, "$1/$2");
      cpforCnpjValue = cpforCnpjValue.replace(/(\d{4})(\d{1,2})/, "$1-$2");
      cpforCnpjValue = cpforCnpjValue.replace(/(-\d{2})\d+?$/, "$1");
    }

    setCpf(cpforCnpjValue);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (cpf.length === 18 || cpf.length === 14) {
      alert("CPF ou CNPJ válido");
    }
  };

  const isFormValid = cpf.length === 18 || cpf.length === 14;

  // Guardo a empresa
  const handleSelectPartner = useCallback((item: any) => {
    setSelectedPartner(item); //console.log(item);
  }, []);

  // guardo o valor do input search
  const searchEmpresas = useCallback((searchValue: string) => {
    setQuery(searchValue);
  }, []);
  //pego o valor do CPF
  const handleChangeCpf: any = (event: any, type: any) => {
    setCpf(event.target.value);
    setMask(type === "CPF");
  };

  // verifico na API se está válido o usuário
  async function handleVerify() {
    const result = await api.post(
      `/api/empresas/${selectedPartner.id}/verifica-cliente`,
      {
        chave: `${cpf}`,
      }
    );
    //console.log(result);

    if (result.data.user_found === true) {
      console.log("parabenas");
      setUserWasFound(result.data.user_found);
    } else {
      console.log("você não é premium");
      setUserWasFound(result.data.user_found);
    }
  }

  // listo as empresas
  useEffect(() => {
    api.get("/api/empresas-integracoes").then((response) => {
      const data = response.data;
      setParceiros(data);
    });
  }, []);

  return (
    <>
      {!selectedPartner ? ( //Selecione a empresa
        <div className={styles.container}>
          <div className={styles.containerText}>
            <p id={styles.titleVerify}>Verifique seu benefício</p>
            <p className={styles.descriptionVerify}>
              Selecione uma empresa parceira para
              <br /> verificarmos se benefício:
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              marginLeft: 0,
              width: "100%",
            }}
          >
            <div id={styles.contentListAndInput}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div id={styles.containerLista}>
                  <div
                    style={{
                      backgroundColor: "#FFFFFF",
                      left: 0,
                      top: 0,
                      position: "absolute",
                      zIndex: "1000",
                    }}
                  >
                    <div className={styles.field}>
                      <input
                        list="browsers"
                        required
                        autoComplete="off"
                        id="empresaParceira"
                        value={query}
                        onChange={(e) => searchEmpresas(e.target.value)}
                      />
                      <label
                        htmlFor="empresaParceira"
                        title="Digite o nome do seu parceiro"
                        data-title="Digite o nome do seu parceiro"
                      ></label>
                      <div
                        style={{
                          position: "absolute",
                        }}
                        className={styles.containerInputList}
                      >
                        {parceiros.empresas
                          ?.filter((item: any) => {
                            if (query === "") {
                            } else if (
                              item?.nome
                                ?.toLowerCase()
                                .includes(query.toLowerCase())
                            ) {
                              //returns filtered array
                              return <p>{item.nome}</p>;
                            }
                          })
                          .slice(0, 4)
                          .map((item: any, index: any) => {
                            return (
                              <div
                                key={item.id}
                                onClick={() => handleSelectPartner(item)}
                                className={styles.textInputList}
                              >
                                <p>{item.nome}</p>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                  {parceiros.length === 0 ? (
                    <Spinner
                      thickness="3px"
                      speed="0.65s"
                      width="20px"
                      height="20px"
                      margin="auto"
                    />
                  ) : (
                    parceiros.empresas
                      ?.filter((item: any) => {
                        if (query === "") {
                          return item.img_lista;
                        } else if (
                          item?.nome
                            ?.toLowerCase()
                            .includes(query.toLowerCase())
                        ) {
                          //returns filtered array
                          return (
                            <Image
                              src={item.img_lista}
                              alt="Imagem Parceiro"
                              width="72"
                              height="66"
                              className={styles.bordaAndShadow}
                            />
                          );
                        }
                      })
                      .map((item: any, index: any) => {
                        return (
                          <div
                            key={item.id}
                            className={styles.containerParceiro}
                            onClick={() => handleSelectPartner(item)}
                          >
                            <Image
                              src={item.img_lista}
                              alt="Imagem Parceiro"
                              width="72"
                              height="66"
                              className={styles.bordaAndShadow}
                            />
                          </div>
                        );
                      })
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        //tela de add CPF
        <div>
          {userWasFound === "" ? (
            <div>
              <div className={styles.containerResultado}>
                <Image
                  src={selectedPartner.img}
                  alt="Image parceiro"
                  width="72"
                  height="66"
                  style={{
                    marginBottom: "20px",
                  }}
                  className={styles.bordaImage}
                />
                <div
                  style={{
                    width: "384px",
                  }}
                >
                  <p id={styles.titleVerify}>Verifique seu benefício</p>
                  <p className={styles.descriptionVerify}>
                    O CPF utilizado na autenticação é o mesmo <br />
                    usado no login da empresa parceira <br />
                    selecionada.
                  </p>
                </div>

                <div className={styles.containerInput}>
                  <div className={styles.field}>
                    <form onChange={handleChange}>
                      <CpfCnpj
                        required
                        autoComplete="off"
                        id="EmpresaCpf"
                        value={cpf}
                        onChange={handleChangeCpf}
                      />
                      <label
                        htmlFor="EmpresaCpf"
                        title="Digite o seu CPF/CNPJ"
                        data-title="Digite o seu CPF/CNPJ"
                      ></label>
                      {!isFormValid && (
                        <span style={{ fontSize: "10px" }}>
                          Por favor, preencha o CPF ou CNPJ corretamente
                        </span>
                      )}
                    </form>
                  </div>
                </div>
                <div className={styles.contentButton}>
                  <button
                    type="submit"
                    id={styles.botaoVerificar}
                    disabled={!isFormValid}
                    onClick={() => handleVerify()}
                  >
                    Verificar benefício
                  </button>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      )}

      {cpf && selectedPartner && userWasFound ? (
        //tela premium
        <div className={styles.containerResultado}>
          <Image
            src={selectedPartner.img}
            alt="Imagem Parceiro"
            width="72"
            height="66"
            className={styles.bordaImage}
          />
          <Confetti width={575} height={height} gravity={0.5} />

          <div>
            <p className={styles.titleResult}>
              Obaaa! O Bit Book está <br />
              liberado para você! 🥳🎉
            </p>
            <p className={styles.descriptiontitleResult}>
              Acesse o app e aproveite agora mesmo todos
              <br /> os conteúdos selecionados especialmente
              <br /> para você!
            </p>
          </div>
          <div id={styles.caixaLojas}>
            <div className={styles.lojasClick}>
              <div className={styles.containerDownload}>
                <div className={styles.containerLoja}>
                  <Image
                    src={GooglePlay}
                    alt="Imagem parceiro"
                    className={styles.iconLoja}
                  />
                  <a
                    href="https://play.google.com/store/apps/details?id=br.app.bitbook"
                    className={styles.contentTextLoja}
                  >
                    <p>Disponível na</p>
                    <p className={styles.textLoja}>Google Play</p>
                  </a>
                </div>
              </div>
              <a
                href="https://apps.apple.com/br/app/bit-book/id1641568359"
                className={styles.containerDownload}
              >
                <div className={styles.containerLoja}>
                  <Image
                    src={AppleStore}
                    alt="Imagem parceiro"
                    className={styles.iconLoja}
                  />
                  <div className={styles.contentTextLoja}>
                    <p>Disponível na</p>
                    <p className={styles.textLoja}>App Store</p>
                  </div>
                </div>
              </a>
            </div>

            <Image
              src={QrCodeLoja}
              alt="Imagem QR Code"
              className={styles.tamanhoQrCode}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p className={styles.problemSuport}>Problemas com seu benefício?</p>
            <a
              href="https://wa.me/+553398231860"
              className={styles.problemSuportChamar}
            >
              Fale com o suporte
            </a>
          </div>
        </div>
      ) : (
        <div>
          {selectedPartner && userWasFound === false ? (
            //tela não é premium
            <div className={styles.containerResultado}>
              <Image
                src={selectedPartner.img}
                alt="Imagem Parceiro"
                width="72"
                height="66"
                className={styles.bordaImage}
              />
              <div>
                <p
                  className={styles.titleResult}
                  style={{
                    color: "#D73628",
                  }}
                >
                  Ops, você ainda não tem
                  <br /> acesso ao Bit Book! 😢
                </p>
                <p className={styles.descriptiontitleResult}>
                  Os dados informados não estão em nossa <br />
                  base, caso você acredite ter direito, procure a<br />
                  empresa parceira e confirme seus dados de
                  <br /> cadastro.
                </p>
              </div>
              <div id={styles.caixaLojas}>
                <div className={styles.lojasClick}>
                  <div className={styles.containerDownload}>
                    <div className={styles.containerLoja}>
                      <Image
                        src={GooglePlay}
                        alt="Imagem parceiro"
                        className={styles.iconLoja}
                      />
                      <a
                        href="https://play.google.com/store/apps/details?id=br.app.bitbook"
                        className={styles.contentTextLoja}
                      >
                        <p>Disponível na</p>
                        <p className={styles.textLoja}>Google Play</p>
                      </a>
                    </div>
                  </div>
                  <a
                    href="https://apps.apple.com/br/app/bit-book/id1641568359"
                    className={styles.containerDownload}
                  >
                    <div className={styles.containerLoja}>
                      <Image
                        src={AppleStore}
                        alt="Imagem parceiro"
                        className={styles.iconLoja}
                      />
                      <div className={styles.contentTextLoja}>
                        <p>Disponível na</p>
                        <p className={styles.textLoja}>App Store</p>
                      </div>
                    </div>
                  </a>
                </div>

                <Image
                  src={QrCodeLoja}
                  alt="Imagem QR Code"
                  className={styles.tamanhoQrCode}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <p className={styles.problemSuport}>
                  Problemas com seu benefício?
                </p>
                <a
                  href="https://wa.me/+553398231860"
                  className={styles.problemSuportChamar}
                >
                  Fale com o suporte
                </a>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
}
