<template>
  <v-form
        v-model="form"
        @submit.prevent="requestWeather"
      >
    <v-text-field 
      label="API key" 
      variant="outlined"
      hint="You can get it on weatherapi.com" 
      :rules="[rules.required]"
      v-model="key"
    ></v-text-field>
    <!-- add localStore save location search -->
    <v-text-field 
      label="Location"
      variant="outlined" 
      hint="Pass US Zipcode, UK Postcode, Canada Postalcode, IP address, Latitude/Longitude (decimal degree) or city name"
      :rules="[rules.required]"
      v-model="location"
    ></v-text-field>

    <!-- :hint="" change on type is selected -->
    <v-select
      :items="typesWeatherData"
      :menu-props="{ contentClass: 'selectScroll'}"
      v-model="selectedTypeWeatherData"
      variant="outlined"
      label="Type data"
    ></v-select> 
    <v-btn :disabled="!form" type="submit">Get weather</v-btn>
    <p>{{ getCurrentWeather }}</p>
  </v-form>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { mapStores, mapState } from 'pinia'
import { useWeatherStore } from '@/stores/weather'
import { typeWeatherDataRequest } from "@/enums/enums"

export default defineComponent({
    name: "weather-main-component",
    data: ()=>({
      rules: {
        required: (value:string) => !!value || 'Field is required',
      },
      //
      key: "",
      form: false,
      location: "",
      selectedTypeWeatherData: typeWeatherDataRequest.CURRENT
    }),
    async mounted() {

    },
    computed: {
      ...mapStores(useWeatherStore),
      ...mapState(useWeatherStore, ["getCurrentWeather", "getLocation", "getWeather"]),
      typesWeatherData(){
        return Object.values(typeWeatherDataRequest);
      }
    },
    methods: {
      requestWeather(){
        if (!this.form) return
        this.weatherStore.weatherFetch({typeData: this.selectedTypeWeatherData, key: this.key, location: this.location})
      }
    },
  },
)
</script>

<style>
.main {
  height: 100%;
}
.selectScroll::-webkit-scrollbar {
  width: 10px;
}
.selectScroll::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
}
.selectScroll::-webkit-scrollbar-thumb {
  background-color: #b85125;
}
.selectScroll::-webkit-scrollbar-thumb:hover {
  background-color: #962d00;
}
</style>
