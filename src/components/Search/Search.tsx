import Input from "../Input/Input"
import AppsButton from "../AppsButton/AppsButton"
import { ButtonWrapper, SearchForm } from "./styles"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useAppDispatch } from "../../store/hooks"
import { weatherActions } from "../../store/redux/weatherApp/weatherAppSlice"
import { useState } from "react"

function Search() {
  const dispatch = useAppDispatch()

  const validationSchema = Yup.object().shape({
    city: Yup.string().required("City name is missing"),
  })

  const formik = useFormik({
    initialValues: { city: "" },
    validationSchema: validationSchema,
    validateOnMount: false,
    validateOnChange: false,
    onSubmit: values => {
      //  console.log(values.city)
      dispatch(weatherActions.getWeather(values.city))
      values.city = ""
    },
  })
  return (
    <SearchForm onSubmit={formik.handleSubmit}>
      <Input
        id="city"
        name="city"
        value={formik.values.city}
        onChange={formik.handleChange}
      />
      <ButtonWrapper>
        <AppsButton name="Search" type="submit" isMain />
      </ButtonWrapper>
    </SearchForm>
  )
}

export default Search
