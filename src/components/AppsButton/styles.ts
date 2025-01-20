import styled from "@emotion/styled"
// import { APPS_COLORS } from "enums"
import { APPS_COLORS } from "../../enums"

interface MainButtonProps {
  disabled: boolean
}

interface StyledButtonProps {
  $backgroundColor: string
  $isRed: boolean
}

const getButtonColor = (
  $isRed: boolean | undefined,
  $backgroundColor: string,
) => {
  return $isRed ? APPS_COLORS.ERROR : $backgroundColor
}

export const MainButton = styled.button<StyledButtonProps>`
  width: 100%;
  height: 70px;
  outline: none;
  border: none;
  background: ${({ $isRed, $backgroundColor }) =>
    getButtonColor($isRed, $backgroundColor)};
  height: 48px;
  padding: 12px 40px 12px 40px;
  gap: 10px;
  border-radius: 50px;
  font-size: 20px;
  font-weight: 400;
  line-height: 24.2px;
  color: ${APPS_COLORS.TEXT_WHITE};
  &:hover {
    background: ${APPS_COLORS.APPS_BUTTON_BACKGROUND_HOVER};
  }
  &:disabled {
    cursor: not-allowed;
    background: ${APPS_COLORS.HEADER_BORDER};
  }
`
