import React, { useState } from 'react';
import styled from 'styled-components';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';
import Answer from '../../components/Answer';
import StatusBar from '../../components/StatusBar';

export default function Page2_3({ match, location }) {
  const number = 1;
  const mbti = location.state.mbti;
  const [selected, setSelected] = useState(mbti[number]);
  const question = 'mbti';
  let initialSetting = true;
  initialSetting = mbti[number] === 'a' ? true : false;

  const [didNotAnswered, setDidNotAnswered] = useState(initialSetting);
  return (
    <Wrapper>
      <Background page="2_3" />
      <PageButton
        pageNumber={match.url}
        {...{ location }}
        {...{ number }}
        {...{ selected }}
        {...{ question }}
        disableButton={didNotAnswered}
      />
      <VStack>
        <Answer
          isSelected={selected === 'S' ? true : false}
          onClick={() => {
            setSelected('S');
            setDidNotAnswered(false);
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
            setDidNotAnswered(false);
          }}
        >
          알에서 뭐가 나올까? <br />
          설마 공룡이 나와서 날 공격하는건 아니겠지? <br />
          우리 집을 부수는 건 아니겠지?
        </Answer>
      </VStack>
      <StatusBar section="2" />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const VStack = styled.div`
  position: absolute;
  top: 179px;
  left: 16px;
  right: 16px;

  // 아이폰 5
  @media (max-width: 330px) {
    top: 155px;
  }

  // Galaxy S5, Moto G4
  @media (min-width: 350px) and (max-width: 370px) {
    top: 169px;
  }

  // 아이폰 6,7,8,SE,X,XS 사이즈
  @media (min-width: 365px) and (max-width: 385px) {
    top: 179px;
  }

  // 아이폰 11, plus 사이즈, Pixel ,Pixel2 XL 사이즈
  @media (min-width: 404px) and (max-width: 424px) {
    top: 195px;
  }

  // 아이폰 12 Pro Max
  @media (min-width: 428px) {
    top: 190px;
  }

  z-index: 4;

  display: flex;
  flex-direction: column;
`;
