import styles from "./styles.module.css";
import React, { useRef, useEffect, useState, useCallback } from "react";

import { api } from "../../services/api";

import Image from "next/image";

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

export function ContentModal() {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const finalRef = React.useRef(null);

  const [parceiros, setParceiros] = useState([]);
  const [query, setQuery] = useState("");
  const [cpf, setCpf] = useState("");
  const [selectedPartner, setSelectedPartner]: any = useState<DataProps>();
  const [userWasFound, setUserWasFound] = useState("");

  // Guardo a empresa
  const handleSelectPartner = useCallback((item: any) => {
    setSelectedPartner(item), console.log(item);
  }, []);

  // guardo o valor do input search
  const searchEmpresas = useCallback((searchValue: string) => {
    setQuery(searchValue);
  }, []);
  //pego o valor do CPF
  const handleChangeCpf = (event: any) => {
    setCpf(event.target.value);
  };

  // verifico na API se está válido o usuário
  async function handleVerify() {
    const result = await api.post(
      `/api/empresas/${selectedPartner.id}/verifica-cliente`,
      {
        chave: `${cpf}`,
      }
    );
    console.log(result);

    if (result.data.user_found === true) {
      console.log("parabenas");
      setUserWasFound(result.data.user_found);
    } else {
      console.log("você não é premium");
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
      {userWasFound ? (
        <p>você é premium</p>
      ) : (
        <div id={styles.container}>
          <p id={styles.titleVerify}>Verifique seu benefício</p>
          <p className={styles.descriptionVerify}>
            O BitBook tem parceria com empresas que você conhece e o aplicativo
            pode estar vinculado ao seu plano de internet ou outros negócios
            para usar à vontade. Verifique agora mesmo inserindo os dados
            abaixo:
          </p>
          <div id={styles.containerInput}>
            <input
              placeholder="Digite o nome do seu parceiro"
              className={styles.styleInput}
              value={query}
              onChange={(e) => searchEmpresas(e.target.value)}
            />

            <input
              placeholder="Digite o seu CPF"
              value={cpf}
              onChange={handleChangeCpf}
              className={styles.styleInput}
            />
          </div>

          {parceiros.length === 0 ? (
            <Spinner thickness="3px" speed="0.65s" width="20px" height="20px" />
          ) : (
            parceiros.empresas
              ?.filter((item) => {
                if (query === "") {
                  return; //item;
                } else if (
                  item?.nome?.toLowerCase().includes(query.toLowerCase())
                ) {
                  //returns filtered array
                  return item;
                }
              })
              .map((item, index) => {
                return (
                  <div
                    key={item.id}
                    className={styles.containerParceiro}
                    onClick={() => handleSelectPartner(item)}
                  >
                    <Image
                      src={item.img}
                      alt="Imagem Parceiro"
                      width="61"
                      height="54"
                      style={{ marginRight: "32px" }}
                    />
                    <p>{item.nome}</p>
                  </div>
                );
              })
          )}
          <div className={styles.contentButton}>
            <button
              type="submit"
              id={styles.botaoVerificar}
              onClick={() => handleVerify()}
            >
              Verificar benefício
            </button>
          </div>

          <p className={styles.descriptionVerify}>
            Seus dados estão seguros. Suas informações são usadas única e
            exclusivamente para consultar a liberação da área premium do seu
            plano, de acordo com o serviço que você já tem com os nossos
            parceiros. Confira nossa política de privacidade.
          </p>
        </div>
      )}
    </>
  );
}
