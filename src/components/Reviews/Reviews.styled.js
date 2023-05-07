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
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 5px -1px;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);
    border-radius: 5px;
  }
`;

export const ErrorMessege = styled.p`
  font-size: 36px;
  text-align: center;
  padding: 20px;
  font-weight: 800;
`;
