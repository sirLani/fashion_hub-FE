import { styled } from "styled-components";
import { PrimaryButton } from "./types";

export const SecondaryButton = styled.button<PrimaryButton>`
  display: flex;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 10px;
  background-color: #888f94;
  padding: 14px 32px;
  width: fit-content;
  cursor: pointer;
  margin-left: ${(props) => props.$marginleft || ""};
`;
