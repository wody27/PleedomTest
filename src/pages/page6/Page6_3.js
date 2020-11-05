import React, { useState } from 'react';
import styled from 'styled-components';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';
import Answer from '../../components/Answer';

export default function Page6_3({ match, location }) {
  const number = 2;
  const answers = location.state.answer;
  const [selected, setSelected] = useState(answers[number]);
  const question = 'score';
  let initialSetting = true;
  initialSetting = answers[number] === -1 ? true : false;

  const [didNotAnswered, setDidNotAnswered] = useState(initialSetting);
  return (
    <Wrapper>
      <Background page="6_3" />
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
          isSelected={selected === 2 ? true : false}
          onClick={() => {
            setSelected(2);
            setDidNotAnswered(false);
          }}
        >
          항상 준비되어 있지! 나와라 텀블러 & 빨대! <br />
          여기에 담아 주세요^^(으쓱코쓱)
        </Answer>
        <Answer
          isSelected={selected === 1 ? true : false}
          onClick={() => {
            setSelected(1);
            setDidNotAnswered(false);
          }}
        >
          앗! 깜빡하고 텀블러를 집에 두고 왔네요! <br />
          일회용 컵에 주세요!
        </Answer>
        <Answer
          isSelected={selected === 0 ? true : false}
          onClick={() => {
            setSelected(0);
            setDidNotAnswered(false);
          }}
        >
          그냥 일회용 컵에 주세요!
        </Answer>
      </VStack>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const VStack = styled.div`
  position: absolute;
  top: 193px;
  left: 16px;
  right: 16px;
  z-index: 4;

  // 더 작은 사이즈들
  @media (max-height: 568px) {
    top: 140px;
  }

  // 아이폰 6,7,8,SE 사이즈
  @media (min-height: 569px) and (max-height: 668px) {
    top: 170px;
  }

  // 아이폰 plus 사이즈
  @media (min-height: 669px) and (max-height: 736px) {
    top: 190px;
  }

  // 아이폰 X, XS 사이즈
  @media (min-height: 737px) and (max-height: 812px) {
    top: 180px;
  }

  display: flex;
  flex-direction: column;
`;
