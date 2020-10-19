import React from 'react';
import styled from 'styled-components';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';

export default function Page1_1({ match }) {
  return (
    <Wrapper>
      <Background page="1_1" />
      <PageButton pageNumber={match.url} selectedScore={0} />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
