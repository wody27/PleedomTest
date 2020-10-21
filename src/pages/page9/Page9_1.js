import React, { useState } from 'react';
import styled from 'styled-components';
import queryString from 'query-string';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';
import Answer from '../../components/Answer';

export default function Page9_1({ match, location }) {
  const answers = location.state.answer;
  const mbti = location.state.mbti;
  const [selected, setSelected] = useState(answers[4]);
  answers[4] = selected;
  console.log(mbti);
  console.log(answers);
  return (
    <Wrapper>
      <Background page="9_1" />
      <PageButton pageNumber={match.url} {...{ answers }} {...{ mbti }} />
      <VStack>
        <Answer
          isSelected={selected === 2 ? true : false}
          onClick={() => {
            setSelected(2);
          }}
        >
          오늘도 장바구니를 잘 챙겨 왔어요!
        </Answer>
        <Answer
          isSelected={selected === 1 ? true : false}
          onClick={() => {
            setSelected(1);
          }}
        >
          장바구니를 깜빡했네요.. <br />
          오늘만 비닐봉지 달라고 해야겠어요…에휴..
        </Answer>
        <Answer
          isSelected={selected === 0 ? true : false}
          onClick={() => {
            setSelected(0);
          }}
        >
          50원 주고 비닐봉지에 담아가는게 역시 편하죠
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
