<template>
  <v-card flat>
          <v-app-bar  app flat dense>
              <v-btn icon>
                  <v-icon>mdi-arrow-left</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <span style="display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;text-overflow:ellipsis;overflow:hidden;letter-spacing:0.15rem;">{{this.title}}</span>
              <v-spacer></v-spacer>
      <v-menu
        right
        bottom
        auto
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="item in items"
            :key="item.id"
            @click="() => {}"
          >
            <v-btn icon><v-icon>{{ item.icon }}</v-icon></v-btn>
            {{item.label}}
          </v-list-item>
        </v-list>
      </v-menu>
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
      title: '',
      content: '',
      msg: '',
      items: [
        {
          id: 1,
          label: '刷新',
          icon: 'mdi-refresh',
          action: ''
        },
        {
          id: 2,
          label: '分享',
          icon: 'mdi-share',
          action: ''
        },
        {
          id: 3,
          label: '举报',
          icon: 'mdi-alert',
          action: ''
        }
      ]
    }
  }
}
</script>

<style>

</style>
