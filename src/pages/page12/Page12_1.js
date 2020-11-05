import React from 'react';
import styled from 'styled-components';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';
import Box from '../../components/Box';
import StatusBar from '../../components/StatusBar';

export default function Page12_1({ match, location }) {
  const answers = location.state.answer;
  const mbti = location.state.mbti;
  console.log(mbti);
  console.log(answers);
  return (
    <Wrapper>
      <Background page="12_1" />
      <PageButton pageNumber={match.url} {...{ location }} />
      <Box line="1">여러분 알이 깨지고 있어요!!</Box>
      <StatusBar section="12" />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
