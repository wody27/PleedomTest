import React from 'react';
import styled from 'styled-components';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';
import Box from '../../components/Box';
import StatusBar from '../../components/StatusBar';

export default function Page7_1({ match, location }) {
  return (
    <Wrapper>
      <Background page="7_1" />
      <PageButton pageNumber={match.url} {...{ location }} />
      <Box line="2">
        나온 김에 마트에서 <br />
        장보고 들어가야겠어요!
      </Box>
      <StatusBar />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
