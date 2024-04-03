import React from "react";
import styled from "@emotion/styled";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { FaSearch } from "react-icons/fa";

const CscQna = () => {
  return (
    <>
      <Section>
        <Accordion style={{ boxShadow: "none" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            style={{
              height: "6.5vh",
            }}
          >
            <IconBox>
              <FaSearch
                size="1rem"
                style={{
                  color: "#213E6A",
                }}
              ></FaSearch>
              마이카는 무료인가요?
            </IconBox>
          </AccordionSummary>
          <AccordionDetails style={{ marginLeft: "5rem" }}>
            네 마이카는 무료서비스입니다.
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ boxShadow: "none" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            style={{
              height: "6.5vh",
            }}
          >
            <IconBox>
              <FaSearch
                size="1rem"
                style={{
                  color: "#213E6A",
                }}
              ></FaSearch>
              마이카는 무료인가요?
            </IconBox>
          </AccordionSummary>
          <AccordionDetails style={{ marginLeft: "5rem" }}>
            네 마이카는 무료서비스입니다.
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ boxShadow: "none" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            style={{
              height: "6.5vh",
            }}
          >
            <IconBox>
              <FaSearch
                size="1rem"
                style={{
                  color: "#213E6A",
                }}
              ></FaSearch>
              마이카는 무료인가요?
            </IconBox>
          </AccordionSummary>
          <AccordionDetails style={{ marginLeft: "5rem" }}>
            네 마이카는 무료서비스입니다.
          </AccordionDetails>
        </Accordion>
      </Section>
    </>
  );
};
const Section = styled.div`
  width: 100%;
  height: auto;
  margin: auto;
  margin-top: 5rem;
`;
const IconBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  gap: 1.5rem;
`;
export default CscQna;
