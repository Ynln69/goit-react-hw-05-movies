import styled from "@emotion/styled";

export const SerchForm = styled.form`
  width: 250px;
  margin-top: 20px;
  position: relative;
  border-radius: 100px;
  padding: 10px 15px;

  background: #ffffff;

  > input {
    border: none;
    outline: none;
  }
`;
export const SerchButton = styled.button`
  border: none;
  position: absolute;
  right: 4px;
  cursor: pointer;
  background-color: transparent;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;
