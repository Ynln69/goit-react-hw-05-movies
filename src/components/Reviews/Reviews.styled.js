import styled from '@emotion/styled';

export const ReviewsList = styled.ul`
  display: flex;
  gap: 10px;
  flex-direction: column;

  > li {
    padding: 15px;
    display: flex;
    gap: 10px;
    border-bottom: 1px solid black;
    flex-direction: column;
  }
`;

export const ErrorMessege = styled.p`
  font-size: 36px;
  text-align: center;
  padding: 20px;
  font-weight: 800;
`;
