import ModalCreate from "../../components/ModalCreate/ModalCreate"
import ErrorBlock from "../../components/ErrorBlock/ErrorBlock"
import InfoBlock from "../../components/InfoBlock/InfoBlock"
import Search from "../../components/Search/Search"
import { HomeContainer } from "./styles"
import { useAppSelector } from "../../store/hooks"
import { weatherSelectors } from "../../store/redux/weatherApp/weatherAppSlice"
import { useState } from "react"

function Home() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
  const { currentWeatherData, error } = useAppSelector(
    weatherSelectors.weatherState,
  )
  console.log(error)

  return (
    <HomeContainer>
      <Search />
      {currentWeatherData && (
        <InfoBlock weatherData={currentWeatherData} hasSaveButton={true} />
      )}
      {error && <ErrorBlock error={error} />}
      <ModalCreate
        open={false}
        onClose={closeModal}
        children={undefined}
      />
    </HomeContainer>
  )
}

export default Home
