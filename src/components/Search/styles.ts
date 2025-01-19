import styled from "@emotion/styled"
import { APPS_COLORS } from "../../enums"

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 710px;
  height: 48px;
  gap: 14px;
`
export const SearchInput = styled.input`
  width: 550px;
  height: 48px;
  padding: 12px 12px 12px 20px;
  gap: 10px;
  border-radius: 40px;
  border: 1px solid ${APPS_COLORS.SEARCH_INPUT_BORDER};
  background: ${APPS_COLORS.SEARCH_INPUT_BACKGROUND};
  backdrop-filter: blur(16px);
`
export const SearchButton = styled.button`
  width: 146px;
  height: 48px;
  padding: 12px 40px 12px 40px;
  gap: 10px;
  border-radius: 50px;
  border: 1px solid transparent;
  background: linear-gradient(0deg, #3678b4, #3678b4);
  font-size: 20px;
  font-weight: 400;
  line-height: 24.2px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    background-color: #4A319F;
  }
`
