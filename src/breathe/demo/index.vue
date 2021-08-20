<template>
  <demo-section class="demo-shake">
    <demo-block card title="基础用法">
      <div class="tuia_animate_animated tuia_animate_breathe ele1 box1"></div>
    </demo-block>
    <demo-block card title="less函数">
      <div class="btn-box ele1 box1"></div>
    </demo-block>
    <demo-block card title="自定义动画完成所需时间">
      <div class="btn-box ele1 box2"></div>
    </demo-block>
    <demo-block card title="自定义动画呼吸幅度">
      <div class="btn-box ele1 box3"></div>
    </demo-block>
    <demo-block card title="自定义动画速度曲线">
      <div class="btn-box ele1 box4"></div>
    </demo-block>
    <demo-block card title="@keyframes">
      <div class="tuia_animate_animated ele1 box5"></div>
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
  .breathe();
  // #endregion css1
}
.box2 {
  // #region css2
  .breathe(0.95, 0.7s);
  // #endregion css2
}
.box3 {
  // #region css3
  .breathe(0.8, 0.7s);
  // #endregion css3
}
.box4 {
  // #region css4
  .breathe(0.95, 0.7s, ease-in-out);
  // #endregion css4
}
.box5 {
  // #region css5
  animation: breathe;
  animation-duration: 0.5s;
  animation-timing-function: ease-in;
  animation-iteration-count: infinite;
  // #endregion css5
}
</style>