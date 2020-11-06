import React, { useState } from 'react';
import styled from 'styled-components';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';
import Answer from '../../components/Answer';
import StatusBar from '../../components/StatusBar';

export default function Page4_1({ match, location }) {
  const number = 1;
  const answers = location.state.answer;
  const [selected, setSelected] = useState(answers[number]);
  const question = 'score';
  let initialSetting = true;
  initialSetting = answers[number] === -1 ? true : false;

  const [didNotAnswered, setDidNotAnswered] = useState(initialSetting);
  return (
    <Wrapper>
      <Background page="4_1" />
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
          양념 묻은 용기는 재활용이 안 돼요! <br />
          물로 깨끗하게 행군 뒤 재활용할게요!
        </Answer>
        <Answer
          isSelected={selected === 1 ? true : false}
          onClick={() => {
            setSelected(1);
            setDidNotAnswered(false);
          }}
        >
          세척 안하면 재활용이 안되지만… <br />
          오늘은 피곤하고 귀찮네요.. 그냥 버릴게요~!
        </Answer>
        <Answer
          isSelected={selected === 0 ? true : false}
          onClick={() => {
            setSelected(0);
            setDidNotAnswered(false);
          }}
        >
          빠르게 치우는 팁! 비닐에 한 방에 넣어버려요!
        </Answer>
      </VStack>
      <StatusBar section="4" />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const VStack = styled.div`
  position: absolute;
  top: 199px;
  left: 16px;
  right: 16px;

  // 아이폰 5
  @media (max-width: 330px) {
    top: 160px;
  }

  // Galaxy S5, Moto G4
  @media (min-width: 350px) and (max-width: 370px) {
    top: 174px;
  }

  // 아이폰 6,7,8,SE,X,XS 사이즈
  @media (min-width: 365px) and (max-width: 385px) {
    top: 179px;
  }

  // 아이폰 11, plus 사이즈, Pixel ,Pixel2 XL 사이즈
  @media (min-width: 404px) and (max-width: 424px) {
    top: 200px;
  }

  // 아이폰 12 Pro Max
  @media (min-width: 428px) {
    top: 210px;
  }

  z-index: 4;

  display: flex;
  flex-direction: column;
`;
