import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.section`
  padding: 15px;
  background-color: beige;

  @media (min-width: 768px) {
    padding: 30px;
  }
`;

export const DivMovie = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
  padding: 30px;
  font-weight: 500;
`;

export const MoviePicture = styled.img`
  width: 350px;
  border-radius: 5px;
  box-shadow: 10px 10px 8px 1px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 700;
  color: rgba(9, 60, 61, 1);
  text-shadow: rgba(0, 0, 0, 0.3) 4px 4px 6px;
  margin: 0;
  margin-bottom: 30px;
`;

export const SubTitle = styled.h3`
  letter-spacing: 1.7;
  margin-bottom: 20px;
  margin-top: 20px;
  font-size: 20px;
  font-weight: 500px;
  color: rgba(47, 56, 56, 1);
`;

export const P = styled.p`
  text-align: justify;
`;

export const Genres = styled.ul`
  display: flex;
  margin-left: 0;
  padding-left: 0;
  list-style-type: none;
  font-weight: 500;
`;

export const AdditionalDiv = styled.div`
  /* margin: auto; */
  text-align: center;
`;

export const DivLinkStyle = styled.div`
  width: 400px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`;
export const LinkStyle = styled(NavLink)`
  border: 2px solid rgb(195, 173, 255);
  border-radius: 25px;
  font-size: 22px;
  width: 200px;
  margin: auto;

  transform: scale(1);
  transition: transform 250ms linear;

  &:hover,
  &:focus {
    transform: scale(1.1);
    box-shadow: rgb(134 42 46) 0px 8px 8px 4px;
    z-index: 100;
  }
  &.active {
    background-color: rgb(229 213 221);
  }
`;
