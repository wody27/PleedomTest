import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { bg2_2, left_button, right_button } from '../../images';

export default function Page2_2() {
  return (
    <Wrapper>
      <Img src={bg2_2} alt="background" />
      <Link to="/guide">
        <LeftButton src={left_button} alt="left" />
      </Link>
      <Link to="/">
        <RightButton src={right_button} alt="right" />
      </Link>
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
