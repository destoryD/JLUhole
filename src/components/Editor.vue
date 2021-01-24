<template>
    <quill-editor id="myTextEditor" v-model="content" ref="myTextEditor" :options="editorOption" class="my-3">
         <div ref="toolbar" id="toolbar" slot="toolbar" style="width:100%;z-index:999;position:fixed;bottom:0;background-color:white">
            <!-- Add a bold button -->
    <v-expand-transition>
            <v-row style="display:flex;justify-content:space-between;margin:6px" v-show="customEditorOption.pretendactive">
            <v-button icon v-for="(item, index) in customEditorOption.pretendtoobar.components" :key="index" @click="()=>{pretendclick(index),changeattr(item.value,item.active?item.onattr:item.offattr)}"><v-icon :style="item.active ? 'color:#06c':''">{{item.icon}}</v-icon></v-button>
            <button class="ql-formula" title="引用"></button>
            </v-row>
    </v-expand-transition>
            <v-row style="display:flex;justify-content:space-between;margin:6px">
                <v-button icon  @click="pretendextend"><v-icon :style="this.customEditorOption.pretendtoobar.activecount? 'color:#06c':''">mdi-format-letter-case</v-icon></v-button>
            <v-button icon v-for="(item, index) in customEditorOption.fontsizes" :key="item.label + index" @click="()=>{changeattr('size', item.value),customEditorOption.fontactive=index}" ><v-icon :style="customEditorOption.fontactive===index ? 'color:#06c':''">{{item.icon}}</v-icon></v-button>
            <!--Add list -->
            <!-- Add font size dropdown -->
            <!-- Add subscript and superscript buttons -->
            <!-- <v-button icon title="照片"><v-icon>mdi-image-multiple</v-icon></v-button> -->
            <v-button icon @click="upload"><v-icon>mdi-image-multiple</v-icon><input ref="imageupload" type="file" style="display:none" accept="image/gif,image/jpeg,image/jpg,image/png" @change="onUploadChange('image')"></v-button>
            <v-button icon @click="plusextend"><v-icon :style="customEditorOption.plusactive?'color:#06c':''">{{customEditorOption.plusactive?'mdi-minus-circle':'mdi-plus-circle'}}</v-icon></v-button>
            </v-row>
                <v-expand-transition>
            <v-row style="display:flex;justify-content:space-between;margin:6px;float:right" v-show="customEditorOption.plusactive">
            <v-button icon ><v-icon disabled >mdi-video</v-icon><input ref="videoupload" type="file" style="display:none" accept="video/mp4" @change="onUploadChange('video')"></v-button>
            </v-row>
                </v-expand-transition>
          </div>
    </quill-editor>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { Quill, quillEditor } from 'vue-quill-editor'
import { ImageDrop } from 'quill-image-drop-module'
import ImageResize from 'quill-image-resize-module'
import katex from 'katex'
import 'katex/dist/katex.min.css'
Quill.register('modules/imageDrop', ImageDrop)
Quill.register('modules/imageResize', ImageResize)
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
      overlay: false,
      uploading: false,
      uploadingprogress: 69,
      editorOption: {
        placeholder: '编辑文章内容',
        modules: {
          formula: true,
          toolbar: {
            container: '#toolbar'
          },
          imageDrop: true,
          imageResize: {
            displayStyles: {
              backgroundColor: 'black',
              border: 'none',
              color: 'white'
            },
            handleStyles: {
              border: '1px solid #06c',
              width: '16px',
              height: '16px'
            },
            modules: ['Resize', 'DisplaySize', 'Toolbar']
          }
        },
        theme: 'snow'
      },
      customEditorOption: {
        plusactive: false,
        pretendactive: false,
        fontactive: 0,
        pretendtoobar: {
          activecount: 0,
          components: [
            {
              label: '加粗',
              icon: 'mdi-format-bold',
              value: 'bold',
              active: false,
              onattr: 'true',
              offattr: ''
            },
            {
              label: '斜体',
              icon: 'mdi-format-italic',
              value: 'italic',
              active: false,
              onattr: 'true',
              offattr: ''
            },
            {
              label: '下划线',
              icon: 'mdi-format-strikethrough',
              value: 'strike',
              active: false,
              onattr: 'true',
              offattr: ''
            },
            {
              label: '引用',
              icon: 'mdi-format-quote-close',
              value: 'blockquote',
              active: false,
              onattr: 'true',
              offattr: ''
            }
          ]
        },
        fontsizes: [{
          label: '小',
          value: '1rem',
          icon: 'mdi-alpha-s-box-outline'
        },
        {
          label: '中',
          value: '1.5rem',
          icon: 'mdi-alpha-l-box-outline'
        }]
      }
    }
  },
  mounted: function () {
    this.$refs.myTextEditor.quill.on('editor-change', (eventName, ...args) => {
      if (eventName === 'text-change') {
        this.customEditorOption.pretendactive = false
        // args[0] will be delta
      } else if (eventName === 'selection-change') {
        // args[0] will be old range
      }
    })
  },
  methods: {
    changeattr (attr, value) {
      this.$refs.myTextEditor.quill.format(attr, value)
    },
    upload () {
      this.$refs.imageupload.dispatchEvent(new MouseEvent('click'))
    },
    upload2 () {
      this.$refs.videoupload.dispatchEvent(new MouseEvent('click'))
    },
    plusextend () {
      this.customEditorOption.plusactive = !this.customEditorOption.plusactive
      if (this.customEditorOption.plusactive) {
        this.$refs.toolbar.style.height = 'auto'
      } else {

      }
    },
    pretendextend () {
      this.customEditorOption.pretendactive = !this.customEditorOption.pretendactive
    },
    pretendclick (index) {
      this.customEditorOption.pretendtoobar.components[index].active = !this.customEditorOption.pretendtoobar.components[index].active
      if (this.customEditorOption.pretendtoobar.components[index].active) {
        this.customEditorOption.pretendtoobar.activecount += 1
      } else {
        this.customEditorOption.pretendtoobar.activecount -= 1
      }
      console.log(this.customEditorOption.pretendtoobar)
    },
    onUploadChange (type) {
      let inputfile
      if (type === 'image') {
        inputfile = this.$refs.imageupload.files[0]
        if (inputfile === null) return
        let reader = new FileReader()
        reader.readAsDataURL(inputfile)
        reader.onload = (e) => {
          let index = 0
          if (this.$refs.myTextEditor.quill.getSelection() !== null) index = this.$refs.myTextEditor.quill.getSelection().index
          this.$refs.myTextEditor.quill.insertText(index, '\n')
          this.$refs.myTextEditor.quill.insertEmbed(index + 1, type, reader.result)
          this.$refs.myTextEditor.quill.insertText(index + 2, '\n')
          this.$refs.myTextEditor.quill.setSelection(index + 3)
          this.$vuetify.goTo('.ql-editor', {offset: -this.$refs.myTextEditor.$refs.editor.scrollHeight})
          console.log(this.$refs.myTextEditor.$refs.editor.scrollHeight)
          console.log(this.$refs.toolbar)
          // let element = document.querySelector('#myTextEditor')
          // element.scrollIntoView(false)
        }
      } else {
        this.uploading = true
        inputfile = this.$refs.videoupload.files[0]
        setTimeout(() => {
          this.uploading = false
        }, 1000)
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
    letter-spacing: 0.1rem
}
.ql-editor {
  padding-bottom: 44px;
}
</style>
