import styled from "@emotion/styled";

const Button = styled.button`
  background-color: #f8f8f8;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 700;
  height: 44px;
  margin-right: 10px;
  padding: 11px;
  transition: box-shadow 0.3s;
  width: max-content;

  &:hover {
    box-shadow: 0 0 10px 0 rgb(22, 25, 29);
  }

  @media (prefers-color-scheme: dark) {
    background-color: rgb(42, 45, 49);
    color: #ffffff;

    &:hover {
      box-shadow: 0 0 10px 0 snow;
    }
  }
`;

export default Button;
