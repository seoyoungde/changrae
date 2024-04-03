import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";

const CRBusiness = () => {
  return (
    <>
      <Section>
        <BusinessTitle>사업안내</BusinessTitle>
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
`;
const BusinessTitle = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 4.3rem;
`;
export default CRBusiness;
