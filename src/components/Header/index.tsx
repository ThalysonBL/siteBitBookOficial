import React, { useRef, useEffect } from "react";
import styles from "./styles.module.css";

import Logo from "../../../public/logo.png";
import Image from "next/image";
import { ContentModal } from "../ContentModal/index";
import "./main.js";

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
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
} from "@chakra-ui/react";
import { useScrolling } from "react-use";

export function Header() {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const finalRef = React.useRef(null);

  const [placement, setPlacement] = React.useState("right");

  const scrollRef = React.useRef(null);

  const scrolling = useScrolling(scrollRef);

  const isWideTablet = useBreakpointValue({
    sm: false,
    md: false,
    lg: true,
  });

  return (
    <header id={styles.container}>
      <div ref={scrollRef}></div>
      <Modal
        blockScrollOnMount={true}
        isOpen={isOpen}
        size={["full", "full", "full", "xl"]}
        onClose={onClose}
        //zIndex="9999"
        // height="50vh"
      >
        <ModalOverlay />

        <ModalContent
          bg="#ffffff"
          width={["full", "full", "full", "40%"]}
          padding={[
            "10px 20px 50px 10px ",
            "10px 20px 50px 10px ",
            "10px 20px 50px 10px ",
            "10px 20px 50px 10px ",
          ]}
          margin=" 4% auto"
          borderRadius="8px"
        >
          <ModalCloseButton display="inline" margin="0 0 0 auto" />
          <ModalBody>
            <ContentModal />
          </ModalBody>
        </ModalContent>
      </Modal>
      <div id={styles.contentFixed}>
        <div id={styles.content}>
          <Image src={Logo} alt="Logo Bit Book" />
          <div>
            <button id={styles.verifyBeneficio} onClick={onOpen}>
              Verifique o seu benefício
            </button>

            <a
              id={styles.duvidasApp}
              href="https://api.whatsapp.com/send/?phone=5533984264226&text&type=phone_number&app_absent=0"
            >
              Dúvidas? Fale conosco ✌
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
