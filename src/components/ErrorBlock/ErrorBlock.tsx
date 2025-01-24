import { APPS_COLORS } from "enums"
import { useAppDispatch } from "store/hooks"
import { weatherActions } from "store/redux/weatherApp/weatherAppSlice"
import AppsButton from "components/AppsButton/AppsButton"
import {
  ButtonWrapper,
  ErrorBlockContainer,
  ErrorTextWrapper,
  LargeTextWrapper,
  SmallTextWrapper,
} from "./styles"
import { ErrorDataProps } from "./types"

function ErrorBlock(error: ErrorDataProps) {
    const dispatch = useAppDispatch()

    const onDelete= ()=>{
      dispatch(weatherActions.removeErrorBlock())
    }
  
  return (
    <ErrorBlockContainer>
      <ErrorTextWrapper>
         <LargeTextWrapper>{error.error.errorName}</LargeTextWrapper> 
        <SmallTextWrapper>{error.error.errorMessage}</SmallTextWrapper>
      </ErrorTextWrapper>
      <ButtonWrapper>
          <AppsButton
            name="Delete"
            backgroundColor={APPS_COLORS.INFOBLOCK_BACKGROUND}
            borderColor={APPS_COLORS.TEXT_WHITE}
            onClick={onDelete}
          />
        </ButtonWrapper>
    </ErrorBlockContainer>
  )
}

export default ErrorBlock
