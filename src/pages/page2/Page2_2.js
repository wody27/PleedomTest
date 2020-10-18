import React from 'react';
import styled from 'styled-components';

import { bg2_2 } from '../../images';
import PageButton from '../../components/PageButton';

export default function Page2_2({ match }) {
  return (
    <Wrapper>
      <Img src={bg2_2} alt="background" />
      <PageButton pageNumber={match.url} />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 0;
`;

const LeftButton = styled.img`
  position: absolute;
  top: 8px;
  left: 4px;
`;

const RightButton = styled.img`
  position: absolute;
  top: 8px;
  right: 4px;
`;
