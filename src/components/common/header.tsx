import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import Grid from "@mui/material/Unstable_Grid2";
import { useLocation, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <HeaderColor>
        <Grid container>
          <Grid xs={1}></Grid>
          <Grid xs={10} sx={{ height: "7vh" }}>
            <HeaderStyle>
              <LogoStyle
                className="mainpage"
                onClick={() => {
                  navigate("/mainpage");
                }}
              >
                일급마이카
              </LogoStyle>
              <NavBox>
                <NavStyle
                  className="crmainpage"
                  onClick={() => {
                    navigate("/crmainpage");
                  }}
                >
                  회사소개
                </NavStyle>
                <NavStyle
                  className="mycarpage"
                  onClick={() => {
                    navigate("/mycarpage");
                  }}
                >
                  서비스안내
                </NavStyle>
                <NavStyle
                  className="cscpage"
                  onClick={() => {
                    navigate("/cscpage");
                  }}
                >
                  고객센터
                </NavStyle>
                <NavStyle
                  className="partnerpage"
                  onClick={() => {
                    navigate("/partnerpage");
                  }}
                >
                  파트너사
                </NavStyle>
              </NavBox>
            </HeaderStyle>
          </Grid>
          <Grid xs={1}></Grid>
        </Grid>
      </HeaderColor>
    </>
  );
};
const HeaderColor = styled.div`
  width: 80%;
  margin: auto;
`;
const HeaderStyle = styled.div`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: row;
`;
const LogoStyle = styled.div`
  width: 10rem;
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    font-size: 1rem;
  }
`;
const NavBox = styled.div`
  display: flex;
  align-items: center;
  width: 30rem;
  justify-content: space-between;
`;
const NavStyle = styled.div`
  cursor: pointer;
  height: 1rem;
  font-size: 1.05rem;

  @media screen and (max-width: 800px) {
    font-size: 0.8rem;
  }
`;
export default Header;
