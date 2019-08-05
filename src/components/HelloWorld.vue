<template>
  <div class="hello">
    <div class='fin-tabs'>
      <div class="ea"
           :style="{color: activeName==='wdzj' ? 'blue': ''}"
           @click="selectDataS('wdzj')">网贷之家</div>
      <div class="ea"
           :style="{color: activeName==='iyiou' ? 'blue': ''}"
           @click="selectDataS('iyiou')">亿欧数据</div>
      <div class="ea"
           :style="{color: activeName==='huxiu' ? 'blue': ''}"
           @click="selectDataS('huxiu')">虎嗅数据</div>
    </div>
    <div v-loading="loading">
      <a :key="k"
         class="fin-content"
         :href="v.url"
         target="_blank"
         v-for="(v, k) in essayList">
        <span>{{k+1}}、{{v.title}} | {{v.time}}</span>
      </a>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: {
    msg: String
  },
  data () {
    return {
      activeName: 'wdzj',
      essayList: [],
      loading: false
    }
  },
  created () {
    this.getEssayList(this.activeName)
  },
  methods: {
    async getEssayList (category) {
      this.loading = true
      const result = await axios.get(`http://localhost:8080/fin/${category}`)
      this.loading = false
      if (result && result.data.success) {
        this.essayList = result.data.data.list
      }
    },
    jump (url) {
      window.open(url, "_top")
    },
    selectDataS (v) {
      this.activeName = v
      this.getEssayList(v)
    }
  }
}
</script>
<style scoped>
.fin-tabs {
  margin-top: 10px;
  margin-bottom: 5px;
  padding-bottom: 5px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #efefef;
}
.fin-tabs .ea {
  padding-left: 4px;
  padding-right: 4px;
  cursor: pointer;
}
.fin-tabs .ea:hover {
  color: blue;
}
.fin-content {
  display: block;
  text-align: left;
  padding-left: 5px;
  cursor: pointer;
  line-height: 32px;
}
</style>
