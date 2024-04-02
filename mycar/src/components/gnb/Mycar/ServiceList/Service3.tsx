import React from "react";
import styled from "@emotion/styled";

const Service3 = () => {
  return (
    <Section>
      <MycarService3>
        <Service3Container>
          <SubTitle>수리비 미리 알고가세요</SubTitle>
          <Title>
            <h1>
              나와 유사한 사고사례
              <br />
              정보가 필요할 때
            </h1>
          </Title>
        </Service3Container>
        <ServiceImage></ServiceImage>
      </MycarService3>
    </Section>
  );
};

const Section = styled.div`
  width: 100%;
  height: auto;
  margin: auto;
  margin-top: 14vw;
`;

const MycarService3 = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const Service3Container = styled.div`
  margin-top: 8vw;
  height: 30vh;
  width: 43vw;
`;

const SubTitle = styled.div`
  line-height: 1.5;
  font-weight: 500;
  margin-bottom: 3vw;
`;

const Title = styled.div`
  font-size: calc(1.2vw + 0.3rem);
  color: #0070c0;
  letter-spacing: 0.2vw;
`;

const ServiceImage = styled.div`
  width: 48vw;
  height: 58vh;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("https://i.postimg.cc/CMtXGXbY/image-225.png");
`;

export default Service3;
