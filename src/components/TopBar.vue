<template>
  <v-card>
          <v-app-bar  app flat>
              <v-btn icon>
                  <v-icon>mdi-arrow-left</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <span style="display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;text-overflow:ellipsis;overflow:hidden">{{this.title}}</span>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>
                  mdi-magnify
                </v-icon>
              </v-btn>
          </v-app-bar>
  </v-card>
</template>

<script>
export default {
  mounted () {
    // console.log(this.title)
  },
  data () {
    return {
      title: '如何看待AMD比N卡复杂的原因',
      content: '',
      msg: ''
    }
  }
}
</script>

<style>

</style>
