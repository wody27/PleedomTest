import React from 'react';
import styled from 'styled-components';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';
import Box from '../../components/Box';
import StatusBar from '../../components/StatusBar';

export default function Page1_2({ match, location }) {
  return (
    <Wrapper>
      <Background page="1_2" />
      <PageButton pageNumber={match.url} {...{ location }} />
      <Box line="2">
        시원한 바람... 따뜻한 햇볕... <br />
        늘어지기 좋은 주말이네요...
      </Box>
      <StatusBar />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
