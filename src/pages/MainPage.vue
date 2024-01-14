<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header>
    <div class="header__logo"></div>
    <nav class="header__nav">
      <RouterLink class="header__nav__link" to="/">Current</RouterLink>
      <RouterLink class="header__nav__link" to="/forecast">Forecast</RouterLink>
      <RouterLink class="header__nav__link" to="/future">Future</RouterLink>
      <RouterLink class="header__nav__link" to="/history">History</RouterLink>
      <RouterLink class="header__nav__link" to="/marine">Marine</RouterLink>
      <RouterLink class="header__nav__link" to="/search">Search</RouterLink>
      <RouterLink class="header__nav__link" to="/ip">IP</RouterLink>
      <RouterLink class="header__nav__link" to="/timezone">Timezone</RouterLink>
      <RouterLink class="header__nav__link" to="/astronomy">Astronomy</RouterLink>
    </nav>
  </header>

  <RouterView />
  <footer>
    <div class="footer__copyright">© 2024 Anton Novoselov</div>
  </footer>
</template>
<style scoped>
</style>
