import React from "react";
import styled from "@emotion/styled";
import { Rating } from "@mui/material";

const reviews = [
  {
    imageUrl: "https://i.postimg.cc/W1JTyhjP/image-197.png",
    carIntro: "CLS250d 디젤(16년 ~현재)",
    oilInfo: "토탈쿼츠 이네오 NEX 5W-30",
    content: "인사로 친절하게 시작해 꼼꼼하게 잘 마무리해주셨습니다",
    date: "2024-01-03",
    rating: 4,
  },
  {
    imageUrl: "https://i.postimg.cc/W1JTyhjP/image-197.png",
    carIntro: "CLS250d 디젤(16년 ~현재)",
    oilInfo: "토탈쿼츠 이네오 NEX 5W-30",
    content: "인사로 친절하게 시작해 꼼꼼하게 잘 마무리해주셨습니다",
    date: "2024-01-03",
    rating: 4,
  },
  {
    imageUrl: "https://i.postimg.cc/W1JTyhjP/image-197.png",
    carIntro: "CLS250d 디젤(16년 ~현재)",
    oilInfo: "토탈쿼츠 이네오 NEX 5W-30",
    content: "인사로 친절하게 시작해 꼼꼼하게 잘 마무리해주셨습니다",
    date: "2024-01-03",
    rating: 4,
  },
  {
    imageUrl: "https://i.postimg.cc/W1JTyhjP/image-197.png",
    carIntro: "CLS250d 디젤(16년 ~현재)",
    oilInfo: "토탈쿼츠 이네오 NEX 5W-30",
    content: "인사로 친절하게 시작해 꼼꼼하게 잘 마무리해주셨습니다",
    date: "2024-01-03",
    rating: 4,
  },
  {
    imageUrl: "https://i.postimg.cc/W1JTyhjP/image-197.png",
    carIntro: "CLS250d 디젤(16년 ~현재)",
    oilInfo: "토탈쿼츠 이네오 NEX 5W-30",
    content: "인사로 친절하게 시작해 꼼꼼하게 잘 마무리해주셨습니다",
    date: "2024-01-03",
    rating: 4,
  },
  {
    imageUrl: "https://i.postimg.cc/W1JTyhjP/image-197.png",
    carIntro: "CLS250d 디젤(16년 ~현재)",
    oilInfo: "토탈쿼츠 이네오 NEX 5W-30",
    content: "인사로 친절하게 시작해 꼼꼼하게 잘 마무리해주셨습니다",
    date: "2024-01-03",
    rating: 4,
  },
];

const ServiceReview = () => {
  return (
    <Section>
      <Container>
        <Title>고객후기</Title>
        <SubTitle>고객분들이 직접 작성한 이용후기 245건</SubTitle>
        <ReviewContainer>
          {reviews.map((review, index) => (
            <ReviewBox key={index}>
              <Image imageUrl={review.imageUrl} />
              <TextBox>
                <CarIntro>{review.carIntro}</CarIntro>
                <CarIntro2>{review.oilInfo}</CarIntro2>
                <Content>{review.content}</Content>
                <Cal>{review.date}</Cal>
                <Rating
                  name="read-only"
                  value={review.rating}
                  size="small"
                  readOnly
                  sx={{
                    color: "red",
                    marginTop: "0.6rem",
                  }}
                />
              </TextBox>
            </ReviewBox>
          ))}
        </ReviewContainer>
      </Container>
    </Section>
  );
};

const Section = styled.div`
  width: 100%;
  height: auto;
  margin: auto;
  margin-top: 14vw;
`;

const Container = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.7vw;
`;

const SubTitle = styled.div`
  font-size: 0.9rem;
  margin-bottom: 5.5rem;
  color: #7c7c7c;
`;

const ReviewContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ReviewBox = styled.div`
  width: 20vw;
  margin-bottom: 2vw;
`;

const Image = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 25vh;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const TextBox = styled.div`
  width: 100%;
  margin-top: 1rem;
`;

const CarIntro = styled.div`
  font-size: 0.8rem;
  margin-top: 0.5rem;
`;

const CarIntro2 = styled.div`
  font-size: 0.6rem;
  color: #7c7c7c;
`;

const Content = styled.div`
  font-size: 0.8rem;
  margin-top: 0.5rem;
`;

const Cal = styled.div`
  font-size: 0.6rem;
  color: #7c7c7c;
  margin-top: 0.5rem;
`;

export default ServiceReview;
