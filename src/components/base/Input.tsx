import { styled } from "styled-components";

interface InputProps {
  width?: string;
}

export const Input = styled.input<InputProps>`
  height: 42px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  width: ${(props) => props.width};
  padding-left: 12px;
`;
