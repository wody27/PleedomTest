import React from 'react';
import styled from 'styled-components';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';

export default function Page3_3({ match, location }) {
  return (
    <Wrapper>
      <Background page="3_3" />
      <PageButton pageNumber={match.url} {...{ location }} />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
