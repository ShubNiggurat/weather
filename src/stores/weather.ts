// @ts-check
import axios from 'axios'
import { defineStore, acceptHMRUpdate } from 'pinia'
import type {UrlProperty, ResponseWeather} from '@/types/types'
import {typeWeatherDataRequest} from "@/enums/enums"

export const useWeatherStore = defineStore("weather",{
  state: () => ({
    url: 'http://api.weatherapi.com/v1/',
    weather: {} as ResponseWeather,
    currentTypeRequest: "current",
  }),
  getters: {
    getWeather: (state) => state.weather,
    getLocation: (state) => state.weather.location,
    getCurrent: (state) => state.weather.current,
  },

  actions: {
    async weatherFetch(dataRequest: UrlProperty) {
      try{
        const weatherResponse = await axios.get(this.url + `${this.currentTypeRequest}.json?key=${dataRequest.key}&q=${dataRequest.location}`)
        this.weather = weatherResponse.data;
      } catch(error){
          //TODO notification error
          console.error(error);
      }
    },
    setCurrentTypeRequest(type: typeWeatherDataRequest){
      this.currentTypeRequest = type;
    }
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useWeatherStore, import.meta.hot))
}
