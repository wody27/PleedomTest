import React from 'react';
import styled from 'styled-components';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';
import Box from '../../components/Box';
import StatusBar from '../../components/StatusBar';

export default function Page3_1({ match, location }) {
  return (
    <Wrapper>
      <Background page="3_1" />
      <PageButton pageNumber={match.url} {...{ location }} />
      <Box line="1">배달 음식을 시켜볼게요!</Box>
      <StatusBar />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
