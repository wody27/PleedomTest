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

  // 더 작은 사이즈들
  @media (max-height: 568px) {
    font-size: 12px !important;
  }

  // 아이폰 6,7,8,SE 사이즈
  @media (min-height: 569px) and (max-height: 668px) {
    font-size: 15px !important;
  }

  // 아이폰 plus 사이즈
  @media (min-height: 669px) and (max-height: 736px) {
    font-size: 14px !important;
  }

  // 아이폰 X, XS 사이즈
  @media (min-height: 737px) and (max-height: 812px) {
    font-size: 15px !important;
  }

  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
`;
