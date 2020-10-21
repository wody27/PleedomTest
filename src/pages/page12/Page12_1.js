import React from 'react';
import styled from 'styled-components';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';

export default function Page12_1({ match, location }) {
  const answers = location.state.answer;
  const mbti = location.state.mbti;
  console.log(mbti);
  console.log(answers);
  return (
    <Wrapper>
      <Background page="12_1" />
      <PageButton pageNumber={match.url} {...{ location }} />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
