import React, { useState } from "react";
import styled from "@emotion/styled";
import Footer from "../common/footer";
import Content1 from "./MainContent/Content1";

const Main = () => {
  return (
    <>
      <MainContainer>
        <ImageBox>메인이미지</ImageBox>
        <Section>
          <Content1 />
        </Section>
      </MainContainer>
      <Footer />
    </>
  );
};
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ImageBox = styled.div`
  width: 100%;
  height: 80vh;
  border: 1px solid black;
`;
const Section = styled.div`
  width: 64%;
  height: auto;
  margin: auto;
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  margin-top: 10rem;
`;
export default Main;
