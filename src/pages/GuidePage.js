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

  // 아이폰 5
  @media (max-width: 330px) {
    top: 31px;
    left: 3px;
  }

  // Galaxy S5, Moto G4
  @media (min-width: 350px) and (max-width: 370px) {
    top: 37px;
    left: 6px;
  }

  // 아이폰 6,7,8,SE,X,XS 사이즈
  @media (min-width: 365px) and (max-width: 385px) {
    top: 40px;
    left: 6px;
  }

  // 아이폰 11, plus 사이즈, Pixel ,Pixel2 XL 사이즈
  @media (min-width: 404px) and (max-width: 424px) {
    top: 47px;
    left: 10px;
  }

  // 아이폰 12 Pro Max
  @media (min-width: 428px) {
    top: 48px;
    left: 10px;
  }
`;

const RightButton = styled.img`
  position: absolute;

  top: 40px;
  right: 8px;

  // 아이폰 5
  @media (max-width: 330px) {
    top: 31px;
    right: 3px;
  }

  // Galaxy S5, Moto G4
  @media (min-width: 350px) and (max-width: 370px) {
    top: 37px;
    right: 6px;
  }

  // 아이폰 6,7,8,SE,X,XS 사이즈
  @media (min-width: 365px) and (max-width: 385px) {
    top: 40px;
    right: 6px;
  }

  // 아이폰 11, plus 사이즈, Pixel ,Pixel2 XL 사이즈
  @media (min-width: 404px) and (max-width: 424px) {
    top: 47px;
    right: 10px;
  }

  // 아이폰 12 Pro Max
  @media (min-width: 428px) {
    top: 48px;
    right: 10px;
  }
`;
