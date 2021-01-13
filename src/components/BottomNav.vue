<template>
    <v-bottom-navigation
     grow
      fixed
      horizontal
      v-model="value"
      :input-value="active"
      align-center
    >
        <v-row style="display:flex;justify-content:space-between;margin:10px">
            <v-button icon v-for="(item,index) in components" :key="item+index" @click="chooseNav(index)"><v-badge
        :content="item.msgcount"
        :value="item.msgcount"
        color="green"
        overlap
        :style="item.msgcount"
      ><v-icon :style="item.active?item.onstyle:''">{{getIcon(index)}}</v-icon></v-badge><br><span style="font-size:0.8rem;text-align:center;">{{item.label}}</span></v-button>
        </v-row>
    </v-bottom-navigation>
</template>
<script>
export default {
  name: 'BottomNav',
  data () {
    return {
      msg: '123',
      active: true,
      value: 1,
      components: [
        {
          label: '首页',
          icon: 'mdi-home-outline',
          activeicon: 'mdi-home',
          active: false,
          onstyle: 'color:black',
          msgcount: 0
        },
        {
          label: '探索',
          icon: 'mdi-moon-new',
          activeicon: 'mdi-moon-full',
          active: true,
          onstyle: 'color:black',
          msgcount: 0
        },
        {
          label: '我的',
          icon: 'mdi-account-outline',
          activeicon: 'mdi-account',
          active: false,
          onstyle: 'color:black',
          msgcount: 1
        }
      ]
    }
  },
  methods: {
    getIcon (componentindex) {
      if (this.components[componentindex].active) {
        return this.components[componentindex].activeicon
      } else {
        return this.components[componentindex].icon
      }
    },
    chooseNav (componentindex) {
      this.components.forEach((item) => {
        item.active = false
      })
      this.components[componentindex].active = true
    }
  }
}
</script>
