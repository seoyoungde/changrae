import React from "react";
import styled from "@emotion/styled";

const ServiceSequence = () => {
  return (
    <>
      <Section>
        <SequenceContainer>
          <Title>
            <h1>마이카 서비스 이렇게 진행해요</h1>
          </Title>
          <SequencesBox>
            <Sequence>
              <Image imageUrl="https://i.postimg.cc/d1ct4Wvc/Group-331.png"></Image>
              <ImageTitle>
                <h2>비슷한 사고사례 검색</h2>
              </ImageTitle>
              <IconSubtitle>
                <p>고객님의 차량과 비슷한 사고사례</p>
                <p>검색을 빠르게 도와드립니다</p>
              </IconSubtitle>
            </Sequence>
            <Sequence>
              <Image imageUrl="https://i.postimg.cc/sgcNnmWG/free-icon-check-box-60726-1.png"></Image>
              <ImageTitle>
                <h2>공업사 찾아 예약하기</h2>
              </ImageTitle>
              <IconSubtitle>
                <p>후기와 별점,가격등 다양한 정보로</p>
                <p>원하는 공업사 예약을 도와드립니다</p>
              </IconSubtitle>
            </Sequence>

            <Sequence>
              <Image imageUrl="https://i.postimg.cc/5NfG8DYW/image-29.png"></Image>
              <ImageTitle>
                <h2>엄선된공업사에 차량 입고</h2>
              </ImageTitle>
              <IconSubtitle>
                <p>직접 기술과 실력을 검증한</p>
                <p>1,2급 공업사에서 수리합니다</p>
              </IconSubtitle>
            </Sequence>

            <Sequence>
              <Image imageUrl="https://i.postimg.cc/X7QCvy66/image-30.png"></Image>
              <ImageTitle>
                <h2>수리 과정 실시간 리프팅</h2>
              </ImageTitle>
              <IconSubtitle>
                <p>맡기신 차량의 수리 진행 과정을</p>
                <p>투명하게 실시간으로 안내드립니다</p>
              </IconSubtitle>
            </Sequence>

            <Sequence>
              <Image imageUrl="https://i.postimg.cc/gcR9dvRr/free-icon-reviews-5182755-1.png"></Image>
              <ImageTitle>
                <h2>차량 출고 후 후기작성</h2>
              </ImageTitle>
              <IconSubtitle>
                <p>맡기신 차량의 수리가 끝나고 출고 후</p>
                <p>마이카 후기 작성 안내를 도와드립니다</p>
              </IconSubtitle>
            </Sequence>
          </SequencesBox>
        </SequenceContainer>
      </Section>
    </>
  );
};

const Section = styled.div`
  width: 100%;
  min-height: 60vh;
  background-color: #f6f9ff;
  padding: 5vh 0;
  margin-top: 14vw;
`;

const SequenceContainer = styled.div`
  width: 68%;
  margin: auto;
  margin-top: 4.5rem;
`;

const Title = styled.div`
  margin-bottom: 5rem;
  text-align: center;
  font-size: calc(1.2vw + 0.3rem);
`;

const SequencesBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Sequence = styled.div`
  width: 14%;
  margin: auto;
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
`;

const Image = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 8vh;
  background-image: url(${(props) => props.imageUrl});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const ImageTitle = styled.div`
  margin-top: 1rem;
  font-size: 0.7rem;
`;

const IconSubtitle = styled.div`
  margin-top: 1rem;
  font-size: 0.7rem;
`;

export default ServiceSequence;
