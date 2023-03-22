import styled from 'styled-components';

export const GalleryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-content: space-evenly;
  gap: 30px;
  color: black;
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 0;
`;
export const Section = styled.section`
  padding: 0 15px;

  @media (min-width: 768px) {
    padding: 0 30px;
  }
`;
