<template>
<v-app>
    <AppBar> </AppBar>
      <IndexContent></IndexContent>
</v-app>
</template>

<script>
import AppBar from '@/components/AppBar'
import IndexContent from '@/components/IndexContent'
export default {
  name: 'Index',
  components: {
    AppBar,
    IndexContent
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
