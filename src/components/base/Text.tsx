import { styled } from "styled-components";

interface TextProp {
  size?: string;
}

export const Text = styled.p<TextProp>`
  font-color: #000000;
  font-family: poppins;
  font-size: ${(props) => (props.size ? props.size : "14px")};
`;
