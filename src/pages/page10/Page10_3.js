import React, { useState } from 'react';
import styled from 'styled-components';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';
import Answer from '../../components/Answer';

export default function Page10_3({ match, location }) {
  const number = 2;
  const mbti = location.state.mbti;
  const [selected, setSelected] = useState(mbti[number]);
  const question = 'mbti';

  return (
    <Wrapper>
      <Background page="10_3" />
      <PageButton pageNumber={match.url} {...{ location }} {...{ number }} {...{ selected }} {...{ question }} />
      <VStack>
        <Answer
          isSelected={selected === 'T' ? true : false}
          onClick={() => {
            setSelected('T');
          }}
        >
          세상에.. 쓰레기섬이 얼마나 크길래 <br />
          국가로 인정된거죠? <br />
          어디서 모여든 폐플라스틱일까요? ㅜㅜ
        </Answer>
        <Answer
          isSelected={selected === 'F' ? true : false}
          onClick={() => {
            setSelected('F');
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
