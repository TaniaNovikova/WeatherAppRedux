import AppsButton from "components/AppsButton/AppsButton"
import InfoBlock from "components/InfoBlock/InfoBlock"
import { ButtonWrapper, CardsContainer, HistoryContainer } from "./styles"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  weatherActions,
  weatherSelectors,
} from "store/redux/weatherApp/weatherAppSlice"
import { WeatherObject } from "store/redux/weatherApp/types"
import { useEffect, useState } from "react"
import ModalDelete from "components/ModalDelete/ModalDelete"

function History() {
  const dispatch = useAppDispatch()
  const { weather, hasModalOpen } = useAppSelector(
    weatherSelectors.weatherState,
  )
  const weatherMap = weather.map((weatherObject: WeatherObject) => (
    <InfoBlock weatherData={weatherObject} hasSaveButton={false} />
  ))

  const [isModalOpen, setIsModalOpen] = useState<boolean>(hasModalOpen)

  const onDeleteAllCards = () => {
    dispatch(weatherActions.deleteAllCards())
    dispatch(weatherActions.onModalClose())
  }

  const onModalButtonCanselClick=()=>{
    dispatch(weatherActions.onModalClose())
  }

  const onDeleteAllButtonClick = () => {
    dispatch(weatherActions.onModalOpen())
  }

  useEffect(() => setIsModalOpen(hasModalOpen), [hasModalOpen])

  return (
    <HistoryContainer>
      <CardsContainer>{weatherMap}</CardsContainer>
      <ButtonWrapper>
        {weather.length && (
          <AppsButton
            name="Delete all cards"
            isMain
            onClick={onDeleteAllButtonClick}
          />
        )}
      </ButtonWrapper>
      <ModalDelete open={isModalOpen} onClose={onDeleteAllCards} onCansel={onModalButtonCanselClick}>
        Modal
      </ModalDelete>
    </HistoryContainer>
  )
}

export default History
