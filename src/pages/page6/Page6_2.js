import React from 'react';
import styled from 'styled-components';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';
import Box from '../../components/Box';
import StatusBar from '../../components/StatusBar';

export default function Page6_2({ match, location }) {
  return (
    <Wrapper>
      <Background page="6_2" />
      <PageButton pageNumber={match.url} {...{ location }} />
      <Box line="2">
        근처 카페에 왔어요! <br />
        음료 한 잔 마셔볼까요?
      </Box>
      <StatusBar />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
