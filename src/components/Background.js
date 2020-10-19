import React from 'react';
import styled from 'styled-components';

import {
  bg_start,
  bg0,
  bg2_2,
  bg2_3,
  bg2_4,
  bg2_5,
  bg3_1,
  bg3_2,
  bg3_3,
  bg4_1,
  bg5_1,
  bg5_2,
  bg6_1,
  bg6_2,
} from '../images';

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
    case '3_1':
      return <Img src={bg3_1} alt="" />;
    case '3_2':
      return <Img src={bg3_2} alt="" />;
    case '3_3':
      return <Img src={bg3_3} alt="" />;
    case '4_1':
      return <Img src={bg4_1} alt="" />;
    case '5_1':
      return <Img src={bg5_1} alt="" />;
    case '5_2':
      return <Img src={bg5_2} alt="" />;
    case '6_1':
      return <Img src={bg6_1} alt="" />;
    case '6_2':
      return <Img src={bg6_2} alt="" />;
    case '6_3':
      return <Img src={bg6_2} alt="" />;
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
