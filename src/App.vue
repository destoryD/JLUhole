<template>
<div id ="app">
  <v-app>
    <keep-alive>
    <router-view/>
    </keep-alive>
  </v-app>
</div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      dialog: false
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
