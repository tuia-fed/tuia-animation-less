<template>
  <demo-section class="demo-rotate">
    <demo-block card title="基础用法">
      <div class="tuia_animate_animated tuia_animate_rotate ele1"></div>
    </demo-block>
    <demo-block card title="less函数">
      <div class="btn-box ele1 box1"></div>
    </demo-block>
    <demo-block card title="less函数自定义用法">
      <div class="btn-box ele1 box2"></div>
    </demo-block>
    <demo-block card title="@keyframes">
      <div class="btn-box ele1 box3"></div>
    </demo-block>
  </demo-section>
</template>
<script>
// #region js

// #endregion js
</script>
<style lang="less" scoped>
@import '../../styles/index.less';
.box1 {
  // #region css1
  .rotate()
  // #endregion css1
}
.box2 {
  // #region css2
  .rotate(8s, linear, 0.2s, infinite);
  // #endregion css2
}
.box3 {
  // #region css3
  animation-name: rotate;
  animation-duration: 9s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  // #endregion css3
}
</style>