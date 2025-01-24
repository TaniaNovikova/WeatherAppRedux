import styled from "@emotion/styled"
import { APPS_COLORS } from "enums"

export const ErrorBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 709px;
  min-height: 200px;
  height:fit-content;
  padding: 14px;
  border-radius: 18px;
  background: ${APPS_COLORS.INFOBLOCK_BACKGROUND};
`
export const LargeTextWrapper = styled.div`
  width: fit-content;
  height: 69px;
  font-size: 57px;
  font-weight: 500;
  line-height: 68.98px;
  text-align: center;
  color: ${APPS_COLORS.ERROR};
`
export const SmallTextWrapper = styled.div`
  width: fit-content;
  height: 22px;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.78px;
  text-align: center;
  color: ${APPS_COLORS.TEXT_WHITE};
`
export const ErrorTextWrapper= styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
export const ButtonWrapper = styled.div`
  width: 155px;
  height: 48px;
`