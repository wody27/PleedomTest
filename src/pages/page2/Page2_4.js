import React from 'react';
import styled from 'styled-components';
import queryString from 'query-string';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';

export default function Page2_4({ match, location }) {
  const query = queryString.parse(location.search);
  console.log(location);
  return (
    <Wrapper>
      <Background page="2_4" />
      <PageButton pageNumber={match.url} selectedScore={query.score} />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
