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

export const Title = styled.h1`
  text-align: center;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  color: #483c3c;
  letter-spacing: 0.15em;
  text-shadow: rgb(0, 0, 0, 0.4) 1px 0px 10px;
  margin-top: 30px;
`;
export const Section = styled.section`
  padding: 0 15px;

  @media (min-width: 768px) {
    padding: 0 30px;
  }
`;
