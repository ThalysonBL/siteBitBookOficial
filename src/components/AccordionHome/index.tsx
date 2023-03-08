import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

export function AccordionHome() {
  return (
    <div>
      <Accordion
        allowToggle
        fontSize="16px"
        fontWeight="500"
        line-height="24px"
        letterSpacing="0em"
        textAlign="left"
        color="#36007C;"
        maxWidth={["342px", "520px", "520px"]}
        mt={["50px", "50px", "0", "0"]}
      >
        <AccordionItem
          padding={["10px 10px", "20px 36px", "20px 36px"]}
          background="none"
          borderRadius="6px"
          border=" 1px solid #36007C"
          marginBottom="26px"
          maxWidth={["342px", "520px", "520px"]}
        >
          <h2>
            <AccordionButton
              maxWidth="520px"
              display="flex"
              justifyContent="space-between"
            >
              <Box
                as="span"
                textAlign="left"
                fontWeight="500"
                color="#36007C;"
                fontSize="16px"
              >
                O que é a Bit Book?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel maxWidth={["342px", "342px", "342px"]}>
            Somos uma plataforma de e-books e audiobooks online, voltada para o
            gênero saúde e bem-estar. Nossos leitores tem acesso ao nosso acervo
            de forma ilimitada para ler e ouvir, quantas vezes desejar, os
            conteúdos em nossa plataforma.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem
          padding={["10px 10px", "20px 36px", "20px 36px"]}
          background="none"
          borderRadius="6px"
          border=" 1px solid #36007C"
          marginBottom="26px"
          maxWidth={["342px", "520px", "520px"]}
        >
          <h2>
            <AccordionButton
              maxWidth="520px"
              display="flex"
              justifyContent="space-between"
            >
              <Box
                as="span"
                textAlign="left"
                fontWeight="500"
                color="#36007C;"
                fontSize="16px"
              >
                Como posso acessar?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel maxWidth={["342px", "342px", "342px"]}>
            Você pode acessar através do nosso app. Para baixar o aplicativo,
            clique aqui.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem
          padding={["10px 10px", "20px 36px", "20px 36px"]}
          background="none"
          borderRadius="6px"
          border=" 1px solid #36007C"
          marginBottom="26px"
          maxWidth={["342px", "520px", "520px"]}
        >
          <h2>
            <AccordionButton
              maxWidth="520px"
              display="flex"
              justifyContent="space-between"
            >
              <Box
                as="span"
                textAlign="left"
                fontWeight="500"
                color="#36007C;"
                fontSize="16px"
              >
                Que tipo de conteúdos encontro no Bit Book?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel maxWidth={["342px", "342px", "342px"]}>
            Você encontra diversos livros, revistas, e-books e audiobooks
            voltados para o tema saúde e bem-estar. Uma grande variedade de
            títulos te espera com acesso ilimitado. Confira!
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
