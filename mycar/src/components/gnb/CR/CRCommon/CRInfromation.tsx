import React from "react";
import styled from "@emotion/styled";
import { FaLink, FaPhone, FaMapMarkedAlt, FaMailBulk } from "react-icons/fa";

const CompanyInformation = () => {
  return (
    <>
      <Section>
        <CompanyBox>
          <CompanyTitle>
            신뢰할 수 있는 회사 창래, 당신의 미래를 책임집니다
          </CompanyTitle>
          <CompanyPartners>
            <PartnerImage />
            <PartnerImage />
            <PartnerImage />
            <PartnerImage />
            <PartnerImage />
          </CompanyPartners>
          <CompanyContent>
            <CompanyMap />
            <ContentBox>
              <ContentTitle>창래</ContentTitle>
              <InfoBox>
                <InfoLink>
                  <IconBox>
                    <FaLink size="18" style={{ marginRight: "1rem" }} />
                    일급마이카
                  </IconBox>
                </InfoLink>
                <InfoLink>
                  <IconBox>
                    <FaPhone size="18" style={{ marginRight: "1rem" }} />
                    031 4568-7895
                  </IconBox>
                </InfoLink>
                <InfoLink>
                  <IconBox>
                    <FaMapMarkedAlt size="18" style={{ marginRight: "1rem" }} />
                    경기도 시흥시 서울대학로 59-20 9층
                  </IconBox>
                </InfoLink>
                <InfoLink>
                  <IconBox>
                    <FaMailBulk size="18" style={{ marginRight: "1rem" }} />
                    changrae031@gmail.com
                  </IconBox>
                </InfoLink>
              </InfoBox>
            </ContentBox>
          </CompanyContent>
        </CompanyBox>
      </Section>
    </>
  );
};

const Section = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
`;

const CompanyBox = styled.div`
  width: 65%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
`;

const CompanyTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  color: #565656;
  font-weight: bold;
`;

const CompanyPartners = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 4vh;
  margin-bottom: 8rem;
`;

const PartnerImage = styled.div`
  width: 10%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0 10px 6px -6px #eeeff1;
  background-image: url("https://i.postimg.cc/kgsykJcf/456.png");
`;

const CompanyContent = styled.div`
  width: 85%;
  height: 42vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ContentTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 2.2rem;
`;

const CompanyMap = styled.div`
  width: 40%;
  border-radius: 5px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0 10px 6px -6px #eeeff1;
  background-image: url("https://i.postimg.cc/43nFPHgz/2024-03-25-10-51-1.png");
`;

const ContentBox = styled.div`
  width: 46%;
  display: flex;
  flex-direction: column;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 27vh;
`;

const InfoLink = styled.div`
  border: 1px solid #e2e2e2;
  width: 100%;
  height: 5vh;
  display: flex;
  color: #878787;
  align-items: center;
  border-radius: 5px;
`;

const IconBox = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  margin: auto;
  font-size: 0.9rem;
`;

export default CompanyInformation;
