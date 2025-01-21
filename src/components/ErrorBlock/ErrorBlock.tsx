import { APPS_COLORS } from "../../enums"
import AppsButton from "../AppsButton/AppsButton"
import {
  ButtonWrapper,
  ErrorBlockContainer,
  ErrorTextWrapper,
  LargeTextWrapper,
  SmallTextWrapper,
} from "./styles"

function ErrorBlock() {
  return (
    <ErrorBlockContainer>
      <ErrorTextWrapper>
        <LargeTextWrapper>API Error</LargeTextWrapper>
        <SmallTextWrapper>Something went wrong with API data</SmallTextWrapper>
      </ErrorTextWrapper>
      <ButtonWrapper>
          <AppsButton
            name="Delete"
            backgroundColor={APPS_COLORS.INFOBLOCK_BACKGROUND}
            borderColor={APPS_COLORS.TEXT_WHITE}
          />
        </ButtonWrapper>
    </ErrorBlockContainer>
  )
}

export default ErrorBlock
