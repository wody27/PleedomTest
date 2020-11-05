import React from 'react';
import styled from 'styled-components';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';
import Box from '../../components/Box';
import StatusBar from '../../components/StatusBar';

export default function Page1_3({ match, location }) {
  return (
    <Wrapper>
      <Background page="1_3" />
      <PageButton pageNumber={match.url} {...{ location }} />
      <Box line="1">슬슬 일어나볼까요?</Box>
      <StatusBar section="1" />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
