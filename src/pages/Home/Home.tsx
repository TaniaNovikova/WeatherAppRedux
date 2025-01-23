import Modal from "../../components/Modal/Modal"
import ErrorBlock from "../../components/ErrorBlock/ErrorBlock"
import InfoBlock from "../../components/InfoBlock/InfoBlock"
import Search from "../../components/Search/Search"
import { HomeContainer, SearchWrapper } from "./styles"
import { useAppSelector } from "../../store/hooks"
import { weatherSelectors } from "../../store/redux/weatherApp/weatherAppSlice"
import { useState } from "react"
import WeatherLoader from "../../components/WeatherLoader/WeatherLoader"

function Home() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
  const { currentWeatherData, error, isPending } = useAppSelector(
    weatherSelectors.weatherState,
  )
  // console.log(error)

  return (
    <HomeContainer>
      <SearchWrapper hasLoader={isPending}>
      <Search />
      </SearchWrapper>
      {isPending&&<WeatherLoader/>}
      {currentWeatherData && (
        <InfoBlock weatherData={currentWeatherData} hasSaveButton={true} />
      )}
      {error && <ErrorBlock error={error} />}
      {/* <Modal
        open={false}
        onClose={closeModal}
        children={undefined}
      /> */}
       <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} >
      </Modal>
    </HomeContainer>
  )
}

export default Home
