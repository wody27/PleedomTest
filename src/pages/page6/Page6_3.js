import React, { useState } from 'react';
import styled from 'styled-components';
import queryString from 'query-string';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';
import Answer from '../../components/Answer';

export default function Page6_3({ match, location }) {
  const query = queryString.parse(location.search);
  //   console.log(query.score);
  const [selected, setSelected] = useState(-1);
  return (
    <Wrapper>
      <Background page="6_3" />
      <PageButton pageNumber={match.url} selectedScore={`${parseInt(query.score) + selected}`} />
      <VStack>
        <Answer
          isSelected={selected === 2 ? true : false}
          onClick={() => {
            setSelected(2);
          }}
        >
          항상 준비되어 있지! 나와라 텀블러 & 빨대! <br />
          여기에 담아 주세요^^(으쓱코쓱)
        </Answer>
        <Answer
          isSelected={selected === 1 ? true : false}
          onClick={() => {
            setSelected(1);
          }}
        >
          앗! 깜빡하고 텀블러를 집에 두고 왔네요! <br />
          일회용 컵에 주세요!
        </Answer>
        <Answer
          isSelected={selected === 0 ? true : false}
          onClick={() => {
            setSelected(0);
          }}
        >
          그냥 일회용 컵에 주세요!
        </Answer>
      </VStack>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const VStack = styled.div`
  position: absolute;
  top: 193px;
  left: 16px;
  right: 16px;
  z-index: 4;

  display: flex;
  flex-direction: column;
`;
