import {
  StyledLeft,
  StyledLoader,
  StyledLower,
  StyledRight,
  StyledUpper,
} from "./styles"

function Loader() {
  return (
    <StyledLoader>
      <StyledUpper></StyledUpper>
      <StyledRight></StyledRight>
      <StyledLower></StyledLower>
      <StyledLeft></StyledLeft>
    </StyledLoader>
  )
}

export default Loader
