<template>
    <v-app-bar app flat hide-on-scroll>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-row       align="center"
      justify="center" style="padding-left:1rem">
      <v-text-field
      id="searchbox"
        hide-details
        solo
        dense
        append-icon="mdi-magnify"
        single-line
        class="rounded-pill"
        justify="center"
        style=""
        placeholder="吉林大学树洞正式开通了"
      ></v-text-field>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
        </v-row>
    </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      text: ''
    }
  }
}
</script>
