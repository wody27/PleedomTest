import React from 'react';
import styled from 'styled-components';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';
import Box from '../../components/Box';
import StatusBar from '../../components/StatusBar';

export default function Page6_1({ match, location }) {
  return (
    <Wrapper>
      <Background page="6_1" />
      <PageButton pageNumber={match.url} {...{ location }} />
      <Box line="2">
        분리배출을 열심히 했더니 <br />
        목이 마르네요!
      </Box>
      <StatusBar section="6" />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
