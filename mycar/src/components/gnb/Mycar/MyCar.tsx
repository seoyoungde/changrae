import React from "react";
import styled from "@emotion/styled";
import Footer from "../../common/footer";

const MyCar = () => {
  return (
    <>
      <Main>
        <ImageBox>
          <BoxTitle>서비스안내</BoxTitle>
        </ImageBox>
        <Section>내용1</Section>
        <Section>내용2</Section>
        <Section>내용3</Section>
        <Section>내용4</Section>
      </Main>
      <Footer />
    </>
  );
};
const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ImageBox = styled.div`
  width: 100%;
  height: 64.2vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("https://i.postimg.cc/4yYxdpgK/456-3.png");
`;
const BoxTitle = styled.div`
  color: white;
`;

const Section = styled.div`
  width: 82%;
  height: 10rem;
  border: 1px solid black;
`;
export default MyCar;
