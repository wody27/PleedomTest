import React from 'react';
import styled from 'styled-components';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';
import Box from '../../components/Box';
import StatusBar from '../../components/StatusBar';

export default function Page8_1({ match, location }) {
  return (
    <Wrapper>
      <Background page="8_1" />
      <PageButton pageNumber={match.url} {...{ location }} />
      <Box line="2">
        채소 코너에 왔어요! <br />
        마음에 드는 채소를 골라봤습니다!
      </Box>
      <StatusBar />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
