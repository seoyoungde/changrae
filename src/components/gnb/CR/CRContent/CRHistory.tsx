import React from "react";
import styled from "@emotion/styled";

const CRHistory = () => {
  return (
    <Section>
      <HistoryTitle>회사 연혁</HistoryTitle>
      <HistorySubTitle>
        지금까지, 더 나은 자동차 에프터 마켓 서비스 제공을 위해 걸어온 길
      </HistorySubTitle>

      <YearlyHistory>
        <Year>2023</Year>
        <HistoryContent>
          <HistoryItem>
            <HistoryMonth>02</HistoryMonth>
            <HistoryContent>누적 다운로드 수 200만 달성</HistoryContent>
          </HistoryItem>
          <HistoryItem>
            <HistoryMonth>02</HistoryMonth>
            <HistoryContent>누적 다운로드 수 200만 달성</HistoryContent>
          </HistoryItem>
          <HistoryItem>
            <HistoryMonth>02</HistoryMonth>
            <HistoryContent>누적 다운로드 수 200만 달성</HistoryContent>
          </HistoryItem>
        </HistoryContent>
      </YearlyHistory>

      <YearlyHistory>
        <Year>2023</Year>
        <HistoryContent>
          <HistoryItem>
            <HistoryMonth>02</HistoryMonth>
            <HistoryContent>누적 다운로드 수 200만 달성</HistoryContent>
          </HistoryItem>
          <HistoryItem>
            <HistoryMonth>02</HistoryMonth>
            <HistoryContent>누적 다운로드 수 200만 달성</HistoryContent>
          </HistoryItem>
          <HistoryItem>
            <HistoryMonth>02</HistoryMonth>
            <HistoryContent>누적 다운로드 수 200만 달성</HistoryContent>
          </HistoryItem>
        </HistoryContent>
      </YearlyHistory>
    </Section>
  );
};

const Section = styled.div`
  width: 85%;
  margin: auto;
`;

const HistoryTitle = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const HistorySubTitle = styled.div`
  margin-bottom: 2rem;
`;

const YearlyHistory = styled.div`
  border-top: 1px solid #c9c9c9;
  border-bottom: 1px solid #c9c9c9;
  margin-bottom: 2rem;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Year = styled.div`
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: 1rem;
  margin-left: 1rem;
`;

const HistoryItem = styled.div`
  display: flex;
  border-bottom: 1px solid #d2d2d2;
  align-items: center;

  margin-top: 3rem;
`;

const HistoryMonth = styled.div`
  margin-right: 2rem;
  font-size: 1rem;
  margin-right: 15rem;
  margin-bottom: 2rem;
`;

const HistoryContent = styled.div`
  font-size: 0.9rem;
  width: 70%;
  margin-bottom: 2rem;
`;

export default CRHistory;
