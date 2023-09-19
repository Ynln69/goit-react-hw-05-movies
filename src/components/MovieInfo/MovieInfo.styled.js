import styled from '@emotion/styled';

export const MovieInfoTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 30px;
`;

export const MovieInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 35px;
  > img {
    width: 290px;
    height: 430px;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    > img {
      width: 320px;
      height: 450px;
    }
  }
`;

export const MovieInfoTd = styled.td`
  width: 137px;
  > h2 {
    font-size: 20px;
  }
`;
