import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { left_button, right_button } from '../images';

export default function PageButton({ pageNumber, location, number, selected, question, disableButton }) {
  const page = pageNumber.replace('/', '');

  const prevPage = `/${parseInt(page) - 1}`;
  const nextPage = parseInt(page) === 31 ? `/result` : `/${parseInt(page) + 1}`;

  const answers = location.state.answer;
  const mbti = location.state.mbti;

  if (number !== undefined && selected !== undefined) {
    if (question === 'mbti') {
      mbti[number] = selected;
    } else {
      answers[number] = selected;
    }
  }
  return (
    <Fragment>
      <Link
        to={{
          pathname: prevPage,
          state: {
            answer: answers,
            mbti: mbti,
          },
        }}
      >
        <LeftButton src={left_button} direction="left" alt="button" />
      </Link>
      <Link
        to={{
          pathname: nextPage,
          state: {
            answer: answers,
            mbti: mbti,
          },
        }}
      >
        <RightButton src={right_button} direction="right" alt="button" disableButton={disableButton} />
      </Link>
    </Fragment>
  );
}

const LeftButton = styled.img`
  position: absolute;
  top: 40px;
  z-index: 2;
`;
const RightButton = styled.img`
  position: absolute;
  top: 40px;
  right: 8px;
  z-index: 2;
  ${({ disableButton }) => (disableButton === true ? console.log('true') : console.log('false'))};
  ${({ disableButton }) =>
    disableButton === true ? `opacity: 0.2; pointer-events: none;` : `opacity: 1; pointer-events: auto;`};
`;
