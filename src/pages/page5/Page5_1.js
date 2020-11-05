import React from 'react';
import styled from 'styled-components';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';
import Box from '../../components/Box';
import StatusBar from '../../components/StatusBar';

export default function Page5_1({ match, location }) {
  return (
    <Wrapper>
      <Background page="5_1" />
      <PageButton pageNumber={match.url} {...{ location }} />
      <Box line="2">
        분리배출 하러 나왔어요! <br />
        시작해볼까요?
      </Box>
      <StatusBar section="5" />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
