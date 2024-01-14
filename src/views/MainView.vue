<template>
    <v-sheet class="w-100 h-100 pa-3 transparent">
        <slot></slot>
    </v-sheet>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
export default defineComponent({
  name: "main-view"
})
</script>

<style scoped>

</style>