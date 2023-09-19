import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const CastList = styled.ul`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 50px;
`;
export const AdditionalInfoLink = styled(NavLink)`
  padding: 10px;
  border-radius: 4px;

  color: #ffd700;
  font-weight: 500;
  font-size: 15px;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;

  @media (min-width: 768px) {
    padding: 14px 32px;
    font-size: 20px;
  }

  &.active {
    color: white;
    background-color: #ffd700;
    box-shadow: 0px 0px 7px rgba(27, 27, 27, 0.15);
    border-radius: 100px;
  }
`;
