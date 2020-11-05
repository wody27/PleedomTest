import React from 'react';
import styled from 'styled-components';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';
import Box from '../../components/Box';
import StatusBar from '../../components/StatusBar';

export default function Page7_2({ match, location }) {
  return (
    <Wrapper>
      <Background page="7_2" />
      <PageButton pageNumber={match.url} {...{ location }} />
      <Box line="2">
        오늘 저녁 메뉴는 떡볶이~~ <br />
        자자 그럼 필요한게...
      </Box>
      <StatusBar section="7" />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
