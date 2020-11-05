import React from 'react';
import styled from 'styled-components';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';
import Box from '../../components/Box';
import StatusBar from '../../components/StatusBar';

export default function Page11_3({ match, location }) {
  return (
    <Wrapper>
      <Background page="11_3" />
      <PageButton pageNumber={match.url} {...{ location }} />
      <Box line="1">어? 무슨 소리가 들리는데요?!</Box>
      <StatusBar section="11" />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
