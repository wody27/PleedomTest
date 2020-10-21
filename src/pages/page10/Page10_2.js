import React from 'react';
import styled from 'styled-components';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';

export default function Page10_2({ match, location }) {
  return (
    <Wrapper>
      <Background page="10_2" />
      <PageButton pageNumber={match.url} {...{ location }} />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
