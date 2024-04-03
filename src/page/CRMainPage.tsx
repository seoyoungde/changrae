import React from "react";
import styled from "@emotion/styled";
import CRMain from "../components/gnb/CR/CRMain";

const CRMainPage = () => {
  return (
    <>
      <BackgroundColor>
        <CRMain></CRMain>
      </BackgroundColor>
    </>
  );
};
const BackgroundColor = styled.div``;
export default CRMainPage;
