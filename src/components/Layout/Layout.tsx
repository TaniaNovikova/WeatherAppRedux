import { useNavigate } from "react-router-dom"

import {
  LayoutWrapper,
  Header,
  NavigationContainer,
  Main,
  Logo,
  LogoName,
  Link,
} from "./styles"

import { LayoutProps } from "./types"
import { PagesPaths } from "./types"

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate()

  const goToHomePage = () => {
    navigate(PagesPaths.HOME)
  }

  return (
    <LayoutWrapper>
      <Header>
        <Logo onClick={goToHomePage}>
          <LogoName>Weather App</LogoName>
        </Logo>
        <NavigationContainer>
          <Link
            style={({ isActive }) => ({
              fontWeight: isActive ? "700" : "400",
            })}
            to={PagesPaths.HOME}
          >
            Home
          </Link>
          <Link
            style={({ isActive }) => ({
              fontWeight: isActive ? "700" : "400",
            })}
            to={PagesPaths.HISTORY}
          >
            History
          </Link>
        </NavigationContainer>
      </Header>
      <Main>{children}</Main>
    </LayoutWrapper>
  )
}

export default Layout
