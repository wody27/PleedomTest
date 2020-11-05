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

  // 더 작은 사이즈들
  @media (max-height: 568px) {
    top: 1375px;
    left: 125px;

    width: 30px;
    height: 30px;
  }

  // 아이폰 6,7,8,SE 사이즈
  @media (min-height: 569px) and (max-height: 668px) {
    top: 1545px;
    left: 140px;
  }

  // 아이폰 plus 사이즈
  @media (min-height: 669px) and (max-height: 736px) {
    top: 1585px;
    left: 160px;
  }

  // 아이폰 X, XS 사이즈
  @media (min-height: 737px) and (max-height: 812px) {
    top: 1545px;
    left: 140px;
  }

  @media (max-width: 360px) {
    left: 130px;
  }
  width: 40px;
  height: 40px;
`;
