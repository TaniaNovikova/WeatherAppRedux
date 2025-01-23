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

import AppsButton from "../AppsButton/AppsButton"
import { APPS_COLORS } from "../../enums"
import { useAppDispatch } from "../../store/hooks"
import { weatherActions } from "../../store/redux/weatherApp/weatherAppSlice"
import { WeatherDataProps } from "./types"


function InfoBlock(weatherData: WeatherDataProps) {
    const dispatch = useAppDispatch()

  const temperature: number = Math.round(
    Number(weatherData.weatherData.temperature) - 273.15,
  )

  const URL_PICTURE = `http://openweathermap.org/img/w/${weatherData.weatherData.iconCode}.png`

  const onSave = () => {
    dispatch(weatherActions.saveWeatherCard(weatherData.weatherData))
  }

  const onDelete = () => {
    dispatch(weatherActions.deleteWeatherCard(weatherData.weatherData.id))
  }
  

  return (
    <InfoBlockContainer>
      <WeatherDataWrapper>
        <InfoTextWrapper>
          <TemperatureWrapper>{temperature}°</TemperatureWrapper>
          <CityNameWrapper>{weatherData.weatherData.city}</CityNameWrapper>
        </InfoTextWrapper>
        <ImageWrapper>
          <WeatherImage src={URL_PICTURE} alt="weather image" />
          <WeatherImage src={URL_PICTURE} alt="weather image" />
          <WeatherImage src={URL_PICTURE} alt="weather image" />
        </ImageWrapper>
      </WeatherDataWrapper>
      <ButtonsContainer>
        {weatherData.hasSaveButton && (
          <ButtonWrapper>
            <AppsButton
              name="Save"
              backgroundColor={APPS_COLORS.INFOBLOCK_BACKGROUND}
              borderColor={APPS_COLORS.TEXT_WHITE}
              onClick={onSave}
            />
          </ButtonWrapper>
        )}
        <ButtonWrapper>
          <AppsButton
            name="Delete"
            backgroundColor={APPS_COLORS.INFOBLOCK_BACKGROUND}
            borderColor={APPS_COLORS.TEXT_WHITE}
            onClick={onDelete}
          />
        </ButtonWrapper>
      </ButtonsContainer>
    </InfoBlockContainer>
  )
}

export default InfoBlock
