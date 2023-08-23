import React from "react";
import { styled } from "styled-components";
import { useTheme } from "styled-components";

interface PrimaryButtonProps {
  $textcolor: string;
}

const PrimaryButtonStyle = styled.button<PrimaryButtonProps>`
  height: 52px;
  display: flex;
  color: ${(props) => props.$textcolor};
  font-weight: 700;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 10px;
  background-color: #888f94;
  padding: 0px 32px;
  width: fit-content;
  cursor: pointer;
`;

export const PrimaryButton = ({
  children,
  ...props
}: React.ComponentPropsWithoutRef<"button">) => {
  const theme = useTheme();
  return (
    <PrimaryButtonStyle {...props} $textcolor={theme.textcolor}>
      {children}
    </PrimaryButtonStyle>
  );
};
