<template>
<v-container>
    <AppBar> </AppBar>
</v-container>
</template>

<script>
import AppBar from '@/components/AppBar'
export default {
  name: 'Index',
  components: {
    AppBar
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
