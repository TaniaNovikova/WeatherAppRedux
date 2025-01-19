import styled from "@emotion/styled"
import { APPS_COLORS } from "../../enums"

export const SearchForm = styled.form`
  width: 710px;
  height: 48px;
  top: 200px;
  left: 605px;
  gap: 14px;
  opacity: 0px;
`
export const SearchInput = styled.input`
  width: 550px;
  height: 48px;
  padding: 12px 12px 12px 20px;
  gap: 10px;
  border-radius: 40px 0px 0px 0px;
  border: 1px 0px 0px 0px;
  opacity: 0px;

  background: ${APPS_COLORS.SEARCH_INPUT_BACKGROUND};
  border: 1px solid ${APPS_COLORS.SEARCH_INPUT_BORDER};
  backdrop-filter: blur(16px)

`
export const SearchButton = styled.button`
  width: 146px;
  height: 48px;
  padding: 12px 40px 12px 40px;
  gap: 10px;
  border-radius: 50px;
  background: ${APPS_COLORS.SEARCH_BUTTON_BACKGROUND};
`
