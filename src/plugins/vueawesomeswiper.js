import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style (>= Swiper 6.x)
import 'swiper/swiper-bundle.css'

const opts = {
  autoHeight: true
}
Vue.use(VueAwesomeSwiper, opts /* { default options with global component } */)
