import React, { useState } from 'react';
import styled from 'styled-components';
import queryString from 'query-string';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';
import Answer from '../../components/Answer';

export default function Page4_1({ match, location }) {
  const query = queryString.parse(location.search);

  const [selected, setSelected] = useState(-1);
  return (
    <Wrapper>
      <Background page="4_1" />
      <PageButton pageNumber={match.url} selectedScore={`${parseInt(query.score) + selected}`} />
      <VStack>
        <Answer
          isSelected={selected === 2 ? true : false}
          onClick={() => {
            setSelected(2);
          }}
        >
          양념 묻은 용기는 재활용이 안 돼요! <br />
          물로 깨끗하게 행군 뒤 재활용할게요!
        </Answer>
        <Answer
          isSelected={selected === 1 ? true : false}
          onClick={() => {
            setSelected(1);
          }}
        >
          세척 안하면 재활용이 안되지만… <br />
          오늘은 피곤하고 귀찮네요.. 그냥 버릴게요~!
        </Answer>
        <Answer
          isSelected={selected === 0 ? true : false}
          onClick={() => {
            setSelected(0);
          }}
        >
          빠르게 치우는 팁! 비닐에 한 방에 넣어버려요!
        </Answer>
      </VStack>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const VStack = styled.div`
  position: absolute;
  top: 199px;
  left: 16px;
  right: 16px;
  z-index: 4;

  display: flex;
  flex-direction: column;
`;
