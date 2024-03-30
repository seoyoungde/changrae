import React from "react";
import styled from "@emotion/styled";

const CRService = () => {
  return (
    <Section>
      <ServiceTitle>서비스 소개</ServiceTitle>
      <ServiceContainer>
        <ServiceItem>
          <Title>고객 니즈를 먼저 알고 다가가는 선점형 맞춤서비스</Title>
          <SubTitle>
            <p>
              자동차 사고 수리와 관련 다양한 유형별 빅데이터 정보를 100% 무료로
              실시간 검색 서비스 제공,
            </p>
            <p>
              견적 비용 & 실제 수리비용 매칭률이 높은 믿을 수 있는 투명한 수리
              비용, 전문성을 바탕으로 한 기술 편차 없는 만족 수리
            </p>
            <p>
              고객의 신뢰를 한 단계 한 단계 지속적으로 쌓아 나가며 고객과 365일
              함께 동행하는 서비스가 되겠습니다.
            </p>
          </SubTitle>
          <ContentImage imageUrl="https://i.postimg.cc/yxszVV61/image-222.png" />
        </ServiceItem>
        <ServiceItem>
          <Title>빅데이터 & 통계기반 서비스</Title>
          <SubTitle>
            <p>고객의 다양한 니즈 충족 및 빅데이터 기반 실시간 맞춤 대응</p>
            <p>만족도 높아 신뢰할 수 있는 리얼 이용 후기</p>
            <p>제휴 1급 종합공업사 다양한 수리 전/후 평가, 통계정보</p>
          </SubTitle>
          <ContentImage imageUrl="https://i.postimg.cc/Vshy6QfW/image-223.png" />
        </ServiceItem>
        <ServiceItem>
          <Title>100% 무료 정보 제공형 서비스</Title>
          <Title2>체계적으로 신속한 One-Stop 다이렉트 서비스</Title2>
          <SubTitle>
            <p>
              내 차 사고와 유사한 다양한 수리 사례 정보{" "}
              <a style={{ color: "red", fontWeight: "bold" }}>100% </a>무료
              실시간 검색
            </p>
            <p>신속하고 정확한 견적 및 예약, 고객 대응 서비스</p>
            <p>제휴 1급 종합공업사 믿을 수 있는 고품격 수리 서비스</p>
            <p>
              각종 수리 완료 정보 유형별 저장/자동 분류, 빅데이터화로 검색최적화
              준비 끝
            </p>
          </SubTitle>
          <ContentImage imageUrl="https://i.postimg.cc/0jV780RV/image-224.png" />
        </ServiceItem>
      </ServiceContainer>
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

const ServiceTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 4.3rem;
`;

const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ServiceItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-bottom: 10rem;
`;

const Title = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

const Title2 = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const SubTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  line-height: 1px;

  p {
    margin-bottom: 1rem;
  }
`;
const ContentImage = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 58vh;
  background-image: url(${(props) => props.imageUrl});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export default CRService;
