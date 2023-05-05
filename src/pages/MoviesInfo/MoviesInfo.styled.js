import styled from '@emotion/styled';

export const MovieInfoBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  border: none;
  margin-top: 20px;
  cursor: pointer;

  color: #483d8b;
  background-color: transparent;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 15px;
  &:hover {
    color: #ff8c00;
  }
  > svg {
    fill: currentColor;
  }
`;
