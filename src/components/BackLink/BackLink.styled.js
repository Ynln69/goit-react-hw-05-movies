import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const BackLinkBtn = styled(Link)`
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
