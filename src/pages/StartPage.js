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

  // 더 작은 사이즈들
  @media (min-width: 310px) and (max-width: 330px) {
    top: 400px;
  }

  // Galaxy S5
  @media (min-width: 350px) and (max-width: 370px) {
    top: 450px;
  }

  // 아이폰 6,7,8,SE,X,XS 사이즈
  @media (min-width: 365px) and (max-width: 385px) {
    top: 470px;
  }

  // 아이폰 plus 사이즈
  @media (min-width: 404px) and (max-width: 424px) {
    top: 520px;
  }

  // 아이폰 12 Pro Max
  @media (min-width: 428px) {
    top: 550px;
  }

  left: 0px;
  right: 0px;
  margin: 0 35px;
  z-index: 1;

  border-radius: 6px;
  border: solid 0 #ffffff;
  background-color: #3acce1;

  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  line-height: 48px;
`;
