<template>
<v-card>
    <v-app-bar app flat hide-on-scroll elevate-on-scroll >
              <v-btn icon>
        <v-icon large >mdi-home-variant </v-icon>
      </v-btn>
        <v-row       align="center"
      justify="center" style="padding:1rem">
      <v-text-field
      v-model="searchtext"
      id="searchbox"
        hide-details
        solo
        dense
        append-icon="mdi-magnify"
        single-line
        class="rounded-pill"
        justify="center"
        style="text-indext:1rem"
        placeholder="吉林大学树洞正式开通了"
      ></v-text-field>
        </v-row>
              <v-btn icon>
        <v-icon large color="#64B5F6">mdi-plus-circle</v-icon>
      </v-btn>
      <template v-slot:extension>
        <v-tabs v-model="tabselected"
         align-with-titles>
          <v-tabs-slider color="transparent"></v-tabs-slider>
          <v-tab v-for="tabitem in tabitems" :key="tabitem.label" v-show="tabitem.active" @click="tabselect">{{tabitem.label}}</v-tab>
        </v-tabs>
                          <v-btn icon>
        <v-icon color="black" >mdi-magnify </v-icon>
      </v-btn>
      </template>
    </v-app-bar>
</v-card>
</template>

<script>
export default {
  name: 'AppBar',
  data () {
    return {
      searchtext: '',
      tabselected: 1,
      tabitems: [
        {
          label: '热榜',
          active: true
        },
        {
          label: '推荐',
          active: true
        },
        {
          label: '最新',
          active: true
        }
      ]
    }
  },
  methods: {
    tabselect () {
      // console.log(this.tabselected)
    }
  }
}
</script>
