import { styled } from "styled-components";

interface BoxProps {
  flexDirection?: string;
}

export const Wrapper = styled.div<BoxProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  max-width: 1330px;
  margin: 0 auto;
`;
