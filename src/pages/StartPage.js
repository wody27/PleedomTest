import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { bg_start } from '../images';

export default function StartPage() {
  return (
    <Wrapper>
      <Link to="/guide">
        <NextButton>시작하기</NextButton>
      </Link>
      <Img src={bg_start} alt="background" />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const NextButton = styled.div`
  position: absolute;
  top: 497px;
  left: 66px;

  width: 50%;

  z-index: 1;

  width: 243px;
  height: 48px;

  border-radius: 6px;
  border: solid 0 #ffffff;
  background-color: #3acce1;

  text-align: center;
  line-height: 48px;

  color: white;
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 0;
`;
