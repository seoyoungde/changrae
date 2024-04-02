import React from "react";
import styled from "@emotion/styled";

interface ServiceBoxProps {
  background: string;
  image: string;
}

const Service1 = () => {
  return (
    <Section>
      <MycarService1>
        <Title>1ST 마이카가 새롭게 시작하는 변화</Title>
        <SubTitle>
          일급 마이카 내 차 수리문화 트랜드를 이끌어가겠습니다
        </SubTitle>
        <ServiceContainer>
          <ServiceRow>
            <ServiceBox
              background="#87CEEB"
              image="https://i.postimg.cc/bJBbXkQt/3-8-2.png"
            >
              <ServiceText>신속 편리한 견적 및 예약 서비스</ServiceText>
            </ServiceBox>
            <ServiceBox
              background="#A9A9A9"
              image="https://i.postimg.cc/tRV0Kyb1/Group-1000002472.png"
            >
              <ServiceText>다양한 사고사례 빅데이터 정보</ServiceText>
            </ServiceBox>
          </ServiceRow>
          <ServiceRow>
            <ServiceBox
              background="#FFC0CB"
              image="https://i.postimg.cc/Qx2cfQb9/Group-1000002472-1.png"
            >
              <ServiceText>믿을 수 있는 퀄리티</ServiceText>
            </ServiceBox>
            <ServiceBox
              background="#F5F5DC"
              image="https://i.postimg.cc/zBYgj8Ss/Group-1000002472-2.png"
            >
              <ServiceText>현실적 세분화된 합리적인 가격</ServiceText>
            </ServiceBox>
          </ServiceRow>
        </ServiceContainer>
      </MycarService1>
    </Section>
  );
};

const Section = styled.div`
  width: 100%;
  height: auto;
`;

const MycarService1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.7vw;
  margin-bottom: 1vw;
`;

const SubTitle = styled.div`
  font-size: 1.1vw;
  margin-bottom: 5vw;
`;

const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ServiceRow = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2vw;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ServiceBox = styled.div<ServiceBoxProps>`
  width: 30vw;
  height: 18vw;
  background-color: ${(props) => props.background};
  border-radius: 1vw;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;

  position: relative;
  margin: 0 2vw;

  @media (max-width: 768px) {
    width: 80vw;
    height: 15vw;
  }
`;

const ServiceText = styled.p`
  font-size: 1.3vw;
  font-weight: 700;
  color: #ffffff;
  margin-left: 1vw;
  color: black;
`;

export default Service1;
