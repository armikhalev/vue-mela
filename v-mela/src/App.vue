<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import navBar from '@/components/Nav-bar.vue'

export default {
  name: 'app',
  components: {
    navBar
  }
}
</script>

<style lang="scss">
  @import './assets/styles/app.scss';
</style>
