<template>
<div id="content">
  <v-card outlined v-for="card in carddata" :key="card.Title">
    <v-container fluid>
    <v-card-title class="font-weight-bold text-subtitle-1 text-left" style="padding-left:0;padding-top:0;">{{card.Title}}</v-card-title>
    <v-card-text>
        <v-row class="text-left " style="height:2.5rem;text-overflow:ellipsis;overflow:hidden">{{card.Content}}</v-row>
    </v-card-text>
    <v-card-text style="padding-bottom:0.5rem">
        <v-row class="text-left" style="color:rgba(0,0,0,.6)">{{card.hot}}热度 · {{card.posts}}评论</v-row>
    </v-card-text>
    </v-container>
    <div class="custom-divider" style="background-color:rgba(0,0,0,.12);height:0.25rem;width:100%"></div>
  </v-card>
</div>
</template>
<script>
export default {
  name: 'Index',
  data () {
    return {
      carddata: [
        {
          Title: '如果用AMD的CPU配上N卡会有什么效果？',
          Content: '我这是测试一下内容，小新测试赛我这是测试一下内容，小新测试赛我这是测试一下内容，小新测试赛我这是测试一下内容，小新测试赛我这是测试一下内容，小新测试赛我这是测试一下内容，小新测试赛',
          PostTimestamp: 1610026871,
          LastUpdateTimestamp: 1610026871,
          hot: 2000,
          posts: 100
        },
        {
          Title: '如果用AMD的CPU配上N卡会有什么效果？',
          Content: '我这是测试一下内容，小新测试赛我这是测试一下内容，小新测试赛我这是测试一下内容，小新测试赛我这是测试一下内容，小新测试赛我这是测试一下内容，小新测试赛我这是测试一下内容，小新测试赛',
          PostTimestamp: 1610026871,
          LastUpdateTimestamp: 1610026871,
          hot: 2000,
          posts: 100
        },
        {
          Title: '如果用AMD的CPU配上N卡会有什么效果？',
          Content: '我这是测试一下内容，小新测试赛我这是测试一下内容，小新测试赛我这是测试一下内容，小新测试赛我这是测试一下内容，小新测试赛我这是测试一下内容，小新测试赛我这是测试一下内容，小新测试赛',
          PostTimestamp: 1610026871,
          LastUpdateTimestamp: 1610026871,
          hot: 0,
          posts: 1
        }
      ]
    }
  }
}
</script>
