import React from 'react';
import styled from 'styled-components';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';

export default function Page2_1({ match }) {
  return (
    <Wrapper>
      <Background page="2_1" />
      <PageButton pageNumber={match.url} />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
