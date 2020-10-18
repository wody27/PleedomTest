import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { left_button, right_button } from '../images';

export default function PageButton({ pageNumber }) {
  const page = pageNumber.replace('/', '');
  const prevPage = `/${parseInt(page) - 1}`;
  const nextPage = `/${parseInt(page) + 1}`;

  return (
    <Fragment>
      <Link to={prevPage}>
        <Button src={left_button} direction="left" alt="button" />
      </Link>
      <Link to={nextPage}>
        <Button src={right_button} direction="right" alt="button" />
      </Link>
    </Fragment>
  );
}

const Button = styled.img`
  position: absolute;
  top: 8px;
  ${({ direction }) => (direction === 'left' ? `left: 4px;` : `right: 4px;`)};
`;
