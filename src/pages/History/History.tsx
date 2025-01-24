import AppsButton from "components/AppsButton/AppsButton"
import InfoBlock from "components/InfoBlock/InfoBlock"
import { ButtonWrapper, CardsContainer, HistoryContainer } from "./styles"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  weatherActions,
  weatherSelectors,
} from "store/redux/weatherApp/weatherAppSlice"
import { WeatherObject } from "store/redux/weatherApp/types"

function History() {
  const dispatch = useAppDispatch()
  const { weather } = useAppSelector(weatherSelectors.weatherState)
  const weatherMap = weather.map((weatherObject: WeatherObject) => (
    <InfoBlock weatherData={weatherObject} hasSaveButton={false} />
  ))

  const onDeleteAllCards = () => {
    dispatch(weatherActions.deleteAllCards())
  }
  return (
    <HistoryContainer>
      <CardsContainer>{weatherMap}</CardsContainer>
      <ButtonWrapper>
        {weather.length && (
          <AppsButton
            name="Delete all cards"
            isMain
            onClick={onDeleteAllCards}
          />
        )}
      </ButtonWrapper>
    </HistoryContainer>
  )
}

export default History
