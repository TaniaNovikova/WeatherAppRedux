import styled from "@emotion/styled"
import { NavLink, Link as SimpleLink } from "react-router-dom"

import backgroundImage from "../../assets/pic 2.png"
import { APPS_COLORS } from "../../enums"

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

export const Header = styled.div`
  width: 100%;
  height: 80px;
  padding: 10px 85px;
  border-bottom: 1px solid ${APPS_COLORS.HEADER_BORDER};

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  background: ${APPS_COLORS.HEADER_BACKGROUND};
  backdrop-filter: blur(10px); /*размытие заднего фона */
`

export const Logo = styled.div`
  width: 155px;
  height: 29px;
  top: 25.5px;
  left: 85px;
  gap: 0px;
  opacity: 0px;
  /* 
  height: 100%;
  width: fit-content; */
  cursor: pointer;
`

export const LogoName = styled.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 29.05px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: ${APPS_COLORS.TEXT_WHITE};
`

export const NavigationContainer = styled.nav`
  display: flex;
  gap: 30px;
  height: 100%;
  width: fit-content;
  align-items: center;
`

export const Link = styled(NavLink)`
  height: 24px;
  top: 28px;
  font-family: Inter;
  font-size: 20px;
  font-weight: 400;
  line-height: 24.2px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: ${APPS_COLORS.TEXT_WHITE};
  text-decoration: none;
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-top: 40px;
  gap: 40px;
`
