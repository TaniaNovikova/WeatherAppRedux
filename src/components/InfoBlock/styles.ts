import styled from "@emotion/styled"
import { APPS_COLORS } from "../../enums"

export const InfoBlockContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 22px;
  width: 710px;
  height: 180px;
  background: ${APPS_COLORS.INFOBLOCK_BACKGROUND};
  backdrop-filter: blur(8px);
  border-radius: 18px;
`
export const TemperatureWrapper = styled.div`
  width: 89.13px;
  height: 56.45px;
  font-size: 57px;
  font-weight: 500;
  line-height: 68.98px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: ${APPS_COLORS.TEXT_WHITE};
`
export const CityNameWrapper = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 24.2px;
  color: ${APPS_COLORS.TEXT_WHITE};
`
export const InfoTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const ImageWrapper = styled.div`
  width: 290px;
  height: 74px;
`
export const WeatherImage = styled.img`
  width: 100%;
  height: 100%;
`
