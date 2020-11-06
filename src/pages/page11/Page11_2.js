import React, { useState } from 'react';
import styled from 'styled-components';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';
import Answer from '../../components/Answer';
import StatusBar from '../../components/StatusBar';

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
      <StatusBar section="11" />
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
