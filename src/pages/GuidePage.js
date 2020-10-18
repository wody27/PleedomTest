import React from 'react';
import styled from 'styled-components';
import { bg_guide, left_button, right_button } from '../images';

export default function GuidePage() {
  return (
    <Wrapper>
      <Img src={bg_guide} alt="background" />
      <LeftButton src={left_button} alt="left" />
      <RightButton src={right_button} alt="right" />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 0;
`;

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
