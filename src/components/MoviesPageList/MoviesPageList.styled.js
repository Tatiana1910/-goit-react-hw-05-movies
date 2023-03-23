import styled from 'styled-components';

export const GalleryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-content: space-evenly;
  gap: 30px;
  color: black;
  padding: 0;
`;
export const Section = styled.section`
  padding: 15px;
  background-color: beige;

  @media (min-width: 768px) {
    padding: 30px;
  }
`;
