import React from 'react';
import styled from 'styled-components';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';
import Box from '../../components/Box';
import StatusBar from '../../components/StatusBar';

export default function Page10_1({ match, location }) {
  return (
    <Wrapper>
      <Background page="10_1" />
      <PageButton pageNumber={match.url} {...{ location }} />
      <Box line="2">
        휴 집에 도착했어요. <br />
        TV 보면서 저녁 먹어야겠어요.
      </Box>
      <StatusBar section="10" />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
