import React, { useState } from 'react';
import styled from 'styled-components';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';
import { img_box_tape, img_plastic_clean, img_plastic_red, img_pet, img_toothbrush } from '../../images';

export default function Page5_2({ match, location }) {
  const [selected, setSelected] = useState(0);
  const [didNotAnswered, setDidNotAnswered] = useState(true);
  return (
    <Wrapper>
      <Background page="5_2" />
      <PageButton pageNumber={match.url} {...{ location }} disableButton={didNotAnswered} />
      <VStack>
        <HStack>
          <Button
            isSelected={selected === 1 ? true : false}
            onClick={() => {
              setSelected(1);
              setDidNotAnswered(false);
            }}
          >
            <Img src={img_plastic_red} alt="card" width="136px" height="99px" />
          </Button>
          <Button
            isSelected={selected === 2 ? true : false}
            onClick={() => {
              setSelected(2);
              setDidNotAnswered(false);
            }}
          >
            <Img src={img_pet} alt="card" width="136px" height="118px" />
          </Button>
        </HStack>
        <HStack>
          <Button
            isSelected={selected === 3 ? true : false}
            onClick={() => {
              setSelected(3);
              setDidNotAnswered(false);
            }}
          >
            <Img src={img_toothbrush} alt="card" width="136px" height="124.5px" />
          </Button>
          <Button
            isSelected={selected === 4 ? true : false}
            onClick={() => {
              setSelected(4);
              setDidNotAnswered(false);
            }}
          >
            <Img src={img_plastic_clean} alt="card" width="136px" height="100.5px" />
          </Button>
        </HStack>
        <Button
          isSelected={selected === 5 ? true : false}
          onClick={() => {
            setSelected(5);
            setDidNotAnswered(false);
          }}
        >
          <Img src={img_box_tape} alt="card" width="136px" height="117px" />
        </Button>
      </VStack>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Img = styled.img`
  margin-bottom: 10px;
`;

const VStack = styled.div`
  position: absolute;
  top: 179px;
  left: 34px;
  right: 25px;

  z-index: 2;
`;

const HStack = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 12px;
`;

const Button = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  width: 152px;
  height: 152px;

  border-radius: 6px;
  box-shadow: 0 4px 8px 0 rgba(69, 111, 128, 0.08);

  ${({ isSelected }) =>
    isSelected
      ? 'border: solid 1px #3acce1; background-color: #3acce1;'
      : 'border: solid 1px #ffffff; background-color: rgba(248, 248, 248, 0.72);'};
`;
