<template>
<v-app>
    <AppBar> </AppBar>
    <div id="alert"></div>
    <IndexContent></IndexContent>
      <BottomNav></BottomNav>
</v-app>
</template>

<script>
import AppBar from '@/components/AppBar'
import IndexContent from '@/components/IndexContent'
import BottomNav from '@/components/BottomNav'
export default {
  name: 'Index',
  components: {
    AppBar,
    IndexContent,
    BottomNav
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style scoped>
.swiper-wrapper {
  height:100%
}
</style>
