<template>
  <demo-section class="demo-shake">
    
    <demo-block card title="基础用法">
      <div ref="demo1" :class="{'tuia_animate_animated': true, 'tuia_animate_bounce': isBounce, 'ele1': true, 'box1': true}" @click="bounce('isBounce')"></div>
    </demo-block>
    <demo-block card title="less 函数">
      <div ref="demo1" :class="{'ele1': true, 'box2': isBounce2}" @click="bounce('isBounce2')"></div>
    </demo-block>
  </demo-section>
</template>
<script>
// #region js
export default {
  name: 'bounce',
  data() {
    return {
      isBounce: false,
      isBounce2: false
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.isBounce = true
        this.isBounce2 = true
      }, 0)
    })
  },
  methods: {
    bounce(key) {
      this[key] = false
      setTimeout(() => {
        this[key] = true
      }, 0)
    }
  }
}
// #endregion js
</script>
<style lang="less" scoped>
@import '../../styles/index.less';
 // #region css1
.box2 {
  .bounce();
}
// #endregion css1
</style>