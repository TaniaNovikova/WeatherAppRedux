import styled from "@emotion/styled"
import { APPS_COLORS } from "../../enums"

interface MainButtonProps {
  disabled: boolean
}

export const MainButton = styled.button<MainButtonProps>`
  width: 100%;
  height: 70px;
  outline: none;
  border: none;
  background: ${({ disabled }) =>
    disabled
      ? APPS_COLORS.SEARCH_INPUT_BACKGROUND
      : APPS_COLORS.APPS_BUTTON_BACKGROUND};
  height: 48px;
  padding: 12px 40px 12px 40px;
  gap: 10px;
  border-radius: 50px;
  cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};
  font-size: 20px;
  font-weight: 400;
  line-height: 24.2px;
  color: ${APPS_COLORS.TEXT_WHITE};
  &:hover {
    background: ${APPS_COLORS.APPS_BUTTON_BACKGROUND_HOVER};
  }
`
