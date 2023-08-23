import { styled } from "styled-components";

interface BoxProps {
  $top?: string;
  $bottom?: string;
  $left?: string;
  $right?: string;
  $display?: string;
  $flexdirection?: string;
  $justifycontent?: string;
  $alignitems?: string;
  $backgroundcolor?: string;
  $width?: string;
  $paddingtop?: string;
  $paddingbottom?: string;
}

export const Box = styled.div<BoxProps>`
  display: ${(props) => props.$display};
  margin-top: ${(props) => props.$top};
  margin-bottom: ${(props) => props.$bottom};
  margin-right: ${(props) => props.$right};
  margin-left: ${(props) => props.$left};
  flex-direction: ${(props) => props.$flexdirection};
  justify-content: ${(props) => props.$justifycontent};
  align-items: ${(props) => props.$alignitems};
  background-color: ${(props) => props.$backgroundcolor};
  width: ${(props) => props.$width};
  padding-top: ${(props) => props.$paddingtop};
  padding-bottom: ${(props) => props.$paddingbottom};
`;
