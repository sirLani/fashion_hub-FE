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
  backgroundColor?: string;
  width?: string;
  paddingTop?: string;
  paddingBottom?: string;
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
  background-color: ${(props) => props.backgroundColor};
  width: ${(props) => props.width};
  padding-top: ${(props) => props.paddingTop};
  padding-bottom: ${(props) => props.paddingBottom};
`;
