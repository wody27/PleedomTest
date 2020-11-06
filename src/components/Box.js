import React from 'react';
import styled from 'styled-components';

export default function Box({ line, children }) {
  return <Wrapper {...{ line }}>{children}</Wrapper>;
}

const Wrapper = styled.div`
  position: absolute;
  top: 649px;
  left: 0;
  right: 0;

  // 아이폰 5
  @media (max-width: 330px) {
    ${({ line }) => (line === '7' ? 'top: 270px;' : 'top: 330px;')}
    font-size: 17px;
  }

  // Galaxy S5, Moto G4
  @media (min-width: 350px) and (max-width: 370px) {
    ${({ line }) => (line === '7' ? 'top: 340px;' : 'top: 440px;')}
    font-size: 20px;
  }

  // 아이폰 6,7,8,SE,X,XS 사이즈
  @media (min-width: 365px) and (max-width: 385px) {
    ${({ line }) => (line === '7' ? 'top: 310px;' : 'top: 410px;')}
    font-size: 20px;
  }

  // 아이폰 11, plus 사이즈, Pixel ,Pixel2 XL 사이즈
  @media (min-width: 404px) and (max-width: 424px) {
    ${({ line }) => (line === '7' ? 'top: 390px;' : 'top: 510px;')}
    font-size: 21px;
  }

  // 아이폰 12 Pro Max
  @media (min-width: 428px) {
    ${({ line }) => (line === '7' ? 'top: 540px;' : 'top: 620px;')}
  }

  margin: 0 30px;
  ${({ line }) => (line === '1' ? 'padding: 22px 0;' : 'padding: 10px 0;')}

  z-index: 6;

  background-color: rgba(255, 255, 255, 0.72);

  font-family: S-CoreDream-3;
  @font-face {
    font-family: S-CoreDream-3;
    src: local(S-CoreDream-3Light), url(/path/to/S-CoreDream-3Light.woff2) format('woff2'),
      url(/path/to/S-CoreDream-3Light.woff) format('woff'), url(/path/to/S-CoreDream-3Light.ttf) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
  }

  font-weight: 345;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  color: #4e5e62;
`;
