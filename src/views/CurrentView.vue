<template>
  <p>{{ getCurrent }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState } from 'pinia'
import { useWeatherStore } from '@/stores/weather'

export default defineComponent({
  name: "current-view",
  computed: {
    ...mapState(useWeatherStore, ["getCurrent"]),
  },
})
</script>

<style scoped>
</style>
