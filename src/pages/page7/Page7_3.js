import React, { useState } from 'react';
import styled from 'styled-components';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';
import Answer from '../../components/Answer';
import StatusBar from '../../components/StatusBar';

export default function Page7_3({ match, location }) {
  const number = 3;
  const mbti = location.state.mbti;
  const [selected, setSelected] = useState(mbti[number]);
  const question = 'mbti';
  let initialSetting = true;
  initialSetting = mbti[number] === 'a' ? true : false;

  const [didNotAnswered, setDidNotAnswered] = useState(initialSetting);
  return (
    <Wrapper>
      <Background page="7_3" />
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
          isSelected={selected === 'P' ? true : false}
          onClick={() => {
            setSelected('P');
            setDidNotAnswered(false);
          }}
        >
          직접 둘러보면서 살래요~ 일단 출발할게요!
        </Answer>
        <Answer
          isSelected={selected === 'J' ? true : false}
          onClick={() => {
            setSelected('J');
            setDidNotAnswered(false);
          }}
        >
          떡, 어묵, 양파, 대파,,, <br />
          메모장에 적어가야 까먹지 않아요!
        </Answer>
      </VStack>
      <StatusBar section="7" />
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
