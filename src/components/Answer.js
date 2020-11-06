import React from 'react';
import styled from 'styled-components';

export default function Answer({ isSelected, onClick, children }) {
  return (
    <Wrapper {...{ isSelected }} {...{ onClick }}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 14px 21px;
  margin-bottom: 12px;
  border-radius: 6px;
  box-shadow: 0 4px 8px 0 rgba(69, 111, 128, 0.08);

  ${({ isSelected }) =>
    isSelected
      ? 'background-color: #3acce1; border: solid 1px #3acce1;  color: #ffffff;'
      : 'background-color:rgba(255, 255, 255, 0.72); border: solid 1px #ffffff; color: #38474b;'};

  font-weight: normal;
  font-stretch: normal;
  font-style: normal;

  // 아이폰 5
  @media (max-width: 330px) {
    font-size: 12px !important;
  }

  // Galaxy S5, Moto G4
  @media (min-width: 350px) and (max-width: 370px) {
    font-size: 14px !important;
  }

  // 아이폰 6,7,8,SE,X,XS 사이즈
  @media (min-width: 365px) and (max-width: 385px) {
    font-size: 15px !important;
  }

  // 아이폰 11, plus 사이즈, Pixel ,Pixel2 XL 사이즈
  @media (min-width: 404px) and (max-width: 424px) {
    font-size: 14px !important;
  }

  // 아이폰 12 Pro Max
  @media (min-width: 428px) {
    font-size: 16px !important;
  }

  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
`;
