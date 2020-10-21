import React from 'react';
import styled from 'styled-components';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';

export default function Page1_3({ match, location }) {
  const answers = location.state.answer;
  console.log(answers);
  const mbti = location.state.mbti;
  console.log(mbti);
  return (
    <Wrapper>
      <Background page="1_3" />
      <PageButton pageNumber={match.url} {...{ answers }} {...{ mbti }} />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
