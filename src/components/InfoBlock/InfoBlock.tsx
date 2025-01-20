import {
  CityNameWrapper,
  ImageWrapper,
  InfoBlockContainer,
  InfoTextWrapper,
  TemperatureWrapper,
  WeatherImage,
} from "./styles"

import Clouds from "assets/clouds 2.png"

function InfoBlock() {
  return (
    <InfoBlockContainer>
      <InfoTextWrapper>
      <TemperatureWrapper>18°</TemperatureWrapper>
      <CityNameWrapper>Colrado</CityNameWrapper>
      </InfoTextWrapper>
      <ImageWrapper>
        <WeatherImage src={Clouds} />
      </ImageWrapper>
    </InfoBlockContainer>
  )
}

export default InfoBlock
