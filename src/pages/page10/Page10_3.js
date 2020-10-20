import React, { useState } from 'react';
import styled from 'styled-components';
import queryString from 'query-string';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';
import Answer from '../../components/Answer';

export default function Page10_3({ match, location }) {
  const [selected, setSelected] = useState(-1);
  return (
    <Wrapper>
      <Background page="10_3" />
      <PageButton pageNumber={match.url} />
      <VStack>
        <Answer
          isSelected={selected === 2 ? true : false}
          onClick={() => {
            setSelected(2);
          }}
        >
          세상에.. 쓰레기섬이 얼마나 크길래 <br />
          국가로 인정된거죠? <br />
          어디서 모여든 폐플라스틱일까요? ㅜㅜ
        </Answer>
        <Answer
          isSelected={selected === 1 ? true : false}
          onClick={() => {
            setSelected(1);
          }}
        >
          쓰레기섬에서 플라스틱 먹고 있는 새라니.. <br />
          정말 심각하네요 ㅜㅜ
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
