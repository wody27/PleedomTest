import React, { useState } from 'react';
import styled from 'styled-components';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';
import Answer from '../../components/Answer';

export default function Page2_3({ match, location }) {
  const answers = location.state.answer;
  const mbti = location.state.mbti;
  const [selected, setSelected] = useState(mbti[1]);
  mbti[1] = selected;
  console.log(mbti);
  console.log(answers);

  return (
    <Wrapper>
      <Background page="2_3" />
      <PageButton pageNumber={match.url} answers={answers} {...{ mbti }} />
      {/* questionNumber={1} selectedScore={selected} */}
      <VStack>
        <Answer
          isSelected={selected === 'S' ? true : false}
          onClick={() => {
            setSelected('S');
          }}
        >
          엄청 크고 매끄러운 촉감이 느껴져..! <br />
          인터넷에서 봤던 타조알의 특징과 비슷하군 <br />
          혹시 타조 알,,,?
        </Answer>
        <Answer
          isSelected={selected === 'N' ? true : false}
          onClick={() => {
            setSelected('N');
          }}
        >
          알에서 뭐가 나올까? <br />
          설마 공룡이 나와서 날 공격하는건 아니겠지? <br />
          우리 집을 부수는 건 아니겠지?
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
