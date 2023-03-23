import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: inline-flex;
  margin-bottom: 20px;
  padding: 7px 12px;
  justify-content: center;
  border-radius: 5px;
  width: 70px;
  gap: 5px;
  align-items: center;
  color: black;
  font-size: 20px;
  font-weight: 500;
  border: 1px solid black;
  transform: scale(1);
  transition: transform 250ms linear;
  box-shadow: rgb(134 42 46) 0px 8px 8px 4px;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
