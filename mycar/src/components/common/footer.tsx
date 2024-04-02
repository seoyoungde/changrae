import React from "react";
import styled from "@emotion/styled";

const Footer = () => {
  return (
    <FooterContainer>
      <PolicyLinks>
        <PolicyLink href="#">이용약관</PolicyLink>
        <PolicyLink href="#">개인정보처리방침</PolicyLink>
        <PolicyLink href="#">저작권 보호정책</PolicyLink>
        <PolicyLink href="#">사이버감사실</PolicyLink>
        <PolicyLink href="#">전체메뉴보기</PolicyLink>
      </PolicyLinks>
      <FooterContent>
        <FooterIntro>
          <Logo>1st마이카</Logo>
          <Address>
            <Intro>경기도시흥시 지식산업센터907</Intro>
            <Intro>Tel : 032 1201-7823</Intro>
            <Copyright>
              COPYRIGHT 2014c INCHEMON FREE ECONOMIC ZONE AUTORITY
            </Copyright>
          </Address>
        </FooterIntro>
        <ContactInfo>
          <ContactImage>
            <a href="#" role="link">
              <img
                src="https://i.postimg.cc/vTDmC7sz/v982-d3-04.jpg"
                alt="contact-image"
                style={{ width: "40px", height: "auto" }}
              ></img>
            </a>
            <a href="#" role="link">
              {" "}
              <img
                src="https://i.postimg.cc/hv7B92nH/10464410.png"
                alt="contact-image"
                style={{ width: "40px", height: "auto" }}
              ></img>
            </a>
          </ContactImage>
          <ContactNumber>고객센터: 010 9893 3392</ContactNumber>
        </ContactInfo>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
  width: 65%;
  margin-left: auto;
  margin-right: auto;
`;

const PolicyLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 53%;
  font-size: 0.9rem;
  color: #7e7e7e;
`;

const PolicyLink = styled.a`
  text-decoration: none;
  color: black;
`;
const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 4.3rem;
`;

const FooterIntro = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: 900;
  color: #3d567d;
  width: 9rem;
`;

const Address = styled.div`
  display: flex;
  flex-direction: column;
  width: 25rem;
`;

const Intro = styled.div`
  font-size: 0.7rem;
  color: #979797;
`;

const Copyright = styled.div`
  font-size: 0.7rem;
  color: #979797;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactImage = styled.div`
  width: 7rem;
  height: auto;
  margin-bottom: 0.5rem;
`;

const ContactNumber = styled.div`
  color: #636363;
  font-size: 0.9rem;
  width: 11rem;
`;

export default Footer;
