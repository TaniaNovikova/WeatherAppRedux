export interface WeatherAppSliceState {
  currentWeatherData: WeatherObject | undefined
  weather: WeatherObject[]
  error: ErrorObject|undefined
  isPending: boolean
}
// export interface WeatherAppSliceState {
//   currentWeatherData: WeatherObject | undefined
//   weather: WeatherObject[]
//   error: string | undefined
//   isPending: boolean
// }

export interface WeatherObject {
  id: string
  temperature: string
  iconCode: string
  city: string
}

export interface ErrorObject{
  errorName: string|undefined,
  errorMessage: string|undefined,
}