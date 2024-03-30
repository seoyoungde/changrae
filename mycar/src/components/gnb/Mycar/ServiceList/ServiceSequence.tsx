import React from "react";
import styled from "@emotion/styled";

const ServiceSequence = () => {
  return (
    <>
      <Section>
        <MycarSequence>
          <SequenceContainer>
            <Title>
              <h1>마이카 서비스 이렇게 진행해요</h1>
            </Title>
            <SequencesBox>
              <Sequence1>1</Sequence1>
              <Sequence2>2</Sequence2>

              <Sequence3>3</Sequence3>

              <Sequence4>4</Sequence4>

              <Sequence5>5</Sequence5>
            </SequencesBox>
          </SequenceContainer>
        </MycarSequence>
      </Section>
    </>
  );
};

const Section = styled.div`
  width: 100%;
  height: 80vh;
  background-color: #f6f9ff;
  margin-top: 14rem;
`;

const MycarSequence = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const SequenceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  font-size: 1.5rem;
  margin-bottom: 5.5rem;
`;
const SequencesBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  justify-content: space-between;
`;
const Sequence1 = styled.div`
  width: 18%;
  height: 37vh;
  background-color: pink;
`;
const Sequence2 = styled.div`
  width: 18%;
  height: 37vh;
  background-color: green;
`;
const Sequence3 = styled.div`
  width: 18%;
  height: 37vh;
  background-color: yellow;
`;
const Sequence4 = styled.div`
  width: 18%;
  height: 37vh;
  background-color: red;
`;
const Sequence5 = styled.div`
  width: 18%;
  height: 37vh;
  background-color: blue;
`;
export default ServiceSequence;
