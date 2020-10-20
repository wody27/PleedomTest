import React, { useState } from 'react';
import styled from 'styled-components';
import queryString from 'query-string';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';
import Answer from '../../components/Answer';

export default function Page7_3({ match, location }) {
  const query = queryString.parse(location.search);

  const [selected, setSelected] = useState(-1);
  return (
    <Wrapper>
      <Background page="7_3" />
      <PageButton pageNumber={match.url} selectedScore={`${parseInt(query.score) + selected}`} />
      <VStack>
        <Answer
          isSelected={selected === 2 ? true : false}
          onClick={() => {
            setSelected(2);
          }}
        >
          직접 둘러보면서 살래요~ 일단 출발하게요!
        </Answer>
        <Answer
          isSelected={selected === 1 ? true : false}
          onClick={() => {
            setSelected(1);
          }}
        >
          떡, 어묵, 양파, 대파,,, <br />
          메모장에 적어가야 까먹지 않아요!
        </Answer>
      </VStack>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const VStack = styled.div`
  position: absolute;
  top: 179px;
  left: 16px;
  right: 16px;
  z-index: 4;

  display: flex;
  flex-direction: column;
`;
