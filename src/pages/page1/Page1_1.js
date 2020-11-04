import React from 'react';
import styled from 'styled-components';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';
import { statusbar1 } from '../../images';

export default function Page1_1({ match, location }) {
  return (
    <Wrapper>
      <Background page="1_1" />
      <PageButton pageNumber={match.url} {...{ location }} />
      <Box>나의 첫 브이로그 시작...</Box>
      <StatusBar src={statusbar1} alt="bar" />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const Box = styled.div`
  position: absolute;
  top: 450px;
  left: 0;
  right: 0;

  margin: 0 30px;
  padding: 22px 0;
  z-index: 6;

  background-color: rgba(255, 255, 255, 0.72);

  text-align: center;
  color: #4e5e62;
  // width: px;
  // height: 28px;
  // object-fit: contain;
  // font-family: S-CoreDream-3;
  // font-size: 20px;
  // font-weight: 300;
  // font-stretch: normal;
  // font-style: normal;
  // line-height: 1.2;
  // letter-spacing: normal;
  // text-align: center;
`;

const StatusBar = styled.img`
  position: absolute;
  top: 530px;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 6;
`;
