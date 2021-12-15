<template>
  <demo-section class="demo-fadeIn">
    <demo-block card title="基础用法">
      <div :class="{'tuia_animate_animated': true, 'tuia_animate_float': true, 'ele1': true }"></div>
    </demo-block>
    <demo-block card title="less函数">
      <div class="ele1 box1"></div>
    </demo-block>
    <demo-block card title="less函数自定义">
      <div class="ele1 box2"></div>
    </demo-block>
    <demo-block card title="@keyframes">
      <div :class="{'ele1': true, 'tuia_animate_animated': true, 'box3': true}"></div>
    </demo-block>
  </demo-section>
</template>
<script>
// #region js
export default {
  name: 'float',
  data() {
    return {
    }
  },
  methods: {
  }
}
// #endregion js
</script>
<style lang="less" scoped>
@import '../../../styles/index.less';
.box1 {
  // #region css1
  .float();
  // #endregion css1
}
.box2 {
  // #region css2
  .float(1s);
  // #endregion css2
}
.box3 {
  // #region css3
  animation-name: float;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  // #endregion css3
}
.tip {
  width: 50px;
  height: 50px;
}
</style>