<template>
  <demo-section class="demo-shake">
    <demo-tip card text="想看效果，请点击" class="flex">
      <div class="tip ele1"></div>
    </demo-tip>
    <demo-block card title="基础用法">
      <div ref="demo1" :class="{'tuia_animate_animated': true, 'tuia_animate_bounceOut': isBounce, 'ele1': true, 'box1': true}" @click="bounce('isBounce')"></div>
    </demo-block>
    <demo-block card title="less 函数">
      <div ref="demo1" :class="{'ele1': true, 'box2': isBounce2}" @click="bounce('isBounce2')"></div>
    </demo-block>
    <demo-block card title="@keyframes">
      <div ref="demo1" :class="{'ele1': true, 'tuia_animate_animated': true, 'box3': isBounce3}" @click="bounce('isBounce3')"></div>
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
      this.bounce('isBounce')
      this.bounce('isBounce2')
      this.bounce('isBounce3')
    })
  },
  methods: {
    bounce(key) {
      this[key] = false
      setTimeout(() => {
        this[key] = true
        setTimeout(() => {
          this[key] = false
        }, 1200)
      }, 0)
    }
  }
}
// #endregion js
</script>
<style lang="less" scoped>
@import '../../styles/index.less';
.ele1 {
  opacity: 1;
  transform: scale3d(1.1, 1.1, 1.1);
}
.box2 {
// #region css1
  .bounceOut();
// #endregion css1
}
.box3 {
// #region css2
  animation: bounceOut;
  animation-duration: 1s;
// #endregion css2
}
.tip {
  width: 50px;
  height: 50px;
}
</style>