import React from 'react';
import styled from 'styled-components';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';
import Box from '../../components/Box';
import StatusBar from '../../components/StatusBar';

export default function Page10_2({ match, location }) {
  return (
    <Wrapper>
      <Background page="10_2" />
      <PageButton pageNumber={match.url} {...{ location }} />
      <Box line="7">
        ‘UN이 북태평양에 위치한 <br />
        플라스틱 쓰레기섬 GPGP를 <br />
        정식국가로 인정했다는 소식입니다’ <br />
        <br />
        * GPGP <br />
        (Great Pacific Garbage Patch) <br />
      </Box>
      <StatusBar />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
