import React from 'react';
import styled from 'styled-components';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';
import Box from '../../components/Box';
import StatusBar from '../../components/StatusBar';

export default function Page3_3({ match, location }) {
  return (
    <Wrapper>
      <Background page="3_3" />
      <PageButton pageNumber={match.url} {...{ location }} />
      <Box line="1">맛있게 먹는 중∙∙∙</Box>
      <StatusBar />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
