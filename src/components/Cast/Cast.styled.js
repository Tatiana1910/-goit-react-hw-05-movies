import styled from 'styled-components';

export const ListActor = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  list-style-type: none;
`;
export const ItemActor = styled.li`
  width: calc((100%-100px) / 9);
`;

export const ImgActor = styled.img`
  border-radius: 5px;
  box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3);
  object-fit: cover;
`;
