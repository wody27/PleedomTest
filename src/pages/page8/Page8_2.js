import React, { useState } from 'react';
import styled from 'styled-components';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';
import Answer from '../../components/Answer';

export default function Page8_2({ match, location }) {
  const number = 3;
  const answers = location.state.answer;
  const [selected, setSelected] = useState(answers[number]);
  const question = 'score';

  return (
    <Wrapper>
      <Background page="8_2" />
      <PageButton pageNumber={match.url} {...{ location }} {...{ number }} {...{ selected }} {...{ question }} />
      <VStack>
        <Answer
          isSelected={selected === 2 ? true : false}
          onClick={() => {
            setSelected(2);
          }}
        >
          롤백 사용하지 않아도 <br />
          손으로 가져갈 수 있겠는데요?
        </Answer>
        <Answer
          isSelected={selected === 1 ? true : false}
          onClick={() => {
            setSelected(1);
          }}
        >
          비닐 대신 손으로 가져갈 수 있지만 <br />
          위생상 롤백에 담을래요.
        </Answer>
        <Answer
          isSelected={selected === 0 ? true : false}
          onClick={() => {
            setSelected(0);
          }}
        >
          당연히 채소는 롤백에 담아 가야한다고 생각해요!
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
