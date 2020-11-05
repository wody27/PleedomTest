import React, { useState } from 'react';
import styled from 'styled-components';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';
import Answer from '../../components/Answer';
import StatusBar from '../../components/StatusBar';

export default function Page10_3({ match, location }) {
  const number = 2;
  const mbti = location.state.mbti;
  const [selected, setSelected] = useState(mbti[number]);
  const question = 'mbti';
  let initialSetting = true;
  initialSetting = mbti[number] === 'a' ? true : false;

  const [didNotAnswered, setDidNotAnswered] = useState(initialSetting);
  return (
    <Wrapper>
      <Background page="10_3" />
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
          isSelected={selected === 'T' ? true : false}
          onClick={() => {
            setSelected('T');
            setDidNotAnswered(false);
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
            setDidNotAnswered(false);
          }}
        >
          쓰레기섬에서 플라스틱 먹고 있는 새라니.. <br />
          정말 심각하네요 ㅜㅜ
        </Answer>
      </VStack>
      <StatusBar section="10" />
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
