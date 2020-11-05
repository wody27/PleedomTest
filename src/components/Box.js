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

  // 더 작은 사이즈들
  @media (max-height: 568px) {
    ${({ line }) => (line === '7' ? 'top: 330px;' : 'top: 400px;')}
    font-size: 17px;
  }

  // 아이폰 6,7,8,SE 사이즈
  @media (min-height: 569px) and (max-height: 668px) {
    ${({ line }) => (line === '7' ? 'top: 370px;' : 'top: 470px;')}
    font-size: 20px;
  }

  // 아이폰 plus 사이즈
  @media (min-height: 669px) and (max-height: 736px) {
    ${({ line }) => (line === '7' ? 'top: 430px;' : 'top: 530px;')}
    font-size: 21px;
  }

  // 아이폰 X, XS 사이즈
  @media (min-height: 737px) {
    ${({ line }) => (line === '7' ? 'top:500px;' : 'top: 619px;')}
    font-size: 20px;
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
