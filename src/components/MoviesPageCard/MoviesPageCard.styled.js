import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const GalleryItem = styled.li`
  display: flex;
  flex-direction: column;
  /* gap: 15px; */
  list-style: none;
  height: auto;
  width: 240px;
  background-color: rgb(201 27 108 / 25%);
  text-align: center;
  border-radius: 10px;
  box-shadow: 10px 10px 8px 1px rgba(0, 0, 0, 0.2);
  transform: scale(1);
  transition: transform 250ms linear;
  &:hover {
    transform: scale(1.04);
  }
`;

export const GalleryImage = styled.img`
  display: block;
  /* height: 360px; */
  width: 100%;
  height: 360px;
  border-radius: 10px;
  color: black;
`;

export const MovieTitle = styled.p`
  margin: 0;
  padding: 10px;
  font-size: 18px;
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;
  color: black;
`;
