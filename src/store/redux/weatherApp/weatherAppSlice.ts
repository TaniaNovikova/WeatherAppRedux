import { PayloadAction } from "@reduxjs/toolkit"
import { v4 } from "uuid"

import { WeatherAppSliceState, WeatherObject } from "./types"
import axios from "axios"
import { Alert } from "@mui/material"
import { createAppSlice } from "../../createAppSlice"

const appWeatherInitialState: WeatherAppSliceState = {
  currentWeatherData: undefined,
  weather: [],
  error: undefined,
  isPending: false,
}
//const APP_ID = "2384509c637be76d3ba8faf7190877";//Это битый ключ для отлова ошибки

export const weatherAppSlice = createAppSlice({
  name: "WEATHER_APP",
  initialState: appWeatherInitialState,
  reducers: create => ({
    getWeather: create.asyncThunk(
      async (cityName: string) => {
        const APP_ID = "2384509c637be76d3ba8faf719087789"

        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APP_ID}`,
        )
        return response
      },
      {
        pending: (state: WeatherAppSliceState) => {
          // state.error = undefined
          state.isPending = true
        },
        fulfilled: (state: WeatherAppSliceState, action) => {
          // console.log(action.payload);

          const id = v4()
          const temperature = action.payload.data.main.temp
          const iconCode = action.payload.data.weather[0].icon
          const city = action.payload.data.name
          state.isPending = false
          state.currentWeatherData = {
            id: id,
            temperature: temperature,
            iconCode: iconCode,
            city: city,
          }
        },
        rejected: (state: WeatherAppSliceState, action) => {
          const errorName = action.error.name
          console.log(action.error.name);
          
          const errorMessage = action.error.message
          state.error = {
             errorName: errorName,
             errorMessage: errorMessage,
          }

          state.isPending = false
        },
      },
    ),
    saveWeatherCard: create.reducer(
      (state: WeatherAppSliceState, action: PayloadAction<WeatherObject>) => {
        state.weather = [...state.weather, action.payload]
        state.currentWeatherData = undefined
      },
    ),
    deleteWeatherCard: create.reducer(
      (state: WeatherAppSliceState, action: PayloadAction<string>) => {
        state.currentWeatherData = undefined
        state.weather = state.weather.filter((weaterCard: WeatherObject) => {
          return weaterCard.id !== action.payload
        })
      },
    ),
    deleteAllCards: create.reducer(() => appWeatherInitialState),
    removeErrorBlock: create.reducer((state: WeatherAppSliceState)=>state.error=undefined)
  }),
  selectors: {
    weatherState: (state: WeatherAppSliceState) => state,
  },
})

export const weatherActions = weatherAppSlice.actions

export const weatherSelectors = weatherAppSlice.selectors
