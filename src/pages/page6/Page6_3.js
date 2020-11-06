import React, { useState } from 'react';
import styled from 'styled-components';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';
import Answer from '../../components/Answer';
import StatusBar from '../../components/StatusBar';

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
      <StatusBar section="6" />
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

  display: flex;
  flex-direction: column;
`;
