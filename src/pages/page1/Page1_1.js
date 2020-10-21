import React from 'react';
import styled from 'styled-components';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';

export default function Page1_1({ match }) {
  const answers = [-1, -1, -1, -1, -1];
  const mbti = ['a', 'a', 'a', 'a'];
  console.log(answers);
  return (
    <Wrapper>
      <Background page="1_1" />
      <PageButton pageNumber={match.url} {...{ answers }} {...{ mbti }} />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
