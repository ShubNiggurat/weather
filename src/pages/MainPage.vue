<template>
  <header>
    <div class="header__logo"></div>
    <nav class="header__nav">
      <RouterLink v-for="(requestType, index) in requestTypes" 
        :key="requestType" 
        class="header__nav__link" 
        :to="index === 0 ? '/' : `/${requestType}`"
      >
      {{ capitalizeText(requestType) }}
      </RouterLink>
    </nav>
  </header>
  <div class="w-100 h-100 wrapper-current pa-3">
    <div class="w-100 h-100 pa-3 transparent">
      <VariablesInputRequest></VariablesInputRequest>
    </div>
    <MainView>
      <RouterView />
    </MainView>
  </div>
  <footer>
    <div class="footer__copyright">© 2024 Anton Novoselov</div>
  </footer>
</template>

<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { defineComponent } from 'vue'
import { useWeatherStore } from '@/stores/weather'
import { mapStores } from 'pinia'
import { typeWeatherDataRequest } from "@/enums/enums"
import VariablesInputRequest from '@/components/VariablesInputRequest.vue';
import MainView from "@/views/MainView.vue"
import { capitalize } from '@/utils/textFormatting'

export default defineComponent({
        name: "current-view",
        components: {
          RouterLink,
          RouterView,
          VariablesInputRequest,
          MainView
        },
        mixins: [],
        mounted(){
          this.setTyperequest(this.$route.path);
        },
        computed: {
          ...mapStores(useWeatherStore),
          requestTypes(){
            return Object.values(typeWeatherDataRequest)
          }
        },
        watch: {
          '$route.path': {
            handler: function(path) {this.setTyperequest(path)},
            deep: true
          }
        },
        methods: {
          setTyperequest(path: string){
            this.weatherStore.setCurrentTypeRequest((path === "/" ? typeWeatherDataRequest.CURRENT : path.substring(1)) as typeWeatherDataRequest)
          },
          capitalizeText(str: string){
            return capitalize(str)
          }
        }
})
</script>

<style scoped>
.wrapper-current {
    background-color: rgba(0,0,0,0);
    display: grid;
    grid-template-columns: 1fr 4fr;
    column-gap: 1rem
  }
</style>
