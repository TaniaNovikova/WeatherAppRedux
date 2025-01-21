import Input from "../Input/Input"
import AppsButton from "../AppsButton/AppsButton"
import { ButtonWrapper, SearchForm} from "./styles"
import { useFormik } from "formik"
import { APPS_COLORS } from "../../enums"


function Search() {
  
  return (
    <SearchForm>
      <Input name="city"/>
      <ButtonWrapper>
      <AppsButton name="Search" isMain />
      </ButtonWrapper>
    </SearchForm>
  )
}

export default Search
