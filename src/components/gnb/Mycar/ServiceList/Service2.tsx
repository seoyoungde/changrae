import React from "react";
import styled from "@emotion/styled";

const Service2 = () => {
  return (
    <Section>
      <MycarService2>
        <ServiceImage></ServiceImage>
        <Service2Container>
          <Service2SubTitle>수리</Service2SubTitle>
          <Service2Title>
            <h1>
              내차 사고 수리
              <br /> 사전 견적 받아보세요
            </h1>
          </Service2Title>
          <Service2Content>
            <p>갑작스런 접촉사고에 당황하지 말고,</p>
            <p>마이카 앱을 열어 사고 부위 사진을 올려보세요</p>
          </Service2Content>
          <Service2Link>
            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "#0070c0",
                fontWeight: "bold",
                fontSize: "calc(0.6vw + 0.3rem)",
              }}
            >
              사이트 바로가기
            </a>
          </Service2Link>
        </Service2Container>
      </MycarService2>
    </Section>
  );
};

const Section = styled.div`
  width: 100%;
  height: auto;

  margin-top: 14vw;
`;

const MycarService2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: auto;
`;

const ServiceImage = styled.div`
  width: 34vw;
  height: 58vh;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("https://i.postimg.cc/2jhZdhf9/3-9.png");
`;

const Service2Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5vw;
`;

const Service2SubTitle = styled.div`
  margin-bottom: 2vw;
  height: 2vw;
  width: 3.7vw;
  border-radius: 10px;
  color: white;
  padding-left: 1.4vw;
  padding-top: 0.5vw;
  font-weight: 600;
  font-size: calc(0.8vw + 0.5rem);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("https://i.postimg.cc/jjh2QtDk/Rectangle-1532.png");
`;

const Service2Title = styled.h1`
  font-size: calc(1.2vw + 0.3rem);
  color: #0070c0;
  letter-spacing: 0.2vw;
`;

const Service2Content = styled.div`
  line-height: 1.2;
  font-weight: 500;
`;

const Service2Link = styled.div`
  margin-top: 1vw; /* 반응형 단위로 변경 */
`;

export default Service2;
