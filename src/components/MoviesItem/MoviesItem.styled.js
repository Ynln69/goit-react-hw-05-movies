import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MoviesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 10px;

  > li {
    flex-basis: calc((100% - 4 * 16px) / 5);
    border-radius: 10px;
    overflow: hidden;
    &:hover {
      filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.45));
    }
  }
`;

export const Link = styled(NavLink)`
  color: currentColor;
  text-decoration: none;
`;

export const ItemBox = styled.div`
  position: relative;
  padding: 10px;
  display: flex;
  gap: 4px;
  align-items: stretch;
  flex-direction: column;
`;
export const Rating = styled.div`
  position: absolute;
  top: -25px;
  left: 5px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 1px 1px 20px #ffd700;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  background-color: #483d8b;
`;

export const TitleMovie = styled.h2`
  margin-top: 15px;
  font-size: 19px;
`;

export const ReleaseMovie = styled.p`
  font-size: 13px;
  color: #696969;
`;
