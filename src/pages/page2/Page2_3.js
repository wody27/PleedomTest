import React, { useState } from 'react';
import styled from 'styled-components';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';

export default function Page2_3({ match }) {
  const [selected, setSelected] = useState(-1);

  const select = (event) => {
    setSelected(1);
  };
  return (
    <Wrapper>
      <Background page="2_3" />
      <PageButton pageNumber={match.url} />
      <Answer isSelected={selected === 1 ? true : false} onClick={select}>
        엄청 크고 매끄러운 촉감이 느껴져..!
        <br />
        인터넷에서 봤던 타조알의 특징과 비슷하군 <br />
        혹시 타조 알,,,?
      </Answer>
      {/* <Answer isSelected={selected === 1 ? true : false} onClick={select}>
        엄청 크고 매끄러운 촉감이 느껴져..!
        <br />
        인터넷에서 봤던 타조알의 특징과 비슷하군 <br />
        혹시 타조 알,,,?
      </Answer> */}
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Answer = styled.div`
  position: absolute;
  top: 179px;
  left: 16px;
  right: 16px;

  z-index: 4;

  padding: 14px 21px;

  border-radius: 6px;
  box-shadow: 0 4px 8px 0 rgba(69, 111, 128, 0.08);

  ${({ isSelected }) =>
    isSelected
      ? 'background-color: #3acce1; border: solid 3px #3acce1;  color: #ffffff;'
      : 'background-color:rgba(255, 255, 255, 0.72); border: solid 1px #ffffff; color: #38474b;'};

  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  font-size: 16px;
  @media screen and (max-width: 320px) {
    font-size: 14px;
  }

  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
`;
