<template>
    <div>
        <post-bar></post-bar>
        <v-skeleton-loader type="article">
          <div id="alert">
                <v-alert
      dense
      outlined
      type="info"
    >
      发布树洞前请先阅读 <strong><router-link to='/' style="text-decoration:none">树洞守则</router-link></strong>
    </v-alert>
          </div>
        <v-text-field  solo placeholder="请输入标题" hide-details></v-text-field>
        <editor></editor>
        <v-divider></v-divider>
        <v-chip-group color="#06c" v-model="active" class="pa-1 mb-13" >
            <v-chip outlined :input-value="chip.choose" filter  pill v-for="chip in chips" :key="chip.id">{{chip.label}}</v-chip>
        </v-chip-group>
        </v-skeleton-loader>
    </div>
</template>
<script>
import PostContent from '@/components/PostContent'
import PostBar from '../components/PostBar.vue'
import Editor from '../components/Editor.vue'
export default {
  components: { PostContent, PostBar, Editor },
  name: 'Post',
  mounted () {
    console.log(this.active)
  },
  watch: {
    active (val) {
      if (this.active === undefined) console.log('未定义')
    }
  },
  data () {
    return ({
      active: 0,
      chips: [
        {
          id: 1,
          label: '#情感',
          choose: false
        },
        {
          id: 2,
          label: '#吐槽',
          choose: false
        },
        {
          id: 3,
          label: '#求助',
          choose: false
        }
      ]
    })
  },
  methods: {
  }
}
</script>
