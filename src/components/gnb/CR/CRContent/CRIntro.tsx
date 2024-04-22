import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";

const CRIntro = () => {
  return (
    <>
      <Section>
        <CompanyBox>
          <CompanySmallBox>
            <BoxTitle>창래 소개</BoxTitle>

            <BoxContent>
              <ContentLetter>
                <ContentTitle>창래를 찾아주셔서 감사합니다</ContentTitle>
                <ContentSubTitle>
                  상생의 개념인 창래 : 모두의 삶을 아우릅니다
                </ContentSubTitle>
                <ContentSubContent>
                  창래는 우리의 개념과 고리, 원형의 뜻이 합쳐진 것으로 하나
                  하나가 고리를 이어나가 우리가 되는 모습을 뜻합니다. 상생의
                  개념인 창래는 혼자만의 삶이 아닌 모두의 삶을 아우릅니다.
                  <br />
                  웹으로 그 누구와도 연결되어 여러 정보를 나누고 가치를 교환보다
                  나은 미래를 추구합니다. <br />나 혼자만의 이익이나 한 회사의
                  이익을 추구하는 것이 아닌 공동체로서의 이익, 보다 많은 이들이
                  하나의 틀에서 서로에게 도움이 될 수 있는 사회를 꿈꿉니다.
                  <br />
                  창래는 여러분의 웹 파트너로써 성장합니다.
                </ContentSubContent>
              </ContentLetter>
              <ContentImage></ContentImage>
            </BoxContent>
          </CompanySmallBox>
        </CompanyBox>
        <CompanyBox2>
          <BoxTitle2>창래회사</BoxTitle2>
          <ContentSubContent>
            (주)창래 / C.R. COPORATION-5G 통신 네트워크 연결 및 업무
            서비스-WEB&ANDROID-비대면 업무 사업지원 서비스-비대면 업무 앱개발
            (Mobile App & Smartphone App)-소프트웨어 개발 및 공급-기업 기술
            컨설팅-사회의 긍정적인 기여를 위하며-밝은 미래를 추구하는 기업입니다
          </ContentSubContent>
        </CompanyBox2>
        <ContentImagebox2>
          <ContentImage2></ContentImage2>
          <Contentimage3></Contentimage3>
        </ContentImagebox2>
      </Section>
    </>
  );
};

const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin: auto;
  @media (min-width: 768px) {
    padding: 0 2rem;
  }

  @media (min-width: 1024px) {
    padding: 0 3rem;
  }
`;

const CompanyBox = styled.div`
  width: 100%;
  margin-bottom: 12rem;
`;

const BoxTitle = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 4.3rem;
`;
const BoxContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
const ContentLetter = styled.div`
  display: flex;
  flex-direction: column;
  width: 44%;
`;
const ContentTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #123160;
  margin-bottom: 0.5rem;
`;
const CompanySmallBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const ContentSubTitle = styled.div`
  font-size: 1rem;
  margin-bottom: 4rem;
`;
const ContentSubContent = styled.div`
  font-size: 1rem;
  line-height: 25px;
`;
const ContentImage = styled.div`
  width: 44%;
  height: 42vh;
  background-size: fit;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("https://i.postimg.cc/6p9ZVLTY/Rectangle-176.png");
`;

const CompanyBox2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;

  margin-bottom: 4.1rem;
`;
const BoxTitle2 = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2.3rem;
`;
const ContentImagebox2 = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-directon: row;
  justify-content: space-between;
`;
const ContentImage2 = styled.div`
  width: 47%;

  background-size: fit;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("https://i.ibb.co/SmRdc88/Rectangle-210.png");
`;
const Contentimage3 = styled.div`
  width: 47%;
  height: 50vh;
  margin-top: 7rem;
  background-size: fit;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("https://i.ibb.co/Xsbztnj/Rectangle-211.png");
`;
export default CRIntro;
