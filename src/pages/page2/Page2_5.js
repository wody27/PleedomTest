import React from 'react';
import styled from 'styled-components';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';

export default function Page2_5({ match, location }) {
  return (
    <Wrapper>
      <Background page="2_5" />
      <PageButton pageNumber={match.url} {...{ location }} />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
