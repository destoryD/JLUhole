<template>
<v-footer fixed  padless>
  <v-card flat>
    <v-toolbar  app  dense bottom >
                  <v-text-field
                  solo
                  dense
                  hide-details
                  filled
                  rounded
                  prepend-inner-icon="mdi-message-reply-outline"
                  placeholder="回复一下"
                  >
                  </v-text-field>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                                        <v-badge  overlap :value="'1'" :content="'1'" color="rgba(0,0,0,0.6)" >
                      <v-icon>mdi-message-reply-text-outline</v-icon>
                      </v-badge>
                  </v-btn>
                  <v-btn icon>
                      <v-icon>mdi-share</v-icon>
                  </v-btn>
                                    <v-btn icon>
                      <v-icon>mdi-share</v-icon>
                  </v-btn>
    </v-toolbar>
  </v-card>
</v-footer>
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
    },
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style>

</style>
