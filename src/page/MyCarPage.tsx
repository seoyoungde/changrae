import React from "react";
import styled from "@emotion/styled";
import MyCar from "../components/gnb/Mycar/MyCar";

const MyCarPage = () => {
  return (
    <>
      <BackgroundColor>
        <MyCar></MyCar>
      </BackgroundColor>
    </>
  );
};
const BackgroundColor = styled.div``;
export default MyCarPage;
