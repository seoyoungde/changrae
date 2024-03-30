import React from "react";
import styled from "@emotion/styled";

const CRHistory = () => {
  return (
    <Section>
      <HistoryTitle>회사 연혁</HistoryTitle>
      <HistorySubTitle>
        지금까지, 더 나은 자동차 에프터 마켓 서비스 제공을 위해 걸어온 길
      </HistorySubTitle>

      <HistoryBox>
        <HistoryYear>2023</HistoryYear>
        <ContainerBox>
          <HistoryContainer>
            <HistoryMonth>02</HistoryMonth>
            <HistoryContent>누적 다운로드 수 200만 달성</HistoryContent>
          </HistoryContainer>
          <HistoryContainer>
            <HistoryMonth>03</HistoryMonth>
            <HistoryContent>누적 다운로드 수 200만 달성</HistoryContent>
          </HistoryContainer>
          <HistoryContainer>
            <HistoryMonth>04</HistoryMonth>
            <HistoryContent>누적 다운로드 수 200만 달성</HistoryContent>
          </HistoryContainer>
        </ContainerBox>
      </HistoryBox>
      <HistoryBox>
        <HistoryYear>2023</HistoryYear>
        <ContainerBox>
          <HistoryContainer>
            <HistoryMonth>02</HistoryMonth>
            <HistoryContent>누적 다운로드 수 200만 달성</HistoryContent>
          </HistoryContainer>
          <HistoryContainer>
            <HistoryMonth>03</HistoryMonth>
            <HistoryContent>누적 다운로드 수 200만 달성</HistoryContent>
          </HistoryContainer>
          <HistoryContainer>
            <HistoryMonth>04</HistoryMonth>
            <HistoryContent>누적 다운로드 수 200만 달성</HistoryContent>
          </HistoryContainer>
        </ContainerBox>
      </HistoryBox>
    </Section>
  );
};

const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  height: auto;
  margin: auto;
`;

const HistoryTitle = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 4.3rem;
`;

const HistorySubTitle = styled.div`
  margin-bottom: 4rem;
`;

const HistoryBox = styled.div`
  border-top: 1px solid #c9c9c9;
  border-bottom: 1px solid #c9c9c9;
  width: 100%;
  height: 35vh;
  display: flex;
  flex-direction: row;
`;

const HistoryYear = styled.div`
  font-size: 1rem;
  font-weight: 400;
  margin-right: 10rem;
  margin-top: 2.5rem;
  margin-left: 3rem;
`;

const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

const HistoryContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #d2d2d2;
  width: 90%;
  height: 60%;
  align-items: center;
`;

const HistoryMonth = styled.div`
  margin-right: 25rem;
  font-size: 1rem;
`;

const HistoryContent = styled.div`
  font-size: 0.9rem;
`;

export default CRHistory;
