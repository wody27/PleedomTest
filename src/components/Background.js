import React from 'react';
import styled from 'styled-components';

import { bg_start, bg0, bg2_2, bg2_3, bg2_4, bg2_5 } from '../images';

export default function Background({ page }) {
  switch (page) {
    case 'start':
      return <Img src={bg_start} alt="" />;
    case 'guide':
      return <Img src={bg0} alt="" />;
    case '1_1':
      return <Img src={bg2_2} alt="" />;
    case '1_2':
      return <Img src={bg2_2} alt="" />;
    case '1_3':
      return <Img src={bg2_2} alt="" />;
    case '2_1':
      return <Img src={bg2_2} alt="" />;
    case '2_2':
      return <Img src={bg2_2} alt="" />;
    case '2_3':
      return <Img src={bg2_3} alt="" />;
    case '2_4':
      return <Img src={bg2_4} alt="" />;
    case '2_5':
      return <Img src={bg2_5} alt="" />;
    default:
      return <Img src="bg_start" alt="" />;
  }
}

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 0;
`;
