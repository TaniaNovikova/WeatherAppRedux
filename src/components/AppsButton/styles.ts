import styled from "@emotion/styled"
import { APPS_COLORS } from "enums"



interface StyledButtonProps {
  $backgroundColor: string
  $isRed: boolean
  $borderColor: string
  $isMain:boolean
}

const getButtonColor = (
  $isRed: boolean | undefined,
  $backgroundColor: string,
) => {
  return $isRed ? APPS_COLORS.ERROR : $backgroundColor
}

const getBorderColor = ($isMain: boolean | undefined) => {
  return $isMain ? "transparent" : APPS_COLORS.TEXT_WHITE
}

export const MainButton = styled.button<StyledButtonProps>`
  width: 100%;
  height: 70px;
  outline: none;
  background: ${({ $isRed, $backgroundColor }) =>
    getButtonColor($isRed, $backgroundColor)};
  height: 48px;
  padding: 12px 40px 12px 40px;
  gap: 10px;
  border: 1px solid;
  border-color: ${({ $isMain, $borderColor }) =>
    getBorderColor($isMain)};
  border-radius: 50px;
  font-size: 20px;
  font-weight: 400;
  line-height: 24.2px;
  cursor: pointer;
  color: ${APPS_COLORS.TEXT_WHITE};
  &:hover {
    background: ${APPS_COLORS.HEADER_BACKGROUND};
  }
  &:disabled {
    cursor: not-allowed;
    background: ${APPS_COLORS.HEADER_BORDER};
  }
`
