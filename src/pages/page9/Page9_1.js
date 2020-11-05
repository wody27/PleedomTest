import React, { useState } from 'react';
import styled from 'styled-components';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';
import Answer from '../../components/Answer';
import StatusBar from '../../components/StatusBar';

export default function Page9_1({ match, location }) {
  const number = 4;
  const answers = location.state.answer;
  const [selected, setSelected] = useState(answers[number]);
  const question = 'score';
  let initialSetting = true;
  initialSetting = answers[number] === -1 ? true : false;

  const [didNotAnswered, setDidNotAnswered] = useState(initialSetting);
  return (
    <Wrapper>
      <Background page="9_1" />
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
          오늘도 장바구니를 잘 챙겨 왔어요!
        </Answer>
        <Answer
          isSelected={selected === 1 ? true : false}
          onClick={() => {
            setSelected(1);
            setDidNotAnswered(false);
          }}
        >
          장바구니를 깜빡했네요.. <br />
          오늘만 비닐봉지 달라고 해야겠어요…에휴..
        </Answer>
        <Answer
          isSelected={selected === 0 ? true : false}
          onClick={() => {
            setSelected(0);
            setDidNotAnswered(false);
          }}
        >
          50원 주고 비닐봉지에 담아가는게 역시 편하죠
        </Answer>
      </VStack>
      <StatusBar section="9" />
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

  // 아이폰 12 Pro Max
  @media (min-width: 428px) {
    top: 190px;
  }

  z-index: 4;

  display: flex;
  flex-direction: column;
`;
