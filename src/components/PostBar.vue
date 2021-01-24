<template>
  <v-card flat>
    <v-app-bar app flat dense>
              <v-btn icon>
                  <v-icon>mdi-arrow-left</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <span>{{this.title}}</span>
              <v-spacer></v-spacer>
              <v-btn icon @click="showDetails">
                  <v-icon color="#06c">mdi-alert-circle-outline</v-icon>
              </v-btn>
    </v-app-bar>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      msg: '',
      title: '发表树洞'
    }
  },
  methods: {
    showDetails () {
      console.log('123')
    }
  }
}
</script>

<style>

</style>
