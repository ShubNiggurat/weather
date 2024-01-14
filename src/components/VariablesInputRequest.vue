<template>
    <v-form
      class="wrapper-input-form"
      v-model="form"
      @submit.prevent="requestWeather"
    >
      <v-text-field 
        class="w-100"
        label="API key" 
        variant="outlined"
        hint="You can get it on weatherapi.com" 
        :rules="[rules.required]"
        v-model="key"
      ></v-text-field>
      <!-- add localStore save location search -->
      <v-text-field 
        class="w-100"
        label="Location"
        variant="outlined" 
        hint="Pass US Zipcode, UK Postcode, Canada Postalcode, IP address, Latitude/Longitude (decimal degree) or city name"
        :rules="[rules.required]"
        v-model="location"
      ></v-text-field>
      <v-btn :disabled="!form" type="submit">Get weather</v-btn>
    </v-form>
</template>
<script lang="ts">
    import { defineComponent } from 'vue'
    import { mapStores } from 'pinia'
    import { useWeatherStore } from '@/stores/weather'
    import { typeWeatherDataRequest } from "@/enums/enums"
    export default defineComponent({
        name: "current-view",
        data: ()=>({
            rules: {
              required: (value:string) => !!value || 'Field is required',
            },
            //e6c16550a6494e9f8f6215755241201
            key: "",
            form: false,
            location: "",
            selectedTypeWeatherData: typeWeatherDataRequest
          }),
          computed: {
            ...mapStores(useWeatherStore)
          },
          methods: {
            requestWeather(){
              if (!this.form) return
              this.weatherStore.weatherFetch({key: this.key, location: this.location})
            }
          },
        },
    )
</script>
<style scoped>
.wrapper-input-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>