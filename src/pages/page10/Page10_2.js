import React from 'react';
import styled from 'styled-components';
import queryString from 'query-string';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';

export default function Page10_2({ match, location }) {
  const query = queryString.parse(location.search);

  return (
    <Wrapper>
      <Background page="10_2" />
      <PageButton pageNumber={match.url} selectedScore={query.score} />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
