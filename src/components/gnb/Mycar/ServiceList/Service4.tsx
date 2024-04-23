import React from "react";
import styled from "@emotion/styled";

// 메인 컴포넌트
const Service4 = () => {
  return (
    <Section>
      <Header>
        <HeaderTitle>
          <h1 style={{ marginBottom: "-1rem" }}>내 차 사고수리</h1>
          <h1>사전 견적 받아보세요</h1>
        </HeaderTitle>
      </Header>

      <Content>
        <ImageContainer>
          <StyledImage />
        </ImageContainer>

        <Details>
          <ServiceOptions>
            <ServiceOption>사고수리</ServiceOption>
            <ServiceOption>외장수리</ServiceOption>
          </ServiceOptions>

          <ServiceDescriptions>
            <Description>
              갑작스러운 사고 걱정하지 마세요.
              <br /> 일급마이카 모바일 웹 접속,
              <br /> 사고부위 정보 등록만 하면 OK.
            </Description>
            <Description>
              사고 주변 일급마이카 <br />
              제휴 1급 공업사 견적/예약을
              <br />
              one-stop으로 해결해 드릴게요.
            </Description>
          </ServiceDescriptions>
        </Details>
        <Contact>
          <PhoneImage />
          <ContactButton>통화 문의</ContactButton>
        </Contact>
      </Content>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  margin: 1vw auto 14vw;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 3vw;
`;

const HeaderTitle = styled.div`
  font-size: calc(1.4vw + 0.6rem);
  letter-spacing: 0.2vw;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

const ImageContainer = styled.div`
  width: 30vw;
  height: 32vh;
`;

const StyledImage = styled.div`
  background-image: url("https://i.postimg.cc/4NH9gM5H/image-215.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: 34%;
  margin-left: 2rem;
`;

const ServiceOptions = styled.div`
  display: flex;
  width: 76%;
  height: 5vh;
  justify-content: space-around;
`;

const ServiceOption = styled.div`
  background-color: #0070c0;
  color: white;
  border-radius: 30px;
  text-align: center;
  line-height: 5vh;
  flex: 1;
  margin-right: 1.5rem;
`;

const ServiceDescriptions = styled.div``;

const Description = styled.div`
  font-size: 1.2rem;
  line-height: 2rem;
  font-weight: 800;
  margin-top: 2.5rem;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

const PhoneImage = styled.div`
  background-image: url("https://i.postimg.cc/0j2kqm5Z/image-238.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 8vw;
  height: 12vh;
  margin-bottom: 1.3rem;
`;

const ContactButton = styled.div`
  background-color: #0070c0;
  color: white;
  border-radius: 30px;
  text-align: center;
  line-height: 4vh;
  font-weight: 700;
  width: 100%;
`;

export default Service4;
