<template>
  <demo-section class="demo-fadeInLeft">
    <demo-tip card text="想看效果，请点击" class="flex">
      <div class="tip ele1"></div>
    </demo-tip>
    <demo-block card title="基础用法">
      <div :class="{'tuia_animate_animated': true, 'tuia_animate_fadeInLeft': active, 'ele1': true }" @click="handleEvent"></div>
    </demo-block>
    <demo-block card title="less函数">
      <div class="btn-box box1" v-show="showMask1" @click="showMask1 = false"></div>
      <div class="ele1" @click="showMask1 = !showMask1"></div>
    </demo-block>
    <demo-block card title="less函数自定义">
      <div class="btn-box box2" v-show="showMask2" @click="showMask2 = false"></div>
      <div class="ele1" @click="showMask2 = !showMask2"></div>
    </demo-block>
    <demo-block card title="@keyframes">
      <div :class="{'ele1': true, 'tuia_animate_animated': true, 'box3': isActiveKeyframes}" @click="handleKeyframseEvent"></div>
    </demo-block>
  </demo-section>
</template>
<script>
// #region js
export default {
  name: 'fadeIn',
  data() {
    return {
      showMask1: false,
      showMask2: false,
      active: false,
      isActiveKeyframes: false
    }
  },
  methods: {
    handleEvent() {
      this.active = false
      setTimeout(() => {
        this.active = true
      }, 0)
    },
    handleKeyframseEvent() {
      this.isActiveKeyframes = false
      setTimeout(() => {
        this.isActiveKeyframes = true
      }, 0)
    }
  }
}
// #endregion js
</script>
<style lang="less" scoped>
@import '../../../styles/index.less';
.btn-box {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.85);
}
.box1 {
  // #region css1
  .fadeInLeft();
  // #endregion css1
}
.box2 {
  // #region css2
  .fadeInLeft(1s);
  // #endregion css2
}
.box3 {
  // #region css3
  animation-name: fadeInLeft;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  // #endregion css3
}
.tip {
  width: 50px;
  height: 50px;
}
</style>