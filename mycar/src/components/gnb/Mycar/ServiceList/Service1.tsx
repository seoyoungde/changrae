import React from "react";
import styled from "@emotion/styled";

const Service1 = () => {
  return (
    <>
      <Section>
        <MycarService1>
          <Title>
            <h1>1ST 마이카가 새롭게 시작하는변화</h1>
          </Title>
          <SubTitle>
            일급 마이카 내 차 수리문화 트랜드를 이끌어가겠습니다
          </SubTitle>
          <ServiceContainer>
            <ServiceRow>
              <Service1Box1>
                <p
                  style={{
                    marginLeft: "2.5rem",
                    marginTop: "2.5rem",
                    color: "#0070c0",
                  }}
                >
                  신속 편리한 견적 및 예약 서비스
                </p>
              </Service1Box1>
              <Service1Box2>
                <p
                  style={{
                    marginLeft: "2.5rem",
                    color: "#0070c0",
                    marginTop: "2.5rem",
                  }}
                >
                  다양한 사고사례 빅데이터 정보
                </p>
              </Service1Box2>
            </ServiceRow>
            <ServiceRow>
              <Service1Box3>
                <p
                  style={{
                    marginLeft: "2.5rem",
                    marginTop: "2.5rem",
                    color: "#0070c0",
                  }}
                >
                  믿을 수있는 퀄리티
                </p>
              </Service1Box3>
              <Service1Box4>
                <p
                  style={{
                    marginLeft: "2.5rem",
                    marginTop: "2.5rem",
                    color: "#0070c0",
                  }}
                >
                  현실적 세분화된 합리적인 가격
                </p>
              </Service1Box4>
            </ServiceRow>
          </ServiceContainer>
        </MycarService1>
      </Section>
    </>
  );
};
const Section = styled.div``;
const MycarService1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0px;
`;
const SubTitle = styled.div`
  font-size: 1.3rem;
  margin-bottom: 3rem;
`;
const ServiceRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  height: 40vh;
  justify-content: space-between;
  margin-top: 1rem;
  margin: auto;
  margin-bottom: 1rem;
`;
const Service1Box1 = styled.div`
  background-color: skyblue;
  width: 49%;
  border-radius: 10px;
  font-size: 1.6rem;
  font-weight: 700;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("https://i.postimg.cc/bJBbXkQt/3-8-2.png");
`;
const Service1Box2 = styled.div`
  background-color: gray;
  width: 49%;

  font-size: 1.6rem;
  font-weight: 700;
  border-radius: 10px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("https://i.postimg.cc/tRV0Kyb1/Group-1000002472.png");
`;
const Service1Box3 = styled.div`
  background-color: pink;
  width: 49%;
  font-size: 1.6rem;
  font-weight: 700;
  border-radius: 10px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("https://i.postimg.cc/Qx2cfQb9/Group-1000002472-1.png");
`;
const Service1Box4 = styled.div`
  background-color: beige;
  width: 49%;
  font-size: 1.6rem;
  font-weight: 700;
  border-radius: 10px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("https://i.postimg.cc/zBYgj8Ss/Group-1000002472-2.png");
`;
const ServiceContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
export default Service1;
