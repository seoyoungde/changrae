import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";

const CRCeo = () => {
  return (
    <>
      <Section>
        <Ceobox>
          <CeoTitle>대표이사 인사말</CeoTitle>
          <CeoImage></CeoImage>
          <CeoSpeech>
            LF는 ‘Life in Future’를 의미합니다. 브랜드를 통해 고객의
            라이프스타일을 창조하는 미래 생활문화기업을 지향합니다.
            <br />
            1974년 설립 이후 LF는 새로운 트렌드를 주도하고 다양한 방면에서
            고객의 삶을 풍요롭게 가꿔왔습니다. 브랜드 경쟁력을 기반으로 남성복,
            여성복, 캐주얼, 스포츠 및 아웃도어, 액세서리, 편집숍에 이르기까지
            균형잡힌 브랜드 포트폴리오를 운영하며 대한민국의 패션 산업을 이끌어
            왔습니다.
            <br /> 이러한 성장은 장기적인 안목으로 추진한 품질에 대한 끊임없는
            연구와 적극적인 투자, 글로벌 인재 육성, 디자인 및 마케팅 전문성
            강화가 가져온 결과입니다.
            <br /> 이는 LF의 창의적인 기업 문화와 혁신적인 투자가 뒷받침되었기
            때문입니다.
            <br /> 이제 LF는 글로벌 생활문화기업으로 도약하고자 합니다. <br />
            불확실성 속에서도 시장과 고객을 정확하게 이해하고, 신속하고 자율적인
            의사결정 및 브랜드 중심의 경영을 통해 차별화된 고객가치 실현과
            지속적인 성장을 달성할 계획입니다.
            <br /> 나아가 LF의 대표 브랜드를 글로벌 명품 브랜드로 육성하는 한편,
            신규 사업 개척도 적극 추진하여 지속적인 성장의 기반을 마련할
            것입니다.
            <br />
            앞으로도 LF는 고객에게 특별한 가치를 드리는 기업이 되겠습니다.
            뜨거운 열정과 혁신적인 창의 그리고 끊임없는 도전으로 고객의 새로운
            미래를 열어가겠습니다.
          </CeoSpeech>
        </Ceobox>
      </Section>
    </>
  );
};
const Section = styled.div`
  width: 85%;
`;
const CeoTitle = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 4.3rem;
`;
const CeoImage = styled.div`
  width: 28%;
  height: 37vh;
  background-color: #d9d9d9;
  margin-bottom: 3.8rem;
`;
const CeoSpeech = styled.div`
  width: 100%;
  line-height: 35px;
  font-size: 1rem;
`;
const Ceobox = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  background-color: yellow;
`;
export default CRCeo;
