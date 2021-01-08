<template>
    <quill-editor v-model="content" ref="myTextEditor" :options="editorOption">
         <div id="toolbar" slot="toolbar" style="width:100%;display:flex;justify-content:space-between;z-index:999;position:fixed;bottom:0">
            <!-- Add a bold button -->
            <button class="ql-bold" title="加粗">Bold</button>
            <button class="ql-underline" title="下划线">underline</button>
            <button class="ql-strike" title="删除线">strike</button>
            <button class="ql-blockquote" title="引用"></button>
            <button class="ql-code-block" title="代码"></button>
            <v-button icon v-for="(item, index) in customEditorOption.fontsizes" :key="item.label + index" @click="()=>{changeattr('size', item.value),customEditorOption.fontactive=index}" ><v-icon :style="customEditorOption.fontactive===index ? 'color:#06c':''">{{item.icon}}</v-icon></v-button>
            <!--Add list -->
            <!-- Add font size dropdown -->
            <!-- Add subscript and superscript buttons -->
            <!-- <v-button icon title="照片"><v-icon>mdi-image-multiple</v-icon></v-button> -->
            <v-button icon @click="uploadimage"><v-icon>mdi-image-multiple</v-icon><input ref="imageupload" type="file" style="display:none" accept="image/gif,image/jpeg,image/jpg,image/png" @change="onImgChange"></v-button>
          </div>
    </quill-editor>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { Quill, quillEditor } from 'vue-quill-editor'
import katex from 'katex'
import 'katex/dist/katex.min.css'
const win = window
win.katex = katex // 挂载katex到window，必须
let Size = Quill.import('attributors/style/size')
console.log(Size)
Size.whitelist = ['1rem', '1.5rem', '2rem']
Quill.register(Size, true)
export default {
  name: 'Editor',
  components: {
    quillEditor
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      content: null,
      editorOption: {
        placeholder: '编辑文章内容',
        modules: {
          formula: true,
          toolbar: {
            container: '#toolbar'
          }
        },
        theme: 'snow'
      },
      customEditorOption: {
        fontactive: 0,
        fontsizes: [{
          label: '小',
          value: '1rem',
          icon: 'mdi-alpha-s-box-outline',
        },
        {
          label: '中',
          value: '1.5rem',
          icon: 'mdi-alpha-l-box-outline',
        }]
      }
    }
  },
  methods: {
    changeattr (attr, value) {
      this.$refs.myTextEditor.quill.format(attr, value)
    },
    uploadimage () {
      this.$refs.imageupload.dispatchEvent(new MouseEvent('click'))
    },
    onImgChange () {
      let inputfile = this.$refs.imageupload.files[0]
      let reader = new FileReader()
      reader.readAsDataURL(inputfile)
      reader.onload = (e) => {
        this.$refs.myTextEditor.quill.insertEmbed(this.$refs.myTextEditor.quill.getLength(), 'image', reader.result)
      }
    }
  }
}
</script>
<style>
.ql-toolbar.ql-snow + .ql-container.ql-snow {
  border: 1px solid #ccc !important;
}
.ql-container {
    font-size:1rem;
}
</style>
