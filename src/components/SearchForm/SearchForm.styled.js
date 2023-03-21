import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  border: 1px solid black;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: rgb(134 42 46) 0px 8px 8px 4px;
`;
export const Input = styled.input`
  display: inline-flex;
  width: 100%;
  padding: 8px 32px 8px 8px;
  border: none;
  outline: none;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 18px;

  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const Icon = styled(BsSearch)`
  width: 25px;
  height: 25px;
`;

export const SearchButton = styled.button`
  width: 60px;
  height: 40px;
  background-color: inherit;
  border-radius: 10px;
  cursor: pointer;
  border: 0;
  transition: background-color 250ms linear;
  :hover,
  :focus-visible {
    background-color: rgb(232 45 45 / 13%);
  }
`;
