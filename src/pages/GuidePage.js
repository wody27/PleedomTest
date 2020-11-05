import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { left_button, right_button } from '../images';
import Background from '../components/Background';

export default function GuidePage({ location }) {
  const answers = location.state.answer;
  const mbti = location.state.mbti;

  return (
    <Wrapper>
      <Background page="guide" />
      <Link
        to={{
          pathname: '/',
          state: {
            answer: answers,
            mbti: mbti,
          },
        }}
      >
        <LeftButton src={left_button} direction="left" alt="button" />
      </Link>
      <Link
        to={{
          pathname: '/1',
          state: {
            answer: answers,
            mbti: mbti,
          },
        }}
      >
        <RightButton src={right_button} direction="right" alt="button" />
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const LeftButton = styled.img`
  position: absolute;

  top: 40px;
  left: 8px;

  // 더 작은 사이즈들
  @media (max-height: 568px) {
    top: 31px;
    left: 3px;
  }

  // 아이폰 6,7,8,SE 사이즈
  @media (min-height: 569px) and (max-height: 669px) {
    top: 40px;
    left: 6px;
  }

  // 아이폰 plus 사이즈
  @media (min-height: 670px) and (max-height: 736px) {
    top: 47px;
    left: 10px;
  }

  // 아이폰 X, XS 사이즈
  @media (min-height: 737px) and (max-height: 812px) {
    top: 40px;
    left: 6px;
  }
`;

const RightButton = styled.img`
  position: absolute;

  top: 40px;
  right: 8px;

  // 더 작은 사이즈들
  @media (max-height: 568px) {
    top: 31px;
    right: 3px;
  }

  // 아이폰 6,7,8,SE 사이즈
  @media (min-height: 569px) and (max-height: 669px) {
    top: 40px;
    right: 6px;
  }

  // 아이폰 plus 사이즈
  @media (min-height: 670px) and (max-height: 736px) {
    top: 47px;
    right: 10px;
  }

  // 아이폰 X, XS 사이즈
  @media (min-height: 737px) and (max-height: 812px) {
    top: 40px;
    right: 6px;
  }
`;
