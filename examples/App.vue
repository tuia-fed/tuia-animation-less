<template>
  <div class="demo-box">
    <DemoNav />
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
import DemoNav from './components/DemoNav'

export default ({
  components: {
    DemoNav
  }
})
</script>
<style lang="less">
@import './common/style/base.less';
</style>
