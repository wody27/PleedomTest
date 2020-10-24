import React from 'react';
import styled from 'styled-components';

import { kakaoButton } from '../images';

const KakaoShareButton = () => {
  const sendAPI = () => {
    if (window.Kakao) {
      const Kakao = window.Kakao;

      console.log(`${process.env.REACT_APP_KEY}`);

      if (!Kakao.isInitialized()) {
        Kakao.init(`${process.env.REACT_APP_KEY}`);
        // CONFIG.KAKAO_KEY
        //${process.env.REACT_APP_KEY}
      }
      Kakao.Link.sendCustom({
        templateId: 39126,
      });
    }
  };
  return (
    <Wrapper onClick={sendAPI}>
      <Img src={kakaoButton} alt="kakao-share-icon" />
    </Wrapper>
  );
};

export default KakaoShareButton;

const Wrapper = styled.div`
  position: absolute;
  top: 1589px;
  left: 137px;
`;

const Img = styled.img`
  width: 29px;
  height: 29px;
`;
