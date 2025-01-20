import AppsButton from "components/AppsButton/AppsButton"
import { ButtonWrapper, SearchForm, SearchInput } from "./styles"

function Search() {
  return (
    <SearchForm>
      <SearchInput />
      <ButtonWrapper>
      <AppsButton name="Search" />
      </ButtonWrapper>
    </SearchForm>
  )
}

export default Search
