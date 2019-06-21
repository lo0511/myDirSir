<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import HomePage from './components/homepage'
// 引入axios
export default {
  name: 'App'
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
