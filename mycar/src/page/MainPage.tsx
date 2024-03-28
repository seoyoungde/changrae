import React from "react";
import Main from "../components/main/Main";
import styled from "@emotion/styled";

const MainPage = () => {
  return (
    <>
      <BackgroundColor>
        <Main></Main>
      </BackgroundColor>
    </>
  );
};
const BackgroundColor = styled.div`
  width: 100%;
  height: 80vh;
`;
export default MainPage;
