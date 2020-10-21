import React from 'react';
import styled from 'styled-components';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';

export default function Page2_2({ match, location }) {
  const answers = location.state.answer;
  const mbti = location.state.mbti;
  console.log(mbti);
  console.log(answers);
  return (
    <Wrapper>
      <Background page="2_2" />
      <PageButton pageNumber={match.url} {...{ answers }} {...{ mbti }} />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
