import "./styles.ts"
import { ErrorMessage, InputContainer, InputElement } from "./styles"
import { InputProps } from "./types"

function Input({
  name,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
}: InputProps) {

  return (
    <InputContainer>
      <InputElement
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input-element"
      />
      {/* <ErrorMessage>{error}</ErrorMessage> */}
       {error && <ErrorMessage>{error}</ErrorMessage>} 
    </InputContainer>
  )
}

export default Input
