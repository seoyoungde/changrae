import React from "react";
import styled from "@emotion/styled";

const News = [
  {
    title: "2024년도 개발팀 채용공고",
    content:
      "2024년도 협력업체 등록공고 미래의 건설을 선도하는 창래(주)에서 2024년 기획개발팀과 함께 발전해 나아갈 우수한 직원을 모집하오니 많은 참여바랍니다. 1.모집부문 및 자격요건* 첨부문서를 참고하세요 2.등록기간 및 일정 인터넷접수기간1.모집부문 및 자격요건* 첨부문서를 참고하세요 2.등록기간 및 일정 인터넷접수기간",
    date: "2024-01-08",
  },
  {
    title: "2024년도 개발팀 채용공고",
    content:
      "2024년도 협력업체 등록공고 미래의 건설을 선도하는 창래(주)에서 2024년 기획개발팀과 함께 발전해 나아갈 우수한 직원을 모집하오니 많은 참여바랍니다. 1.모집부문 및 자격요건* 첨부문서를 참고하세요 2.등록기간 및 일정 인터넷접수기간1.모집부문 및 자격요건* 첨부문서를 참고하세요 2.등록기간 및 일정 인터넷접수기간",
    date: "2024-01-08",
  },
  {
    title: "2024년도 개발팀 채용공고",
    content:
      "2024년도 협력업체 등록공고 미래의 건설을 선도하는 창래(주)에서 2024년 기획개발팀과 함께 발전해 나아갈 우수한 직원을 모집하오니 많은 참여바랍니다. 1.모집부문 및 자격요건* 첨부문서를 참고하세요 2.등록기간 및 일정 인터넷접수기간1.모집부문 및 자격요건* 첨부문서를 참고하세요 2.등록기간 및 일정 인터넷접수기간",
    date: "2024-01-08",
  },
  {
    title: "2024년도 개발팀 채용공고",
    content:
      "2024년도 협력업체 등록공고 미래의 건설을 선도하는 창래(주)에서 2024년 기획개발팀과 함께 발전해 나아갈 우수한 직원을 모집하오니 많은 참여바랍니다. 1.모집부문 및 자격요건* 첨부문서를 참고하세요 2.등록기간 및 일정 인터넷접수기간1.모집부문 및 자격요건* 첨부문서를 참고하세요 2.등록기간 및 일정 인터넷접수기간",
    date: "2024-01-08",
  },
];

const CRNews = () => {
  return (
    <>
      <Section>
        <NewsBackground>
          <NewsContent>
            <NewsTitle>News</NewsTitle>
            <NewsBoxContainer>
              {News.map((news, index) => (
                <NewsBox key={index}>
                  <NewsBoxs>
                    <NewsBoxTitle>{news.title}</NewsBoxTitle>
                    <NewsBoxContent>{news.content}</NewsBoxContent>
                    <NewsBoxCal>{news.date}</NewsBoxCal>
                  </NewsBoxs>
                </NewsBox>
              ))}
            </NewsBoxContainer>
          </NewsContent>
        </NewsBackground>
      </Section>
    </>
  );
};

const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const NewsBackground = styled.div`
  width: 100%;
  min-height: 80vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("https://i.postimg.cc/MH2kZsYp/image.png");
`;

const NewsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  margin: auto;
  margin-top: 2vw;
`;

const NewsTitle = styled.h1`
  margin-top: 10rem;
  margin-bottom: 5rem;
  font-size: 2.5rem;
  font-weight: 500;
`;

const NewsBoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 85%;
  height: auto;
  padding: 0 1rem;
`;

const NewsBox = styled.div`
  width: calc(24% - 1rem);

  margin-bottom: 2rem;
  background-color: #fff;
  box-shadow: 0 10px 6px -6px #eeeff1;
  border-radius: 8px;
  @media (max-width: 768px) {
    width: calc(50% - 1rem);
  }
  @media (max-width: 576px) {
    width: 100%;
  }
`;

const NewsBoxs = styled.div`
  padding: 3.5rem;
`;

const NewsBoxTitle = styled.h2`
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const NewsBoxContent = styled.p`
  display: flex;
  font-size: 0.875rem;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 85%;
  padding: 0 1rem;
  color: #8c8c8c;
  margin-bottom: 1.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const NewsBoxCal = styled.div`
  font-size: 0.75rem;
  color: #c1c1c1;
`;

export default CRNews;
