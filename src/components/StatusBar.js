import React from 'react';
import styled from 'styled-components';

import { statusbar1 } from '../images';

export default function StatusBar() {
  return <Wrapper src={statusbar1} />;
}

const Wrapper = styled.img`
  position: absolute;
  left: 0;
  right: 0;

  // 더 작은 사이즈들
  @media (max-height: 568px) {
    top: 530px;
  }

  // 아이폰 6,7,8,SE 사이즈
  @media (min-height: 569px) and (max-height: 669px) {
    top: 610px;
  }

  // 아이폰 plus 사이즈
  @media (min-height: 670px) and (max-height: 736px) {
    top: 670px;
  }

  // 아이폰 X, XS 사이즈
  @media (min-height: 737px) {
    top: 753px;
  }

  width: 100%;
  z-index: 6;
`;
