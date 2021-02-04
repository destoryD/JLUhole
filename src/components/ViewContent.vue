<template>

    <div>
        <v-skeleton-loader
        type="card-heading,divider,list-item-three-line">
        <v-card flat style="text-align:left">
            <v-card-title style="font-weight:bold">{{title}}</v-card-title>
            <v-divider></v-divider>
            <v-container v-html="html">
            </v-container>
        </v-card>
        <v-divider></v-divider>
        <div>
        <v-container fluid>
        <v-card flat style="text-align:left" elevation="2" >
            <v-card-subtitle class="text-subtitle-2">#50641
              <v-btn icon small style="float:right">
                <v-icon>mdi-dots-horizontal</v-icon>
              </v-btn>
            </v-card-subtitle>
            <v-card-text class="text-body-2 ma-0">通过分组来删除呢 效果会不会好点
            </v-card-text>
                                      <v-card-actions class="pl-4">
                                        <span class="text-caption" style="color:rgba(0,0,0,0.6)">2021年1月31日 00:07:48</span>
                                        <v-spacer></v-spacer>
                                                                    <v-btn small plain class="ma-0">
                <v-icon small>mdi-message-reply-text-outline</v-icon>
                <v-spacer></v-spacer>2
              </v-btn>
              <v-btn small plain class="ma-0">
                <v-icon small>mdi-arrow-up-bold-outline</v-icon>
                <v-spacer></v-spacer>
                1
              </v-btn>
                            <v-btn small plain class="ma-0">
                <v-icon small>mdi-arrow-down-bold-outline</v-icon>
              </v-btn>
            </v-card-actions>
        </v-card>
        </v-container>
        </div>
        </v-skeleton-loader>
    </div>
</template>

<script>
export default {
  name: 'ViewContent',
  data () {
    return ({
      msg: '',
      loading: true,
      title: '作为一个白帽子，你是如何挖到第一个洞的呢？',
      html: '<p></p><p>123</p><p>测试一下</p><p>TPO123</p><p>xxx</p>'
    })
  }
}
</script>
<style>
.postid{
  color: black !important;
}
</style>
