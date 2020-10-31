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
  return (
    <Wrapper onClick={sendAPI}>
      <Img src={btn_kakaoshare} alt="kakao-share-icon" />
    </Wrapper>
  );
};

export default KakaoShareButton;

const Wrapper = styled.div`
  position: absolute;
  top: 1546px;
  left: 137px;
`;

const Img = styled.img`
  width: 29px;
  height: 29px;
`;
