import styled from '@emotion/styled';
import { NavLink, Link } from 'react-router-dom';

export const MovieInfoBtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 15px;
  border: none;
  margin-top: 20px;
  margin-bottom: 20px;
  cursor: pointer;

  color: #4682b4;
  background-color: transparent;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 15px;
  &:hover {
    color: #ffd700;
  }
  > svg {
    fill: currentColor;
  }
`;

export const MovieInfoTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 30px;
`;

export const MovieInfoBox = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 35px;
  > img {
    width: 370px;
    height: 450px;
  }
`;

export const MovieInfoTd = styled.td`
  width: 137px;
  > h2 {
    font-size: 20px;
  }
`;

export const CastList = styled.ul`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 50px;
`;
export const AdditionalInfoLink = styled(NavLink)`
  padding: 14px 32px;
  border-radius: 4px;

  color: #ffd700;
  font-weight: 500;
  font-size: 20px;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;

  &.active {
    color: white;
    background-color: #ffd700;
    box-shadow: 0px 0px 7px rgba(27, 27, 27, 0.15);
    border-radius: 100px;
  }
`;
