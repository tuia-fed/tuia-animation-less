<template>
  <demo-section class="demo-shake">
    <demo-block card title="基础用法">
      <div ref="demo-demo1" :class="{'tuia_animate_animated': true, 'tuia_animate_bounce': isBounce, 'ele1': true, 'box1': true}" @click="bounce('isBounce')"></div>
    </demo-block>
    <demo-block card title="less 函数">
      <div ref="demo-demo1" :class="{'ele1': true, 'box2': isBounce2}" @click="bounce('isBounce2')"></div>
    </demo-block>
    <demo-block card title="@keyframes">
      <div ref="demo-demo1" :class="{'ele1': true, 'tuia_animate_animated': true, 'box3': isBounce3}" @click="bounce('isBounce3')"></div>
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
      isBounce2: false,
      isBounce3: false
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.isBounce = true
        this.isBounce2 = true
        this.isBounce3 = true
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
<style scoped>
/* @import '~@/css/index.css'; */
</style>
<style lang="less" scoped>
@import '~@/styles/index.less';
.ele1 {
  animation-iteration-count: infinite !important;
}
.box2 {
// #region css1
  .bounce();
// #endregion css1
}
.box3 {
// #region css2
  animation: bounce;
  animation-duration: 1s;
// #endregion css2
}
.tip {
  width: 50px;
  height: 50px;
}
</style>