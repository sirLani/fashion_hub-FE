import React from "react";
import { styled } from "styled-components";
import { useTheme } from "styled-components";

interface PrimaryButtonProps {
  textColor: string;
}

const PrimaryButtonStyle = styled.button<PrimaryButtonProps>`
  height: 40px;
  display: flex;
  color: ${(props) => props.textColor};
  font-weight: 700;
  justify-content: center;
  align-items: center;
`;

export default function PrimaryButton({
  children,
  ...props
}: React.ComponentPropsWithoutRef<"button">) {
  const theme = useTheme();
  return (
    <PrimaryButtonStyle {...props} textColor={theme.textColor}>
      {children}
    </PrimaryButtonStyle>
  );
}
