import styled from "@emotion/styled"
import { APPS_COLORS } from "../../enums"

export const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  gap: 20px;
`
export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 80px;

  width: 760px;
  height: 600px;

  overflow-y: auto;
  &::-webkit-scrollbar {
    height: 600px;
    width: 30px;
  }
  &::-webkit-scrollbar-track {
    background: ${APPS_COLORS.HEADER_BACKGROUND};
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${APPS_COLORS.APPS_BUTTON_BACKGROUND};
    height: 80px;
    border-radius: 4px;
    cursor: pointer;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: ${APPS_COLORS.APPS_BUTTON_BACKGROUND_HOVER};
  }
`
export const ButtonWrapper = styled.div`
  width: 710px;
`
