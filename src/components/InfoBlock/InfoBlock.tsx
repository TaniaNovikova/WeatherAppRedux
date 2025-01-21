import {
  ButtonsContainer,
  ButtonWrapper,
  CityNameWrapper,
  ImageWrapper,
  InfoBlockContainer,
  InfoTextWrapper,
  TemperatureWrapper,
  WeatherDataWrapper,
  WeatherImage,
} from "./styles"

import Clouds from "../../assets/clouds 2.png"
import AppsButton from "../AppsButton/AppsButton"
import { APPS_COLORS } from "../../enums"

function InfoBlock() {
  return (

    <InfoBlockContainer>
      <WeatherDataWrapper>
      <InfoTextWrapper>
        <TemperatureWrapper>18°</TemperatureWrapper>
        <CityNameWrapper>Colrado</CityNameWrapper>
      </InfoTextWrapper>
      <ImageWrapper>
        <WeatherImage src={Clouds} />
      </ImageWrapper>
      </WeatherDataWrapper>
      <ButtonsContainer>
        <ButtonWrapper>
          <AppsButton
            name="Save"
            backgroundColor={APPS_COLORS.INFOBLOCK_BACKGROUND}
            borderColor={APPS_COLORS.TEXT_WHITE}
          />
        </ButtonWrapper>
        <ButtonWrapper>
          <AppsButton
            name="Delete"
            backgroundColor={APPS_COLORS.INFOBLOCK_BACKGROUND}
            borderColor={APPS_COLORS.TEXT_WHITE}
          />
        </ButtonWrapper>
      </ButtonsContainer>
    </InfoBlockContainer>
  )
}

export default InfoBlock
