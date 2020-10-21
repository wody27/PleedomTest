import React from 'react';
import styled from 'styled-components';
import queryString from 'query-string';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';

export default function Page11_3({ match, location }) {
  const answers = location.state.answer;
  const mbti = location.state.mbti;
  return (
    <Wrapper>
      <Background page="11_3" />
      <PageButton pageNumber={match.url} {...{ answers }} {...{ mbti }} />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
