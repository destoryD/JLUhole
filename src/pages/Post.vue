<template>
    <div>
        <post-bar></post-bar>
        <v-text-field  solo placeholder="请输入标题" hide-details></v-text-field>
        <editor></editor>
    </div>
</template>
<script>
import PostContent from '@/components/PostContent'
import PostBar from '../components/PostBar.vue'
import Editor from '../components/Editor.vue'
export default {
  components: { PostContent, PostBar, Editor },
  name: 'Post',
  data () {
    return ({
      msg: ''
    })
  }
}
</script>
