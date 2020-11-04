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
  ENFJ_halfSeal_high,
  ENFJ_halfSeal_middle,
  ENFJ_halfSeal_low,
  ENFP_otter_high,
  ENFP_otter_middle,
  ENFP_otter_low,
  ENTJ_bird_high,
  ENTJ_bird_middle,
  ENTJ_bird_low,
  ENTP_seal_high,
  ENTP_seal_middle,
  ENTP_seal_low,
  ESFJ_penguin_high,
  ESFJ_penguin_middle,
  ESFJ_penguin_low,
  ESFP_seaDuck_middle,
  ESFP_seaDuck_low,
  ESTJ_seaElephant_high,
  ESTJ_seaElephant_middle,
  ESTJ_seaElephant_low,
  ESTP_seaLeopard_high,
  ESTP_seaLeopard_middle,
  ESTP_seaLeopard_low,
  INFJ_dolphin_high,
  INFJ_dolphin_middle,
  INFJ_dolphin_low,
  INFP_whaleShark_high,
  INFP_whaleShark_middle,
  INFP_whaleShark_low,
  INTJ_northBear_high,
  INTJ_northBear_middle,
  INTJ_northBear_low,
  INTP_crab_high,
  INTP_crab_middle,
  INTP_crab_low,
  ISFJ_seaOtter_high,
  ISFJ_seaOtter_middle,
  ISFJ_seaOtter_low,
  ISFP_turtle_high,
  ISFP_turtle_middle,
  ISFP_turtle_low,
  ISTJ_killerWhale_high,
  ISTJ_killerWhale_middle,
  ISTJ_killerWhale_low,
  ISTP_snipe_high,
  ISTP_snipe_middle,
  ISTP_snipe_low,
  ESFP_seaDuck_high,
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
    case 'ENFJ_middle':
      return <Img src={ENFJ_halfSeal_middle} alt="" />;
    case 'ENFJ_low':
      return <Img src={ENFJ_halfSeal_low} alt="" />;

    case 'ENFP_high':
      return <Img src={ENFP_otter_high} alt="" />;
    case 'ENFP_middle':
      return <Img src={ENFP_otter_middle} alt="" />;
    case 'ENFP_low':
      return <Img src={ENFP_otter_low} alt="" />;

    case 'ENTJ_high':
      return <Img src={ENTJ_bird_high} alt="" />;
    case 'ENTJ_middle':
      return <Img src={ENTJ_bird_middle} alt="" />;
    case 'ENTJ_low':
      return <Img src={ENTJ_bird_low} alt="" />;

    case 'ENTP_high':
      return <Img src={ENTP_seal_high} alt="" />;
    case 'ENTP_middle':
      return <Img src={ENTP_seal_middle} alt="" />;
    case 'ENTP_low':
      return <Img src={ENTP_seal_low} alt="" />;

    case 'ESFJ_high':
      return <Img src={ESFJ_penguin_high} alt="" />;
    case 'ESFJ_middle':
      return <Img src={ESFJ_penguin_middle} alt="" />;
    case 'ESFJ_low':
      return <Img src={ESFJ_penguin_low} alt="" />;

    case 'ESFP_high':
      return <Img src={ESFP_seaDuck_high} alt="" />;
    case 'ESFP_middle':
      return <Img src={ESFP_seaDuck_middle} alt="" />;
    case 'ESFP_low':
      return <Img src={ESFP_seaDuck_low} alt="" />;

    case 'ESTJ_high':
      return <Img src={ESTJ_seaElephant_high} alt="" />;
    case 'ESTJ_middle':
      return <Img src={ESTJ_seaElephant_middle} alt="" />;
    case 'ESTJ_low':
      return <Img src={ESTJ_seaElephant_low} alt="" />;

    case 'ESTP_high':
      return <Img src={ESTP_seaLeopard_high} alt="" />;
    case 'ESTP_middle':
      return <Img src={ESTP_seaLeopard_middle} alt="" />;
    case 'ESTP_low':
      return <Img src={ESTP_seaLeopard_low} alt="" />;

    case 'INFJ_high':
      return <Img src={INFJ_dolphin_high} alt="" />;
    case 'INFJ_middle':
      return <Img src={INFJ_dolphin_middle} alt="" />;
    case 'INFJ_low':
      return <Img src={INFJ_dolphin_low} alt="" />;

    case 'INFP_high':
      return <Img src={INFP_whaleShark_high} alt="" />;
    case 'INFP_middle':
      return <Img src={INFP_whaleShark_middle} alt="" />;
    case 'INFP_low':
      return <Img src={INFP_whaleShark_low} alt="" />;

    case 'INTJ_high':
      return <Img src={INTJ_northBear_high} alt="" />;
    case 'INTJ_middle':
      return <Img src={INTJ_northBear_middle} alt="" />;
    case 'INTJ_low':
      return <Img src={INTJ_northBear_low} alt="" />;

    case 'INTP_high':
      return <Img src={INTP_crab_high} alt="" />;
    case 'INTP_middle':
      return <Img src={INTP_crab_middle} alt="" />;
    case 'INTP_low':
      return <Img src={INTP_crab_low} alt="" />;

    case 'ISFJ_high':
      return <Img src={ISFJ_seaOtter_high} alt="" />;
    case 'ISFJ_middle':
      return <Img src={ISFJ_seaOtter_middle} alt="" />;
    case 'ISFJ_low':
      return <Img src={ISFJ_seaOtter_low} alt="" />;

    case 'ISFP_high':
      return <Img src={ISFP_turtle_high} alt="" />;
    case 'ISFP_middle':
      return <Img src={ISFP_turtle_middle} alt="" />;
    case 'ISFP_low':
      return <Img src={ISFP_turtle_low} alt="" />;

    case 'ISTJ_high':
      return <Img src={ISTJ_killerWhale_high} alt="" />;
    case 'ISTJ_middle':
      return <Img src={ISTJ_killerWhale_middle} alt="" />;
    case 'ISTJ_low':
      return <Img src={ISTJ_killerWhale_low} alt="" />;

    case 'ISTP_high':
      return <Img src={ISTP_snipe_high} alt="" />;
    case 'ISTP_middle':
      return <Img src={ISTP_snipe_middle} alt="" />;
    case 'ISTP_low':
      return <Img src={ISTP_snipe_low} alt="" />;

    default:
      return <Img src="bg_start" alt="" />;
  }
}

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;
