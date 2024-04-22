import React from "react";
import styled from "@emotion/styled";
import Footer from "../../common/footer";
import Service1 from "./ServiceList/Service1";
import Service4 from "./ServiceList/Service4";
import ServiceSequence from "./ServiceList/ServiceSequence";
import ServiceReview from "./ServiceList/ServiceReview";

const MyCar2 = () => {
  return (
    <>
      <Main>
        <ImageBox>
          <TextBox>
            <h1>
              <HighlightedText>One-stop</HighlightedText> 사고수리
            </h1>
            <h1>일급마이카를 만나면 해결</h1>
            <h1>
              수리비용 <HighlightedText>앞자리가</HighlightedText> 바뀝니다
            </h1>
          </TextBox>
        </ImageBox>
        <Section>
          <Service4 />
          <Service1 />
        </Section>
        <ServiceSequence />

        <ServiceReview />
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
  background-image: url("https://i.postimg.cc/rs6rHNrt/Group-1000002681-1.png");
  margin-bottom: 10vw;
  font-size: 1.2rem;
`;

const Section = styled.div`
  width: 64%;
  height: auto;
  margin: auto;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;
const HighlightedText = styled.span`
  font-weight: 900;
  font-size: 3rem;
  color: #2086ff;
`;
const TextBox = styled.div`
  width: 64%;
  margin: auto;
  margin-top: 6rem;
  letter-spacing: 2px;
`;
export default MyCar2;
