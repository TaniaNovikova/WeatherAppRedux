import AppsButton from "../../components/AppsButton/AppsButton"
import InfoBlock from "../../components/InfoBlock/InfoBlock"
import { ButtonWrapper, CardsContainer, HistoryContainer } from "./styles"

function History() {
  return (
    <HistoryContainer>
      <CardsContainer>
        <InfoBlock />
        <InfoBlock />
        <InfoBlock />
        <InfoBlock />
      </CardsContainer>
      <ButtonWrapper>
      <AppsButton name="Delete all cards" />
      </ButtonWrapper>
    </HistoryContainer>
  )
}

export default History
