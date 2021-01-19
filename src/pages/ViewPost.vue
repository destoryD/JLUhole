<template>
<v-app-bar app>
  <TopBar></TopBar>
</v-app-bar>
</template>

<script>
import PostContent from '@/components/PostContent'
import TopBar from '@/components/TopBar'
export default {
  name: 'ViewPost',
  components: {
    PostContent,
    TopBar
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
