import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";

const CRService = () => {
  return (
    <>
      <Section>
        <ServiceTitle>서비스소개</ServiceTitle>
      </Section>
    </>
  );
};
const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  height: auto;
  margin: auto;
  background-color: red;
`;
const ServiceTitle = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 4.3rem;
`;

export default CRService;
