import React from "react";
import styled from "@emotion/styled";
import Footer from "../../common/footer";
import Service1 from "./ServiceList/Service1";
import Service2 from "./ServiceList/Service2";
import Service3 from "./ServiceList/Service3";
import ServiceSequence from "./ServiceList/ServiceSequence";
import ServiceReview from "./ServiceList/ServiceReview";

const MyCar2 = () => {
  return (
    <>
      <Main>
        <ImageBox>
          <BoxTitle>서비스안내</BoxTitle>
        </ImageBox>
        <Section>
          <Service1 />
          <Service2 />
          <Service3 />
        </Section>
        <ServiceSequence />
        <Section>
          <ServiceReview />
        </Section>
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
  background-image: url("https://i.postimg.cc/zfCmpm1w/Group-1000002474-1.png");
  margin-bottom: 10vw;
`;
const BoxTitle = styled.div`
  color: white;
`;

const Section = styled.div`
  width: 64%;
  height: auto;
  margin: auto;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export default MyCar2;
