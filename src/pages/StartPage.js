import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Background from '../components/Background';

export default function StartPage() {
  const answers = [-1, -1, -1, -1, -1];
  const mbti = ['a', 'a', 'a', 'a'];
  return (
    <Wrapper>
      <Link
        to={{
          pathname: '/0',
          state: {
            answer: answers,
            mbti: mbti,
          },
        }}
      >
        <NextButton>시작하기</NextButton>
      </Link>
      <Background page="start" />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const NextButton = styled.div`
  position: absolute;
  top: 497px;
  left: 66px;
  right: 66px;

  z-index: 1;

  border-radius: 6px;
  border: solid 0 #ffffff;
  background-color: #3acce1;

  text-align: center;
  line-height: 48px;

  color: white;
`;
