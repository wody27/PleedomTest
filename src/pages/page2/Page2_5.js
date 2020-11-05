import React from 'react';
import styled from 'styled-components';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';
import Box from '../../components/Box';
import StatusBar from '../../components/StatusBar';

export default function Page2_5({ match, location }) {
  return (
    <Wrapper>
      <Background page="2_5" />
      <PageButton pageNumber={match.url} {...{ location }} />
      <Box line="1">배고픈데 우선 밥부터 먹어 볼까요?</Box>
      <StatusBar />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
