import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { left_button, right_button } from '../images';

export default function PageButton({ pageNumber, answers, mbti }) {
  const page = pageNumber.replace('/', '');
  const prevPage = `/${parseInt(page) - 1}`;
  const nextPage = `/${parseInt(page) + 1}`;

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
