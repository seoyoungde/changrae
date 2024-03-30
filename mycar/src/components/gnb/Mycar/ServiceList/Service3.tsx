import React from "react";
import styled from "@emotion/styled";

const Service3 = () => {
  return (
    <>
      <Section>
        <MycarService3>
          <Service3Container>
            <SubTitle>수리비 미리 알고가세요</SubTitle>
            <Title>
              <h1>나와 유사한 사고사례</h1>
              <h1>정보가 필요할때</h1>
            </Title>
          </Service3Container>
          <ServiceImage></ServiceImage>
        </MycarService3>
      </Section>
    </>
  );
};
const Section = styled.div`
  width: 90%;
  height: auto;
  margin: auto;
  margin-top: 14rem;
`;
const MycarService3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Service3Container = styled.div`
  margin-top: 11rem;
  height: 30vh;
  width: 43%;
`;
const SubTitle = styled.div`
  line-height: 9px;
  font-weight: 500;
  margin-bottom: 3.5rem;
`;
const Title = styled.div`
  font-size: 1.5rem;
  line-height: 20px;
  color: #0070c0;
  letter-spacing: 2px;
`;
const ServiceImage = styled.div`
  width: 56%;
  height: 58vh;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("https://i.postimg.cc/CMtXGXbY/image-225.png");
`;
export default Service3;
