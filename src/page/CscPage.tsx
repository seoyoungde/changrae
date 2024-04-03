import React from "react";
import styled from "@emotion/styled";
import Csc from "../components/gnb/Csc/Csc";

const CscPage = () => {
  return (
    <>
      <BackgroundColor>
        <Csc></Csc>
      </BackgroundColor>
    </>
  );
};
const BackgroundColor = styled.div`
  width: 100%;
  height: 80vh;
`;
export default CscPage;
