import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 118px;
  padding: 64px 227px;
  background-color: #36007c;

  #direitos {
    color: #b7b7b7;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;

    letter-spacing: 0em;
    margin-top: 16px;
    text-align: left;
  }

  #thirdBox {
    display: flex;
    align-items: center;
  }

  #baixeApp {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    /* identical to box height, or 24px */

    text-align: center;

    color: #f0f0f0;
  }
  .imgLojas {
    background: #7e06f2;
    border-radius: 8px;
    padding: 16px;
    width: 25px;
    height: 25px;
    margin: 8px 8px 0 8px;
  }
  #textBitTech {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 175%;
    /* identical to box height, or 28px */

    /* Branco */

    color: #ffffff;
  }

  .containerLinkLoja {
    text-decoration: none;
  }

  #iconeHearth {
    margin-left: 10px;
  }
`;
