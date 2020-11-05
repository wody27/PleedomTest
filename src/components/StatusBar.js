import React from 'react';
import styled from 'styled-components';

import {
  statusbar1,
  statusbar2,
  statusbar3,
  statusbar4,
  statusbar5,
  statusbar6,
  statusbar7,
  statusbar8,
  statusbar9,
  statusbar10,
  statusbar11,
  statusbar12,
} from '../images';

export default function StatusBar({ section }) {
  switch (section) {
    case '1':
      return <Wrapper src={statusbar1} />;
    case '2':
      return <Wrapper src={statusbar2} />;
    case '3':
      return <Wrapper src={statusbar3} />;
    case '4':
      return <Wrapper src={statusbar4} />;
    case '5':
      return <Wrapper src={statusbar5} />;
    case '6':
      return <Wrapper src={statusbar6} />;
    case '7':
      return <Wrapper src={statusbar7} />;
    case '8':
      return <Wrapper src={statusbar8} />;
    case '9':
      return <Wrapper src={statusbar9} />;
    case '10':
      return <Wrapper src={statusbar10} />;
    case '11':
      return <Wrapper src={statusbar11} />;
    case '12':
      return <Wrapper src={statusbar12} />;
    default:
      return <Wrapper src={statusbar1} />;
  }
}

const Wrapper = styled.img`
  position: absolute;
  left: 0;
  right: 0;

  // 더 작은 사이즈들
  @media (max-height: 568px) {
    top: 500px;
  }

  // 아이폰 6,7,8,SE 사이즈
  @media (min-height: 569px) and (max-height: 669px) {
    top: 570px;
  }

  // 아이폰 plus 사이즈
  @media (min-height: 670px) and (max-height: 736px) {
    top: 640px;
  }

  // 아이폰 X, XS 사이즈
  @media (min-height: 737px) {
    top: 723px;
  }

  width: 100%;
  z-index: 6;
`;
