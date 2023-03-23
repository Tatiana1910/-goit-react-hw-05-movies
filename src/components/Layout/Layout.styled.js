import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  background-image: linear-gradient(-110deg, rgb(9, 60, 61), rgb(233, 88, 170));

  padding-left: 60px;
  padding-bottom: 40px;
  padding-top: 40px;
  box-shadow: 0px 5px 10px 2px rgba(189, 145, 161, 0.53);
  > nav {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: start;
  }
`;

export const Link = styled(NavLink)`
  padding: 18px 25px;
  border-radius: 5px;
  display: flex;
  gap: 5px;
  align-items: center;
  font-size: 20px;
  border: 1px solid black;
  transform: scale(1);
  transition: transform 250ms linear;
  box-shadow: rgb(134 42 46) 0px 8px 8px 4px;
  &:first child {
    margin-right: 30px;
  }
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
  &.active {
    background-color: rgb(229 213 221);
    &:hover,
    &:focus {
      color: inherit;
    }
  }
`;

export const Footer = styled.footer`
  padding: 5px;

  background-image: linear-gradient(
    -110deg,
    rgb(9 60 61 / 49%),
    rgb(233 88 170 / 64%)
  );
`;

export const P = styled.p`
  color: black;
  text-align: center;
  color: black;
  font-size: 15px;
  font-weight: 500;
`;
