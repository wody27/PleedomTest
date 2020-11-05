import React from 'react';
import styled from 'styled-components';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';
import Box from '../../components/Box';
import StatusBar from '../../components/StatusBar';

export default function Page2_2({ match, location }) {
  return (
    <Wrapper>
      <Background page="2_2" />
      <PageButton pageNumber={match.url} {...{ location }} />
      <Box line="1">신기한 알이 놓여 있네요. </Box>
      <StatusBar />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
