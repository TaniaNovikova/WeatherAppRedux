import styled from "@emotion/styled"
import { APPS_COLORS } from "../../enums"

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  gap: 4px;
  width: 100%;
`

export const InputElement = styled.input`
  width: 550px;
  height: 48px;
  padding: 12px 12px 12px 20px;
  gap: 10px;
  border-radius: 40px;
  border: 1px solid ${APPS_COLORS.TEXT_WHITE};
  outline: none;
  background: ${APPS_COLORS.SEARCH_INPUT_BACKGROUND};
  backdrop-filter: blur(16px);
  color: ${APPS_COLORS.TEXT_WHITE};
  

  font-size: 20px;
  font-weight: 400;
  line-height: 24.2px;
  color: ${APPS_COLORS.TEXT_WHITE};
  
    &:focus {
      color: ${APPS_COLORS.TEXT_WHITE};
      background:${APPS_COLORS.APPS_BUTTON_BACKGROUND}
  }

  &::placeholder {
    color: ${APPS_COLORS.TEXT_WHITE};
    opacity: ${APPS_COLORS.PLACEHOLDER_OPACITY};
    background: ${APPS_COLORS.SEARCH_INPUT_BACKGROUND};
  }
`

export const ErrorMessage = styled.div`
  height: 18px;
  color: ${APPS_COLORS.ERROR};
  font-size: 16px;
`
