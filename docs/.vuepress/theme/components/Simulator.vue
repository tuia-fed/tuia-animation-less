<template>
  <div class="tuia-doc-simulator" :class="{'tuia-doc-simulator-fixed': isTopFixed}">
    <iframe ref="iframe" :src="src" :style="simulatorStyle" frameborder="0" />
    <div class="tuia-doc-simulator-bottom"></div>
  </div>
</template>
<script>

export default {
  name: 'Simulator',
  props: {
    isTopFixed: Boolean,
    src: String
  },
  data: () => ({
    windowHeight: null
  }),
  computed: {
    simulatorStyle() {
      const height = Math.min(780, this.windowHeight - 90)
      return {
        height: `${height}px`
      }
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.windowHeight = window.innerHeight
    })

    this.$refs.iframe.onload = () => {
      this.$refs.iframe.contentWindow.postMessage(window.sitebarRoutes, '*')
    }
    this.windowHeight = window.innerHeight
  }
}
</script>
<style lang="less" scoped>
.tuia-doc-simulator {
  position: absolute;
  right: 30px;
  top: 90px;
  box-sizing: border-box;
  overflow: hidden;
  width: 375px;
  min-width: 375px;
  height: 812px;
  text-align: center;
  background-color: #fff;
  border-radius: 36px;
  box-shadow: #ebedf0 0 4px 12px;
  padding-top: 32px;
  background-image: url(//yun.tuisnake.com/tact/292125fd-e85c-4e10-a5ba-a147b76e2c0f.png);
  background-size: 100%;
  box-sizing: border-box;
}
.tuia-doc-simulator-fixed {
  position: fixed;
  top: 30px;
}
iframe {
  display: block;
  width: 100%;
}
.tuia-doc-simulator-bottom {
  width: 134px;
  height: 5px;
  border-radius: 100px;
  background-color: #000;
  left: 50%;
  margin-left: -67px;
  position: absolute;
  bottom: 10px;
}
</style>
