<template>
<div>
  <TopBar></TopBar>
    <ViewContent></ViewContent>
</div>
</template>

<script>
import ViewContent from '@/components/ViewContent'
import TopBar from '@/components/TopBar'
export default {
  name: 'ViewPost',
  components: {
    ViewContent,
    TopBar
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
