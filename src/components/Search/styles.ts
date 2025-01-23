import styled from "@emotion/styled"
import { APPS_COLORS } from "../../enums"

export const SearchForm = styled.form`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 710px;
  height: 66px;
  gap: 14px;
`

export const ButtonWrapper = styled.div`
  width: 146px;
  height: 48px;
`
export const StyledErrorMessage =styled.div`
color: ${APPS_COLORS.ERROR}
`
export const InputAndErrorWrapper=styled.div`
display: flex;
flex-direction: column;
`