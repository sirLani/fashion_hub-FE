import { styled } from "styled-components";

interface BoxProps {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
}

export const Box = styled.div<BoxProps>`
  display: ${(props) => props.display};
  margin-top: ${(props) => props.top};
  margin-bottom: ${(props) => props.bottom};
  margin-right: ${(props) => props.right};
  margin-left: ${(props) => props.left};
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`;
