<template>
  <demo-section class="demo-shake">
    
    <demo-block card title="基础用法">
      <div class="btn-box box1"></div>
    </demo-block>
    <demo-block card title="自定义用法">
      <div class="btn-box box2"></div>
    </demo-block>
    <demo-block card title="急促抖动新用法">
      <div class="btn-box box3"></div>
    </demo-block>
    <demo-block card title="急促抖动自定义">
      <div class="btn-box box4"></div>
    </demo-block>
  </demo-section>
</template>
<script>
// #region js

// #endregion js
</script>
<style lang="less" scoped>
@import '../../styles/index.less';
.btn-box {
  width: 440px;
  height: 160px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-color: #ddd;
}
.box1 {
  // #region css1
  .shake()
  // #endregion css1
}
.box2 {
  // #region css2
  .shake(0.6s, linear, 0.3s, infinite, alternate)
  // #endregion css2
}
.box3 {
  // #region css3
  .shakeHurried()
  // #endregion css3
}
.box4 {
  // #region css4
  .shakeHurried(0.8s)
  // #endregion css4
}
</style>