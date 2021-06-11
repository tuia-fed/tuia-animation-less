<template>
  <div class="demo-home-nav">
    <div>
      <div class="demo-home-nav__title">
        {{ group.group }}
      </div>
      <div class="demo-home-nav__group">
        <div
          v-for="navItem in group.children"
          :key="navItem.path"
          @click="() => handlePushRoute(navItem.path)">
          <router-link class="demo-home-nav__block" :key="navItem.path" :to="filterPath(navItem.path)">
            {{ navItem.title }}
            <arrow-right class="demo-home-nav__icon" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ArrowRight from './ArrowRight'

export default ({
  components: {
    ArrowRight
  },
  props: {
    group: {
      type: Object
    }
  },
  methods: {
    handlePushRoute(path) {
      // 向主窗口发送路由消息
      window.parent.postMessage({ path }, '*')
    },
    groupTitle(val) {
      const titleExp = new RegExp(/\|/, 'g')
      if (titleExp.test(val)) {
        return val.split('|')[1].trim()
      }
      return val
    },
    filterPath(path) {
      let componentPath = path
      if (/^\/components/.test(path)) {
        componentPath = path.split('/components')[1]
      }
      return componentPath
    }
  }
})
</script>
<style lang="less" scoped>
@import '../common/style/demo-home-nav.less';
</style>