import AppsButton from "../../components/AppsButton/AppsButton"
import InfoBlock from "../../components/InfoBlock/InfoBlock"
import { ButtonWrapper, CardsContainer, HistoryContainer } from "./styles"
import ModalDelete from "../../components/ModalDelete/ModalDelete"

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
      <ModalDelete open={false} onClose={() => {}} children={undefined} />
    </HistoryContainer>
  )
}

export default History
