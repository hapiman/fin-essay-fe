<template>
  <div id="app">
    <img alt="Vue logo"
         width="100%"
         :src="topimg">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import top01 from './assets/top01.jpg'
import top02 from './assets/top02.jpg'
import top03 from './assets/top03.jpg'
import top04 from './assets/top04.jpg'
import _ from 'lodash'
export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data () {
    return {
      imgurl: ''
    }
  },
  created () {
    const imgs = [top04, top03, top02, top01]
    this.topimg = imgs[_.random(0, imgs.length - 1)]
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  margin-top: 0px;
  margin-left: auto;
  margin-right: auto;
  width: 640px;
}
</style>
