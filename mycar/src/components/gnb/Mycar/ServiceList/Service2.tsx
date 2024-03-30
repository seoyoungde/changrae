import React from "react";
import styled from "@emotion/styled";

const Service2 = () => {
  return (
    <>
      <Section>
        <MycarService2>
          <ServiceImage></ServiceImage>
          <Service2Container>
            <Service2SubTitle>수리</Service2SubTitle>
            <Service2Title>
              <h1> 내차 사고 수리</h1>
              <h1>사전 견적 받아보세요</h1>
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
                  fontSize: "0.9rem",
                }}
              >
                사이트바로가기
              </a>
            </Service2Link>
          </Service2Container>
        </MycarService2>
      </Section>
    </>
  );
};
const Section = styled.div``;
const MycarService2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  margin: auto;
  margin-top: 14rem;
`;
const ServiceImage = styled.div`
  width: 54%;
  height: 58vh;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("https://i.postimg.cc/2jhZdhf9/3-9.png");
`;
const Service2Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6.5rem;
`;
const Service2SubTitle = styled.div`
  margin-bottom: 2rem;
  height: 2.5vh;
  width: 12%;
  border-radius: 20px;
  color: white;
  padding-left: 21px;
  padding-top: 7px;
  font-weight: 700;
  font-size: 1rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("https://i.postimg.cc/jjh2QtDk/Rectangle-1532.png");
`;
const Service2Title = styled.h1`
  font-size: 1.5rem;
  line-height: 20px;
  color: #0070c0;
  letter-spacing: 2px;
`;
const Service2Content = styled.div`
  line-height: 9px;
  font-weight: 500;
`;
const Service2Link = styled.div`
  margin-top: 1rem;
`;
export default Service2;
