import Input from "../Input/Input"
import AppsButton from "../AppsButton/AppsButton"
import {
  ButtonWrapper,
  InputAndErrorWrapper,
  SearchForm,
  StyledErrorMessage,
} from "./styles"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useAppDispatch } from "../../store/hooks"
import { weatherActions } from "../../store/redux/weatherApp/weatherAppSlice"

function Search() {
  const dispatch = useAppDispatch()

  // const validationSchema = Yup.object().shape({
  //   city: Yup.string().required("City name is missing"),
  // })

  const validationSchema = Yup.object().shape({
    city: Yup.string()
      .required("City name is missing")
      .matches(
        /^[\p{L}\s\-]+$/u,
        "City name can only contain letters, spaces, and hyphens",
      ),
  })

  // 1. / и /u
  // / — открывающий и закрывающий символ регулярного выражения.
  // u — флаг Unicode, который говорит движку JavaScript, что регулярное выражение должно корректно работать с символами Unicode (например, буквами с диакритическими знаками: é, ü, ø).
  // 2. ^
  // Начало строки.
  // Указывает, что проверка начинается с самого первого символа строки. Если строка начнется с неподходящего символа, она сразу не пройдет проверку.
  // 3. [\p{L}\s\-]
  // Группа символов, которые разрешены. Все, что находится внутри квадратных скобок [], означает "один из этих символов".
  // Разберем внутри группы:
  // \p{L}

  // Unicode категория "Letter" (буква).
  // Соответствует любой букве из любого языка. Это включает:
  // Латиницу (a-z, A-Z),
  // Кириллицу (а-я, А-Я, включая "ё"),
  // Буквы с диакритиками (например, é, ü, ç),
  // Буквы из других алфавитов (например, греческий: α, β, и т.д.).
  // \s

  // Любой пробельный символ.
  // Соответствует обычным пробелам, табуляции или другим типам пробелов.
  // Позволяет вводить названия городов с пробелами, например, New York или Санкт-Петербург.
  // \-

  // Дефис.
  // Соответствует символу дефиса (-), который часто используется в названиях городов, таких как San-José или Йошкар-Ола.
  // 4. +
  // Повторение: один или более раз.
  // Говорит, что группа символов ([\p{L}\s\-]) может повторяться один или более раз. Например:
  // Разрешены строки из одного символа (А или A),
  // Или более длинные строки (Москва, New York, San-José).
  // 5. $
  // Конец строки.
  // Указывает, что проверка должна завершаться в конце строки. Если строка содержит лишние символы после последнего допустимого символа, она не пройдет проверку.
  // Итоговая структура группы:
  // regex ^[\p{L}\s\-]+$
  // Указывает, что строка:
  // Начинается с символов, определенных в группе [\p{L}\s\-].
  // Содержит только буквы, пробелы и дефисы (никаких других символов).
  // Заканчивается на разрешенном символе, без лишних данных в конце.

  const formik = useFormik({
    initialValues: { city: "" },
    validationSchema: validationSchema,
    validateOnMount: false,
    validateOnChange: true,
    onSubmit: values => {
      //  console.log(values.city)
      dispatch(weatherActions.getWeather(values.city))
      values.city = ""
    },
  })
  return (
    <SearchForm onSubmit={formik.handleSubmit}>
      <InputAndErrorWrapper>
        <Input
          id="city"
          name="city"
          value={formik.values.city}
          onChange={formik.handleChange}
        />
        {formik.errors.city && formik.touched.city && (
          <StyledErrorMessage >
            {formik.errors.city}
          </StyledErrorMessage>
        )}
      </InputAndErrorWrapper>
      <ButtonWrapper>
        <AppsButton name="Search" type="submit" isMain />
      </ButtonWrapper>
    </SearchForm>
  )
}

export default Search
