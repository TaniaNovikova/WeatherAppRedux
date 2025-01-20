import Input from "../Input/Input"
import AppsButton from "../AppsButton/AppsButton"
import { ButtonWrapper, SearchForm} from "./styles"

function Search() {
  return (
    <SearchForm>
      <Input name="city"/>
      <ButtonWrapper>
      <AppsButton name="Search" />
      </ButtonWrapper>
    </SearchForm>
  )
}

export default Search
