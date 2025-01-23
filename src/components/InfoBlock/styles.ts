import styled from "@emotion/styled"
import { APPS_COLORS } from "../../enums"

export const InfoBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  width: 709px;
  height: 180px;
  background: ${APPS_COLORS.INFOBLOCK_BACKGROUND};
  backdrop-filter: blur(8px);
  border-radius: 18px;
`
export const WeatherDataWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
`

export const TemperatureWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 89.13px;
  height: 56.45px;
  font-size: 57px;
  font-weight: 500;
  line-height: 68.98px;
  text-align: left;
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
  gap:4px;
  align-items: center;
`

export const ImageWrapper = styled.div`
  width: 290px;
  height: 74px;
  display: flex;
  justify-content: center;
`
export const WeatherImage = styled.img`
  width: fit-content;
  height: 100%;
`
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 50px;
`
export const ButtonWrapper = styled.div`
  width: 155px;
  height: 48px;
`
