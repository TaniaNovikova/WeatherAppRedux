import { APPS_COLORS } from "../../enums"
import { MainButton } from "./styles"
import { ButtonProps } from "./types"

function AppsButton({
  name,
  type = "button",
  onClick,
  disabled = false,
  isRed = false,
  backgroundColor = APPS_COLORS.APPS_BUTTON_BACKGROUND,
  borderColor = APPS_COLORS.TEXT_WHITE,
  isMain = false,
}: ButtonProps) {
  return (
    <MainButton
      onClick={onClick}
      type={type}
      disabled={disabled}
      $backgroundColor={backgroundColor}
      $isRed={isRed}
      $isMain={isMain}
      $borderColor={borderColor}
    >
      {name}
    </MainButton>
  )
}

export default AppsButton
