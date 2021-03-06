<template>
  <div class="tuia-doc-container">
    <!-- 导航栏 -->
    <Navbar />
    <!-- 侧边栏 -->
    <Sidebar :scrollTop="currentScrollTop" />
    <!-- 代码区 -->
    <!-- Content组件是vuepress内部用于渲染Markdown文件的内容 -->
    <Container>
      <Content />
      <!-- 页脚 -->
      <div slot="footer">
        <Footer />
      </div>
    </Container>
    <!-- <Content slot-key="demo" /> -->
    <!-- 模拟器 -->
    <Simulator :isTopFixed="isFixed" :src="simulatorPath" ref="simulator"></Simulator>
  </div>
</template>
<script>
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Container from '../components/Container'
import Simulator from '../components/Simulator'
import Footer from '../components/Footer'
import { throttle, DOC_PUBLICPATH, DOC_DEVPORT } from '../utils'

let iframeConfigPath = null
export default {
  name: 'Layout',
  data() {
    return {
      isFixed: false,
      scrollListener: null,
      iframeListener: null,
      currentScrollTop: 0,
      simulatorDisabled: false,
      simulatorHash: '',
      isMounted: false
    }
  },
  components: {
    Navbar,
    Sidebar,
    Container,
    Simulator,
    Footer
  },
  computed: {
    simulatorPath() {
      let basicPath = ''
      if(!this.isMounted) {
        return
      }
      if(iframeConfigPath) {
         basicPath = iframeConfigPath(DOC_DEVPORT) + `${DOC_PUBLICPATH}`
      }
      let iframePath = ''
      if (this.simulatorHash) {
        iframePath = `${basicPath}/#${this.simulatorHash}`
      } else {
        iframePath = basicPath + '/#/'
      }
      return iframePath
    }
  },
  watch: {
    '$route'(to, from) {
      const currentPath = to.path // 当前页面路由
      if (/^\/components/.test(currentPath)) { // 匹配到组件路由
        this.simulatorHash = currentPath.split('/components')[1]
      } else {
        this.simulatorHash = ''
      }
    }
  },
  mounted() {
    const that = this
    /* 监听页面滚动 */
    this.scrollListener = throttle(function(e) {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      that.currentScrollTop = scrollTop
      if (scrollTop >= 60) {
        that.isFixed = true
      } else {
        that.isFixed = false
      }
    }, 20)
    window.addEventListener('scroll', this.scrollListener)
    /* 监听iframe子页面发送的消息 */
    this.iframeListener = (e) => {
      const skipPath = e.data.path
      // 当前所在页面路由
      const currentPagePath = this.$page.path
      // 避免路由重复跳转
      if (skipPath && skipPath !== currentPagePath) {
        this.$router.push(`${skipPath}`).catch(err => {
          console.info(err.message)
        })
      }
    }
    window.addEventListener('message', this.iframeListener, false)
    // 动态引入库，避免build的时候报错，window is not defined
    import('../utils').then(module => {
      iframeConfigPath = module.iframeConfigPath
    })
    this.$nextTick(() => {
      this.isMounted = true
    })
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollListener)
    window.removeEventListener('message', this.iframeListener)
  }
}
</script>
