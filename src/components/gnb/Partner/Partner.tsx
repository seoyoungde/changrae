import React from "react";
import styled from "@emotion/styled";
import { Button, TextField } from "@mui/material";
import Footer from "../../common/footer";

const Partner = () => {
  return (
    <>
      <Main>
        <ImageBox aria-label="파트너사">
          <BoxTitle>파트너사</BoxTitle>
        </ImageBox>
        <NumberBox>
          <PartnerInfo>
            <PartnerLabel>현재까지 등록된 공업사 수 :</PartnerLabel>
            <PartnerCount>9000+</PartnerCount>
          </PartnerInfo>
        </NumberBox>
        <Section>
          <Line>
            <h1>입점상담신청하기</h1>
          </Line>
          <Form>
            <InputField label="업체명" variant="outlined" />
            <InputField label="업체 주소지" variant="outlined" />
            <InputField label="휴대전화번호" variant="outlined" />
            <ApplyButton variant="contained" color="primary">
              입점상담신청하기
            </ApplyButton>
          </Form>
          <Instruction>
            <p>신청해주신 순서에 따라 개별적으로 회신드릴 예정입니다.</p>
          </Instruction>
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
  height: 34vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("https://i.postimg.cc/1t595M1D/123.png");
`;
const BoxTitle = styled.div`
  color: white;
  font-size: 3.2rem;
  font-weight: 800;
  margin-left: 18%;
  margin-top: 3%;
  border-left: 5px solid white;
  padding-left: 1%;
`;
const NumberBox = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  flex-direction: row;
  font-size: 1.4rem;
  margin-bottom: 5rem;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
`;
const PartnerInfo = styled.div`
  display: flex;
  align-items: center;
`;
const PartnerLabel = styled.div`
  color: #999999;
  font-weight: 700;
  margin-right: 0.5rem;
`;
const PartnerCount = styled.div`
  color: #123160;
  font-weight: 700;
`;
const Section = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
   @media screen and (max-width: 768px) {
    width: 100%;
`;
const Line = styled.div`
  width: 130%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #d6d6d6;
`;
const InputField = styled(TextField)`
  && {
    width: 100%;
    margin-bottom: 0.8rem;
  }
`;
const ApplyButton = styled(Button)`
  && {
    width: 100%;
    height: 5vh;
    margin-top: 3rem;
    margin-bottom: 1rem;
    background-color: #3d567d;
  }
`;
const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  margin-top: 5rem;
`;
const Instruction = styled.p`
  margin-top: 1rem;
  font-size: 0.9rem;
  letter-spacing: 0.1rem;
`;

export default Partner;
