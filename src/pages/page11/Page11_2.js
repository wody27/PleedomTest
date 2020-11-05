import React, { useState } from 'react';
import styled from 'styled-components';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';
import Answer from '../../components/Answer';

export default function Page11_2({ match, location }) {
  const number = 0;
  const mbti = location.state.mbti;
  const [selected, setSelected] = useState(mbti[number]);
  const question = 'mbti';
  let initialSetting = true;
  initialSetting = mbti[number] === 'a' ? true : false;

  const [didNotAnswered, setDidNotAnswered] = useState(initialSetting);
  return (
    <Wrapper>
      <Background page="11_2" />
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
          isSelected={selected === 'E' ? true : false}
          onClick={() => {
            setSelected('E');
            setDidNotAnswered(false);
          }}
        >
          오늘부터 플라스틱프리 소모임에 가입할래요!
        </Answer>
        <Answer
          isSelected={selected === 'I' ? true : false}
          onClick={() => {
            setSelected('I');
            setDidNotAnswered(false);
          }}
        >
          플라스틱 관련 서적과 인터넷을 찾아보며 <br /> 환경에 대해 공부할래요
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

  // 더 작은 사이즈들
  @media (max-height: 568px) {
    top: 140px;
  }

  // 아이폰 6,7,8,SE 사이즈
  @media (min-height: 569px) and (max-height: 668px) {
    top: 179px;
  }

  // 아이폰 plus 사이즈
  @media (min-height: 669px) and (max-height: 736px) {
    top: 179px;
  }

  // 아이폰 X, XS 사이즈
  @media (min-height: 737px) and (max-height: 812px) {
    top: 179px;
  }

  z-index: 4;

  display: flex;
  flex-direction: column;
`;
