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
  top: 8px;
  left: 4px;
`;

const RightButton = styled.img`
  position: absolute;
  top: 8px;
  right: 4px;
`;
