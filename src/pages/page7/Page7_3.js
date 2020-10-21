import React, { useState } from 'react';
import styled from 'styled-components';
import queryString from 'query-string';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';
import Answer from '../../components/Answer';

export default function Page7_3({ match, location }) {
  const answers = location.state.answer;
  const mbti = location.state.mbti;
  const [selected, setSelected] = useState(mbti[3]);
  mbti[3] = selected;
  console.log(mbti);
  console.log(answers);
  return (
    <Wrapper>
      <Background page="7_3" />
      <PageButton pageNumber={match.url} {...{ answers }} {...{ mbti }} />
      <VStack>
        <Answer
          isSelected={selected === 'P' ? true : false}
          onClick={() => {
            setSelected('P');
          }}
        >
          직접 둘러보면서 살래요~ 일단 출발하게요!
        </Answer>
        <Answer
          isSelected={selected === 'J' ? true : false}
          onClick={() => {
            setSelected('J');
          }}
        >
          떡, 어묵, 양파, 대파,,, <br />
          메모장에 적어가야 까먹지 않아요!
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
