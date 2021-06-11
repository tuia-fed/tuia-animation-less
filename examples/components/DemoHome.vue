<template>
  <div class="demo-home">
    <h1 class="demo-home__title">
      <img :src="publicPath" alt="" />
      <span>Less动画库</span>
    </h1>
    <h2 class="demo-home__desc">
      丰富、可靠的移动端动画库
    </h2>
    <template v-if="group.length">
      <demo-home-nav v-for="item in group" :key="item.group" :group="item" />
    </template>
  </div>
</template>
<script>
import DemoHomeNav from './DemoHomeNav'

export default ({
  components: {
    DemoHomeNav
  },
  data() {
    return {
      group: [],
    }
  },
  computed: {
    publicPath() {
      return `${process.env.BASE_URL}logo.png`
    }
  },
  created() {
    window.addEventListener('message', e => {
      if (!e.data || e.data.type === 'webpackOk' || !e.data.filter) return
      this.group = e.data.filter(item => !(/引导$/).test(item.group))
    })
  }
})
</script>
<style lang="less" scoped>
@import '../common/style/demo-home.less';
</style>
