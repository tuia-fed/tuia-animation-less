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
// @import '../common/style/demo-home.less';
.demo-home {
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  padding: 46px 20px 20px;
  background-color: #fff;
  &__title,
  &__desc {
    padding-left: 16px;
    font-weight: normal;
    line-height: 1;
    user-select: none;
  }

  &__title {
    margin: 0 0 16px;
    font-size: 32px;

    img,
    span {
      display: inline-block;
      vertical-align: middle;
    }

    img {
      width: 32px;
    }

    span {
      margin-left: 16px;
    }

  }

  &__desc {
    margin: 0 0 40px;
    color: rgba(69, 90, 100, 0.6);
    font-size: 14px;
  }
}

</style>
