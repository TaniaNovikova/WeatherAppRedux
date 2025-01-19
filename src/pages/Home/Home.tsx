import ErrorBlock from "../../components/ErrorBlock/ErrorBlock"
import InfoBlock from "../../components/InfoBlock/InfoBlock"
import Search from "../../components/Search/Search"
import { HomeContainer } from "./styles"

function Home() {
  return (
    <HomeContainer>
      <Search />
      {/* <InfoBlock /> */}
      <ErrorBlock/>
    </HomeContainer>
  )
}

export default Home
