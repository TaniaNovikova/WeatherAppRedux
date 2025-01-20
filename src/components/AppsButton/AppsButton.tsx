import { APPS_COLORS } from "../../enums"
import { MainButton } from "./styles"
import { ButtonProps } from "./types"

function AppsButton({
  name,
  type = "button",
  onClick,
  disabled = false,
  isRed=false,
  backgroundColor=APPS_COLORS.APPS_BUTTON_BACKGROUND,
}: ButtonProps) {
  // console.log(props.buttonName);

  return (
    <MainButton onClick={onClick} type={type} disabled={disabled} $backgroundColor={backgroundColor} $isRed={isRed}  >
      {name}
    </MainButton>
  )
}

export default AppsButton
