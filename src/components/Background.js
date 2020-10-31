import React from 'react';
import styled from 'styled-components';

import {
  bg_start,
  bg_guide,
  bg1_1,
  bg1_2,
  bg1_3,
  bg2_1,
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
  bg5_3,
  bg6_1,
  bg6_2,
  bg6_3,
  bg7_1,
  bg7_2,
  bg7_3,
  bg8_1,
  bg8_2,
  bg9_1,
  bg10_1,
  bg10_2,
  bg10_3,
  bg11_1,
  bg11_2,
  bg11_3,
  bg12_1,
  img_card_size,
  ENFJ_halfSeal_high,
} from '../images';

export default function Background({ page }) {
  switch (page) {
    case 'start':
      return <Img src={bg_start} alt="" />;
    case 'guide':
      return <Img src={bg_guide} alt="" />;
    case '1_1':
      return <Img src={bg1_1} alt="" />;
    case '1_2':
      return <Img src={bg1_2} alt="" />;
    case '1_3':
      return <Img src={bg1_3} alt="" />;
    case '2_1':
      return <Img src={bg2_1} alt="" />;
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
    case '5_3':
      return <Img src={bg5_3} alt="" />;
    case '6_1':
      return <Img src={bg6_1} alt="" />;
    case '6_2':
      return <Img src={bg6_2} alt="" />;
    case '6_3':
      return <Img src={bg6_3} alt="" />;
    case '7_1':
      return <Img src={bg7_1} alt="" />;
    case '7_2':
      return <Img src={bg7_2} alt="" />;
    case '7_3':
      return <Img src={bg7_3} alt="" />;
    case '8_1':
      return <Img src={bg8_1} alt="" />;
    case '8_2':
      return <Img src={bg8_2} alt="" />;
    case '9_1':
      return <Img src={bg9_1} alt="" />;
    case '10_1':
      return <Img src={bg10_1} alt="" />;
    case '10_2':
      return <Img src={bg10_2} alt="" />;
    case '10_3':
      return <Img src={bg10_3} alt="" />;
    case '11_1':
      return <Img src={bg11_1} alt="" />;
    case '11_2':
      return <Img src={bg11_2} alt="" />;
    case '11_3':
      return <Img src={bg11_3} alt="" />;
    case '12_1':
      return <Img src={bg12_1} alt="" />;
    case 'ENFJ_high':
      return <Img src={ENFJ_halfSeal_high} alt="" />;
    default:
      return <Img src="bg_start" alt="" />;
  }
}

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  // height: 100%;
  z-index: 0;
`;
