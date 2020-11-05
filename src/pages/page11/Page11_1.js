import React from 'react';
import styled from 'styled-components';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';
import Box from '../../components/Box';
import StatusBar from '../../components/StatusBar';

export default function Page11_1({ match, location }) {
  return (
    <Wrapper>
      <Background page="11_1" />
      <PageButton pageNumber={match.url} {...{ location }} />
      <Box line="2">
        흠.. 환경 보호를 위해 제가 할 수 <br />
        있는 일을 찾아봐야겠어요!
      </Box>
      <StatusBar />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
