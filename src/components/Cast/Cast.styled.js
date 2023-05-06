import styled from '@emotion/styled';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
  > li {
    display: flex;
    flex-direction: column;
    flex-basis: calc((100% - 8 * 10px) / 9);
    border-radius: 5px;
    overflow: hidden;
  }
`;

export const CastInfoBox = styled.div`
  display: flex;
  padding: 4px;
  flex-direction: column;
  // align-items: flex-start;
  gap: 5px;
  flex-grow: 1;

  background-color: #5f9ea0;
  color: #000;
  text-align: center;
  > h3 {
    font-size: 14px;
  }
  > p {
    text-decoration-line: overline;
    font-style: italic;
    font-size: 12px;
    opacity: 0.7;
  }
`;