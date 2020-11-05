import React from 'react';
import styled from 'styled-components';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';
import Box from '../../components/Box';
import StatusBar from '../../components/StatusBar';

export default function Page1_1({ match, location }) {
  return (
    <Wrapper>
      <Background page="1_1" />
      <PageButton pageNumber={match.url} {...{ location }} />
      <Box line="1">나의 첫 브이로그 시작...</Box>
      <StatusBar />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
