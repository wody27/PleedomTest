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

  // 아이폰 5
  @media (max-width: 330px) {
    top: 440px;
  }

  // Galaxy S5, Moto G4
  @media (min-width: 350px) and (max-width: 370px) {
    top: 540px;
  }

  // 아이폰 6,7,8,SE,X,XS 사이즈
  @media (min-width: 365px) and (max-width: 385px) {
    top: 510px;
  }

  // 아이폰 11, plus 사이즈, Pixel ,Pixel2 XL 사이즈
  @media (min-width: 404px) and (max-width: 424px) {
    top: 630px;
  }

  // 아이폰 12 Pro Max
  @media (min-width: 428px) {
    top: 720px;
  }

  width: 100%;
  z-index: 6;
`;
