<template>
<div>
  <TopBar></TopBar>
    <ViewContent></ViewContent>
    <ReplyBar></ReplyBar>
</div>
</template>

<script>
import ViewContent from '@/components/ViewContent'
import TopBar from '@/components/TopBar'
import ReplyBar from '../components/ReplyBar.vue'
export default {
  name: 'ViewPost',
  components: {
    ViewContent,
    TopBar,
    ReplyBar
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
