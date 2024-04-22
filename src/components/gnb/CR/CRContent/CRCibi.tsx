import React from "react";
import styled from "@emotion/styled";

const CRCibi = () => {
  return (
    <>
      <Section>
        <CibiTitle>CI / BI</CibiTitle>
        <CiBox>
          <CiTitle>일급마이카 CI</CiTitle>
          <CiContentBox>
            <CiContentTitle>
              창래 기업을 대표하는 일급마이카 중요한 시각적 상징
            </CiContentTitle>
            <CiContentSubtitle>
              일급마이카의 심볼마크와 사명 키워드가 결합된 CI는 창래 기업을
              대표하는 중요한 시각적 상징 요소로 준수하고 있습니다
            </CiContentSubtitle>
            <CiKr>일급마이카</CiKr>
            <CiEn>1ST MYCAR</CiEn>
          </CiContentBox>
        </CiBox>
        <BiBox>
          <BiTitle>일급마이카 BI</BiTitle>
          <BiContentBox>
            <BiContentTitle>
              창래 기업을 대표하는 일급마이카 중요한 시각적 상징
            </BiContentTitle>
            <BiContentSubtitle>
              일급마이카의 심볼마크와 사명 키워드가 결합된 CI는 창래 기업을
              대표하는 중요한 시각적 상징 요소로 준수하고 있습니다
            </BiContentSubtitle>
            <BiKr>창래</BiKr>
            <BiEn>CHANGRAE</BiEn>
          </BiContentBox>
        </BiBox>
      </Section>
    </>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 85%;
  height: auto;
  margin: auto;
`;

const CibiTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 4.3rem;
`;

const CiBox = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: row;
  margin-bottom: 8rem;
`;

const BiBox = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: row;
`;

const CiTitle = styled.h4`
  margin-right: 7rem;
  font-size: 1.2rem;
  font-weight: 500;
`;

const CiContentBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const CiContentTitle = styled.h3`
  font-size: 1.4rem;
`;

const CiContentSubtitle = styled.h5`
  font-size: 1rem;
  font-weight: 500;
  margin-top: 1px;
`;

const CiKr = styled.p`
  font-size: 2.2rem;
  font-weight: 800;
  color: #0070c0;
`;

const CiEn = styled.p`
  font-size: 2.2rem;
  font-weight: 800;
  color: #0070c0;
`;

const BiTitle = styled.h4`
  margin-right: 7rem;
  font-size: 1.2rem;
  font-weight: 500;
`;

const BiContentBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const BiContentTitle = styled.h3`
  font-size: 1.4rem;
`;

const BiContentSubtitle = styled.h5`
  font-size: 1rem;
  font-weight: 500;
  margin-top: 1px;
`;

const BiKr = styled.p`
  font-size: 2.2rem;
  font-weight: 800;
  color: #0070c0;
`;

const BiEn = styled.p`
  font-size: 2.2rem;
  font-weight: 800;
  color: #0070c0;
`;
export default CRCibi;
