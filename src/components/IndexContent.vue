<template>
<div id="content">
    <scroller :on-refresh="onRefresh" :on-infinite="OnInfinite" ref="content_scroller" >
  <v-card outlined v-for="(card,index) in carddata" :key="card.Title + index" tile>
    <v-container fluid>
    <v-card-title class="font-weight-bold text-subtitle-1 text-left" style="padding-left:0;padding-top:0;">{{card.Title}}</v-card-title>
    <v-card-text>
        <v-row class="text-left ">
          <span style="display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;text-overflow:ellipsis;overflow:hidden">{{card.Content}}</span>
            <v-img class="rounded" :aspect-ratio="16/9" v-if="card.mixpic" width="100%" :src="card.picurl"></v-img>
        </v-row>
    </v-card-text>
    <v-card-text style="padding-bottom:0.5rem">
        <v-row class="text-left" style="color:rgba(0,0,0,.6)">{{card.hot}}热度 · {{card.posts}}评论<v-spacer></v-spacer>{{card.LastUpdateTimestamp}}</v-row>
    </v-card-text>
    </v-container>
    <div class="custom-divider" style="background-color:rgba(0,0,0,.12);height:0.25rem;width:100%"></div>
  </v-card>
    </scroller>
</div>
</template>
<script>
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
  methods: {
    onRefresh (done) {
      console.log('refresh')
      setTimeout(() => {
        done(true)
      }, 1000)
    },
    OnInfinite (done) {
      console.log('infinite')
      setTimeout(() => {
        done(true)
      }, 1000)
    }
  },
  data () {
    return {
      loading: true,
      carddata: [
        {
          Title: '如果用AMD的CPU配上N卡会有什么效果？',
          Content: '我这是测试一下内容，小新测试赛我这是测试一下内容，小新测试赛我这是测试一下内容，小新测试赛我这是测试一下内容，小新测试赛我这是测试一下内容，小新测试赛我这是测试一下内容，小新测试赛',
          PostTimestamp: 1610026871,
          LastUpdateTimestamp: new Date(1610026871000).toLocaleDateString() + ' ' + new Date(1600026871000).toLocaleTimeString(),
          hot: 1854,
          posts: 100,
          mixpic: false,
          picurl: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1620705785,656770412&fm=26&gp=0.jpg'
        },
        {
          Title: '如果用AMD的CPU配上N卡会有什么效果？',
          Content: '我这是测试一下内容，小新测试赛我这是测试一下内容，小新测试赛我这是测试一下内容，小新测试赛我这是测试一下内容，小新测试赛我这是测试一下内容，小新测试赛我这是测试一下内容，小新测试赛',
          PostTimestamp: 1610026871,
          LastUpdateTimestamp: new Date(1610026871000).toLocaleDateString() + ' ' + new Date(1600026871000).toLocaleTimeString(),
          hot: 1599,
          posts: 100,
          mixpic: false
        },
        {
          Title: '如果用AMD的CPU配上N卡会有什么效果？',
          Content: '我这是测试一下内容，小新测试赛我这是测试一下一下内容，小新测试赛我这是测试一',
          PostTimestamp: 1610026871,
          LastUpdateTimestamp: new Date(1611026871000).toLocaleDateString() + ' ' + new Date(1601026871000).toLocaleTimeString(),
          hot: 0,
          posts: 1,
          mixpic: false
        },
        {
          Title: '如果用AMD的CPU配上N卡会有什么效果？',
          Content: '我这是测试一下内容，小新测试赛我这是测试一下内容，小新测试赛我这是测试一下内容，小新测试赛我这是测试一下内容，小新测试赛我这是测试一下内容，小新测试赛我这是测试一下内容，小新测试赛',
          PostTimestamp: 1610026871,
          LastUpdateTimestamp: new Date(1610026871000).toLocaleDateString() + ' ' + new Date(1600026871000).toLocaleTimeString(),
          hot: 2000,
          posts: 100,
          mixpic: false
        },
        {
          Title: '如果用AMD的CPU配上N卡会有什么效果？',
          Content: '我这是测试一下内容，小新测试赛我这是测试一下一下内容，小新测试赛我这是测试一',
          PostTimestamp: 1610026871,
          LastUpdateTimestamp: new Date(1611026871000).toLocaleDateString() + ' ' + new Date(1601026871000).toLocaleTimeString(),
          hot: 0,
          posts: 1,
          mixpic: false
        }
      ]
    }
  }
}
</script>
