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
  top: 1546px;
  left: 137px;

  width: 40px;
  height: 40px;
`;
