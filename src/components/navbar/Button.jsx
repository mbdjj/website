import styled from "@emotion/styled";

const Button = styled.button`
  background-color: #f8f8f8;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 700;
  height: 44px;
  transition: box-shadow 0.3s;
  padding: 11px;
  width: max-content;

  &:hover {
    box-shadow: 0 2px 40px -4px #555;
  }

  @media (prefers-color-scheme: dark) {
    background-color: rgb(42, 45, 49);
    color: #ffffff;
  }
`;

export default Button;
