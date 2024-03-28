import React from "react";
import styled from "@emotion/styled";

const CRNews = () => {
  return (
    <>
      <Section>
        <NewsBackground>
          <NewsContent>
            <NewsTitle>News</NewsTitle>
            <NewsBoxContainer>
              <NewsBox>
                <NewsBoxs>
                  <NewsBoxTitle>2024년도개발팀 채용공고</NewsBoxTitle>
                  <NewsBoxContent>
                    2024년도 협력업체 등록공고 미래의 건설을 선도하는
                    창래(주)에서 2024년 기획개발팀과 함께 발전해 나아갈 우수한
                    직원을 모집하오니 많은 참여바랍니다. 1.모집부문 및 자격요건*
                    첨부문서를 참고하세요 2.등록기간 및 일정
                    인터넷접수기간1.모집부문 및 자격요건* 첨부문서를 참고하세요
                    2.등록기간 및 일정 인터넷접수기간
                  </NewsBoxContent>
                  <NewsBoxCal>2024-01-08</NewsBoxCal>
                </NewsBoxs>
              </NewsBox>
              <NewsBox>
                <NewsBoxs>
                  <NewsBoxTitle>2024년도개발팀 채용공고</NewsBoxTitle>
                  <NewsBoxContent>
                    2024년도 협력업체 등록공고 미래의 건설을 선도하는
                    창래(주)에서 2024년 기획개발팀과 함께 발전해 나아갈 우수한
                    직원을 모집하오니 많은 참여바랍니다. 1.모집부문 및 자격요건*
                    첨부문서를 참고하세요 2.등록기간 및 일정
                    인터넷접수기간1.모집부문 및 자격요건* 첨부문서를 참고하세요
                    2.등록기간 및 일정 인터넷접수기간
                  </NewsBoxContent>
                  <NewsBoxCal>2024-01-08</NewsBoxCal>
                </NewsBoxs>
              </NewsBox>
              <NewsBox>
                <NewsBoxs>
                  <NewsBoxTitle>2024년도개발팀 채용공고</NewsBoxTitle>
                  <NewsBoxContent>
                    2024년도 협력업체 등록공고 미래의 건설을 선도하는
                    창래(주)에서 2024년 기획개발팀과 함께 발전해 나아갈 우수한
                    직원을 모집하오니 많은 참여바랍니다. 1.모집부문 및 자격요건*
                    첨부문서를 참고하세요 2.등록기간 및 일정
                    인터넷접수기간1.모집부문 및 자격요건* 첨부문서를 참고하세요
                    2.등록기간 및 일정 인터넷접수기간
                  </NewsBoxContent>
                  <NewsBoxCal>2024-01-08</NewsBoxCal>
                </NewsBoxs>
              </NewsBox>
              <NewsBox>
                <NewsBoxs>
                  <NewsBoxTitle>2024년도개발팀 채용공고</NewsBoxTitle>
                  <NewsBoxContent>
                    2024년도 협력업체 등록공고 미래의 건설을 선도하는
                    창래(주)에서 2024년 기획개발팀과 함께 발전해 나아갈 우수한
                    직원을 모집하오니 많은 참여바랍니다. 1.모집부문 및 자격요건*
                    첨부문서를 참고하세요 2.등록기간 및 일정
                    인터넷접수기간1.모집부문 및 자격요건* 첨부문서를 참고하세요
                    2.등록기간 및 일정 인터넷접수기간
                  </NewsBoxContent>
                  <NewsBoxCal>2024-01-08</NewsBoxCal>
                </NewsBoxs>
              </NewsBox>
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
  height: 89vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("https://i.postimg.cc/MH2kZsYp/image.png");
`;
const NewsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100%;
  margin: auto;
`;
const NewsTitle = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  font-size: 2.5rem;
  font-weight: 500;
`;
const NewsBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
const NewsBox = styled.div`
  width: 24%;
  height: 40vh;
  background-color: white;
  box-shadow: 0 10px 6px -6px #eeeff1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const NewsBoxs = styled.div`
  width: 70%;
  height: 60%;
  margin: auto;
`;
const NewsBoxTitle = styled.div`
  margin-bottom: 2.5rem;
  font-size: 1rem;
  font-weight: 600;
  width: 100%;
  height: 2.5vh;
`;
const NewsBoxContent = styled.div`
  font-size: 0.8rem;
  width: 100%;
  height: 13vh;
  color: #8c8c8c;
  margin-bottom: 2.5rem;
`;
const NewsBoxCal = styled.div`
  font-size: 0.7rem;
  color: #c1c1c1;
  width: 100%;
  height: 2vh;
`;

export default CRNews;
