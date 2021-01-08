<template>
<v-app>
  <Editor></Editor>
</v-app>
</template>

<script>
import Editor from '@/components/Editor'
export default {
  name: 'Test',
  components: {
    Editor
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
