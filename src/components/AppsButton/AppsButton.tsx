import "./styles.js"
import { ButtonProps } from "./types"
import { MainButton } from "./styles"

function AppsButton({
  name,
  type = "button",
  onClick,
  disabled = false,
}: ButtonProps) {
  // console.log(props.buttonName);

  return (
    <MainButton onClick={onClick} type={type} disabled={disabled}>
      {name}
    </MainButton>
  )
}

export default AppsButton
