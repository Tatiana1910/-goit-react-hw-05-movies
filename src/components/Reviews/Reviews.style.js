import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
`;

export const Items = styled.li`
  margin-bottom: 30px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const AuthorName = styled.p`
  margin-bottom: 10px;
  font-size: 25px;
  font-weight: 700;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const NotReviews = styled.p`
  margin-top: 10px;
  font-size: 20px;
  font-weight: 600;

  text-align: center;
`;
