<template>
<div id="content">
    <scroller :on-refresh="onRefresh" :on-infinite="OnInfinite" ref="content_scroller" >
  <v-card outlined v-for="(card,index) in carddata" :key="card.Title + index" tile :to="'/view/'+card.tid">
    <v-container fluid>
    <v-card-title class="font-weight-bold text-subtitle-1 text-left" style="padding-left:0;padding-top:0;">{{card.Title}}</v-card-title>
    <v-card-text>
        <v-row class="text-left ">
          <span style="display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;text-overflow:ellipsis;overflow:hidden">{{card.Content}}</span>
            <v-img class="rounded" :aspect-ratio="16/9" v-if="card.mixpic" width="100%" :src="card.picurl"></v-img>
        </v-row>
    </v-card-text>
    <v-card-text style="padding-bottom:0.5rem">
        <v-row class="text-left" style="color:rgba(0,0,0,.6)">{{card.hot}}热度 · {{card.replys}}评论<v-spacer></v-spacer>{{card.LastUpdateTime}}</v-row>
    </v-card-text>
    </v-container>
    <div class="custom-divider" style="background-color:rgba(0,0,0,.12);height:0.25rem;width:100%"></div>
  </v-card>
    </scroller>
</div>
</template>
<script>
import {fetchGetIndex} from '../api/index'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
export default {
  name: 'Index',
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  mounted () {
    this.carddata = []
    let postdata = {pagesize: this.pagesize, lasttid: 'none'}
    fetchGetIndex(postdata).then(response => {
      this.carddata = this.carddata.concat(response.data)
      this.lasttid = this.carddata[this.carddata.length - 1]['tid']
    })
  },
  methods: {
    onRefresh (done) {
      console.log('refresh')
      let postdata = {pagesize: this.pagesize, lasttid: 'none'}
      fetchGetIndex(postdata).then(response => {
        console.log(response)
        this.carddata = response.data
        this.lasttid = this.carddata[this.carddata.length - 1]['tid']
        console.log(this.lasttid)
        done(true)
      })
    },
    OnInfinite (done) {
      console.log('infinite')
      if (this.init) {
        this.init = false
        done(true)
        return
      }
      let postdata = {pagesize: this.pagesize, lasttid: this.lasttid}
      fetchGetIndex(postdata).then(response => {
        console.log(response)
        this.carddata = this.carddata.concat(response.data)
        this.lasttid = this.carddata[this.carddata.length - 1]['tid']
        console.log(this.lasttid)
        done(true)
      })
    }
  },
  data () {
    return {
      loading: true,
      pagesize: 10,
      init: true,
      lasttid: 'none',
      carddata: [
        {
          tid: 1,
          Title: '如果用AMD的CPU配上N卡会有什么效果？',
          Content: '我这是测试一下内容，小新测试赛我这是测试一下内容，小新测试赛我这是测试一下内容，小新测试赛我这是测试一下内容，小新测试赛我这是测试一下内容，小新测试赛我这是测试一下内容，小新测试赛',
          PostTimestamp: 1610026871,
          LastUpdateTime: new Date(1610026871000).toLocaleDateString() + ' ' + new Date(1600026871000).toLocaleTimeString(),
          hot: 1854,
          replys: 100,
          mixpic: false,
          picurl: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1620705785,656770412&fm=26&gp=0.jpg'
        },
        {
          tid: 2,
          Title: '如果用AMD的CPU配上N卡会有什么效果？',
          Content: '我这是测试一下内容，小新测试赛我这是测试一下内容，小新测试赛我这是测试一下内容，小新测试赛我这是测试一下内容，小新测试赛我这是测试一下内容，小新测试赛我这是测试一下内容，小新测试赛',
          PostTimestamp: 1610026871,
          LastUpdateTimestamp: new Date(1610026871000).toLocaleDateString() + ' ' + new Date(1600026871000).toLocaleTimeString(),
          hot: 1599,
          replys: 100,
          mixpic: false
        },
        {
          tid: 3,
          Title: '如果用AMD的CPU配上N卡会有什么效果？',
          Content: '我这是测试一下内容，小新测试赛我这是测试一下一下内容，小新测试赛我这是测试一',
          PostTimestamp: 1610026871,
          LastUpdateTimestamp: new Date(1611026871000).toLocaleDateString() + ' ' + new Date(1601026871000).toLocaleTimeString(),
          hot: 0,
          replys: 1,
          mixpic: false
        },
        {
          tid: 4,
          Title: '如果用AMD的CPU配上N卡会有什么效果？',
          Content: '我这是测试一下内容，小新测试赛我这是测试一下内容，小新测试赛我这是测试一下内容，小新测试赛我这是测试一下内容，小新测试赛我这是测试一下内容，小新测试赛我这是测试一下内容，小新测试赛',
          PostTimestamp: 1610026871,
          LastUpdateTimestamp: new Date(1610026871000).toLocaleDateString() + ' ' + new Date(1600026871000).toLocaleTimeString(),
          hot: 2000,
          replys: 100,
          mixpic: false
        },
        {
          tid: 5,
          Title: '如果用AMD的CPU配上N卡会有什么效果？',
          Content: '我这是测试一下内容，小新测试赛我这是测试一下一下内容，小新测试赛我这是测试一',
          PostTimestamp: 1610026871,
          LastUpdateTimestamp: new Date(1611026871000).toLocaleDateString() + ' ' + new Date(1601026871000).toLocaleTimeString(),
          hot: 0,
          replys: 1,
          mixpic: false
        }
      ]
    }
  }
}
</script>
