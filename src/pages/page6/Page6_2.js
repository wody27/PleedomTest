import React from 'react';
import styled from 'styled-components';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';

export default function Page6_2({ match, location }) {
  return (
    <Wrapper>
      <Background page="6_2" />
      <PageButton pageNumber={match.url} {...{ location }} />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
