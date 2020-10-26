import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { left_button, right_button } from '../images';

export default function PageButton({ pageNumber, location, number, selected, question }) {
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
        <Button src={left_button} direction="left" alt="button" />
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
        <Button src={right_button} direction="right" alt="button" />
      </Link>
    </Fragment>
  );
}

const Button = styled.img`
  position: absolute;
  top: 8px;
  ${({ direction }) => (direction === 'left' ? `left: 4px;` : `right: 4px;`)};

  z-index: 2;
`;
