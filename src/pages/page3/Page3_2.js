import React, { useState } from 'react';
import styled from 'styled-components';
import queryString from 'query-string';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';
import Answer from '../../components/Answer';

export default function Page3_2({ match, location }) {
  const answers = location.state.answer;
  const mbti = location.state.mbti;
  const [selected, setSelected] = useState(answers[0]);
  answers[0] = selected;
  console.log(mbti);
  console.log(answers);
  return (
    <Wrapper>
      <Background page="3_2" />
      <PageButton pageNumber={match.url} {...{ answers }} {...{ mbti }} />
      <VStack>
        <Answer
          isSelected={selected === 2 ? true : false}
          onClick={() => {
            setSelected(2);
          }}
        >
          저는 환경을 위해 집에 있는 수저를 사용할게요!
        </Answer>
        <Answer
          isSelected={selected === 1 ? true : false}
          onClick={() => {
            setSelected(1);
          }}
        >
          일회용품 사용을 줄여야 하지만,, <br />
          설거지가 귀찮네요.. 오늘만 일회용품을 쓸래요!
        </Answer>
        <Answer
          isSelected={selected === 0 ? true : false}
          onClick={() => {
            setSelected(0);
          }}
        >
          저는 일회용품 사용이 제일 편하더라고요! <br />
          여러분도 일회용품 자주 쓰시죠?
        </Answer>
      </VStack>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const VStack = styled.div`
  position: absolute;
  top: 179px;
  left: 16px;
  right: 16px;
  z-index: 4;

  display: flex;
  flex-direction: column;
`;
