import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ModalContainer = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;

export const ModalBtn = styled.button`
  position: absolute;
  width: 20px;
  height: 20px;
  right: 25px;
  top: 75px;
  cursor: pointer;
  border-radius: 23%;
  border: none;
  color: yellow;
  background-color: #3f51b5;
  font-size: 10px;
  font-weight: 700;
  &:hover,
  &:focus {
    background-color: #303f9f;
  }
`;
