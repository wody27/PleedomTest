import React from 'react';
import styled from 'styled-components';

import { btn_kakaoshare } from '../images';

const KakaoShareButton = () => {
  const sendAPI = () => {
    if (window.Kakao) {
      const Kakao = window.Kakao;

      if (!Kakao.isInitialized()) {
        Kakao.init(`${process.env.REACT_APP_KEY}`);
      }
      Kakao.Link.sendCustom({
        templateId: 39126,
      });
    }
  };
  return <Img src={btn_kakaoshare} onClick={sendAPI} alt="kakao-share-icon" />;
};

export default KakaoShareButton;

const Img = styled.img`
  position: absolute;
  top: 1545px;
  left: 140px;

  // 아이폰 5
  @media (max-width: 330px) {
    top: 1345px;
    left: 125px;

    width: 30px;
    height: 30px;
  }

  // Galaxy S5, Moto G4
  @media (min-width: 350px) and (max-width: 370px) {
    top: 1545px;
    left: 140px;
  }

  // 아이폰 6,7,8,SE,X,XS 사이즈
  @media (min-width: 365px) and (max-width: 385px) {
    top: 1515px;
    left: 140px;
  }

  // 아이폰 11, plus 사이즈, Pixel ,Pixel2 XL 사이즈
  @media (min-width: 404px) and (max-width: 424px) {
    top: 1575px;
    left: 160px;
  }

  // 아이폰 12 Pro Max
  @media (min-width: 428px) {
    top: 1615px;
    left: 160px;
  }

  @media (min-width: 350px) and (max-width: 360px) {
    left: 130px;
  }
  width: 40px;
  height: 40px;
`;
