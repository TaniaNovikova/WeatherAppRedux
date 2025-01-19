import {
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
    </ErrorBlockContainer>
  )
}

export default ErrorBlock
