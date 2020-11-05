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
    ${({ line }) => (line === '7' ? 'top: 360px;' : 'top: 450px;')}
  }

  // 아이폰 6,7,8,SE 사이즈
  @media (min-height: 569px) and (max-height: 668px) {
    ${({ line }) => (line === '7' ? 'top: 440px;' : 'top: 530px;')}
  }

  // 아이폰 plus 사이즈
  @media (min-height: 669px) and (max-height: 736px) {
    ${({ line }) => (line === '7' ? 'top: 500px;' : 'top: 590px;')}
  }

  // 아이폰 X, XS 사이즈
  @media (min-height: 737px) and (max-height: 812px) {
    ${({ line }) => (line === '7' ? 'top:550px;' : 'top: 649px;')}
  }

  margin: 0 30px;
  ${({ line }) => (line === '1' ? 'padding: 22px 0;' : 'padding: 10px 0;')}

  z-index: 6;

  background-color: rgba(255, 255, 255, 0.72);

  text-align: center;
  color: #4e5e62;
`;
