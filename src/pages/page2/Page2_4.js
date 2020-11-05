import React from 'react';
import styled from 'styled-components';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';
import Box from '../../components/Box';
import StatusBar from '../../components/StatusBar';

export default function Page2_4({ match, location }) {
  return (
    <Wrapper>
      <Background page="2_4" />
      <PageButton pageNumber={match.url} {...{ location }} />
      <Box line="2">
        음.. 나중에 알아보고 <br />
        일단 vlog를 시작해볼게요!
      </Box>
      <StatusBar />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
