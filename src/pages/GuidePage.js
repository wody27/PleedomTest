import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

import { left_button, right_button } from '../images';
import Background from '../components/Background';

export default function GuidePage({ location }) {
  const query = queryString.parse(location.search);

  return (
    <Wrapper>
      <Background page="guide" />
      <Link to={`/?score=${query.score}`}>
        <LeftButton src={left_button} alt="left" />
      </Link>
      <Link to={`/1?score=${query.score}`}>
        <RightButton src={right_button} alt="right" />
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

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
