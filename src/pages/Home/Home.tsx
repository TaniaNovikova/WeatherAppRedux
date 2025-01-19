import InfoBlock from "../../components/InfoBlock/InfoBlock"
import Search from "../../components/Search/Search"
import { HomeContainer } from "./styles"

function Home() {
  return (
    <HomeContainer>
      <Search />
      <InfoBlock />
    </HomeContainer>
  )
}

export default Home
