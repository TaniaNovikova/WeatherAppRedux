import { PayloadAction } from "@reduxjs/toolkit"
import { v4 } from "uuid"

import { WeatherAppSliceState, WeatherObject } from "./types"
import axios from "axios"
import { createAppSlice } from "store/createAppSlice"

const appWeatherInitialState: WeatherAppSliceState = {
  currentWeatherData: undefined,
  weather: [],
  error: undefined,
  isPending: false,
  hasModalOpen: false,
}

export const weatherAppSlice = createAppSlice({
  name: "WEATHER_APP",
  initialState: appWeatherInitialState,
  reducers: create => ({
    getWeather: create.asyncThunk(
      async (city: string) => {
        const APP_ID = "2384509c637be76d3ba8faf719087789"
        // const APP_ID = "2384509c637be76d3ba8faf7190877"
        try {
          const result = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APP_ID}`,
          )
          return result
        } catch (error: any) {
          // Преобразуем ошибку для rejected
          throw {
            name: error.name || "UnknownError",
            message:
              error.response?.data?.message ||
              error.message ||
              "Unexpected error",
          }
        }
      },
      {
        pending: (state: WeatherAppSliceState) => {
          state.isPending = true
        },
        fulfilled: (state: WeatherAppSliceState, action) => {
          const id = v4()
          const temperature = action.payload.data.main.temp
          const iconCode = action.payload.data.weather[0].icon
          const city = action.payload.data.name

          state.error = undefined
          state.isPending = false
          state.hasModalOpen = false
          state.currentWeatherData = {
            id: id,
            temperature: temperature,
            iconCode: iconCode,
            city: city,
          }
        },
        rejected: (state: WeatherAppSliceState, action) => {
          state.error = {
            errorName: action.error.name,
            errorMessage: action.error.message,
            errorCode: action.error.code,
          }
          state.currentWeatherData = undefined
          state.isPending = false
          state.hasModalOpen = false
        },
      },
    ),
    saveWeatherCard: create.reducer(
      (state: WeatherAppSliceState, action: PayloadAction<WeatherObject>) => {
        state.weather = [action.payload, ...state.weather]
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
    deleteAllCards: create.reducer((state: WeatherAppSliceState) => {
      state.weather = []
    }),

    onModalOpen: create.reducer((state: WeatherAppSliceState) => {
      state.hasModalOpen = true
    }),

    onModalClose: create.reducer((state: WeatherAppSliceState) => {
      state.hasModalOpen = false
    }),

    removeErrorBlock: create.reducer(
      (state: WeatherAppSliceState) => (state.error = undefined),
    ),
  }),
  selectors: {
    weatherState: (state: WeatherAppSliceState) => state,
  },
})

export const weatherActions = weatherAppSlice.actions
export const weatherSelectors = weatherAppSlice.selectors
