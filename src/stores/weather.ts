// @ts-check
import axios from 'axios'
import { defineStore, acceptHMRUpdate } from 'pinia'
import type {UrlProperty, ResponseWeather} from '@/types/types'

export const useWeatherStore = defineStore("weather",{
  state: () => ({
    url: 'http://api.weatherapi.com/v1/',
    weather: {} as ResponseWeather,
    isAdmin: true,
  }),
  getters: {
    getWeather: (state) => state.weather,
    getLocation: (state) => state.weather.location,
    getCurrentWeather: (state) => state.weather.current,
  },

  actions: {
    async weatherFetch(dataRequest: UrlProperty) {
      try{
        const weatherResponse = await axios.get(this.url + `${dataRequest.typeData}.json?key=${dataRequest.key}&q=${dataRequest.location}`)
        this.weather = weatherResponse.data;
      } catch(error){
          //TODO notification error
          console.error(error);
      }
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useWeatherStore, import.meta.hot))
}
