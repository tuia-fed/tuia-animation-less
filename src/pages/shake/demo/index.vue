<template>
  <demo-section class="demo-shake">
    <demo-block card title="基础用法">
      <div class="btn-box">
        <div class="tuia_animate_animated tuia_animate_shake ele2"></div>
      </div>
    </demo-block>
    <demo-block card title="基础用法急剧抖动">
      <div class="btn-box">
        <div class="tuia_animate_animated tuia_animate_shakeHurried ele2"></div>
      </div>
    </demo-block>
    <demo-block card title="less函数">
      <div class="btn-box box1">
        <div class="ele2"></div>
      </div>
    </demo-block>
    <demo-block card title="less函数自定义用法">
      <div class="btn-box box2">
        <div class="ele2"></div>
      </div>
    </demo-block>
    <demo-block card title="less函数急促抖动新用法">
      <div class="btn-box box3">
        <div class="ele2"></div>
      </div>
    </demo-block>
    <demo-block card title="less函数急促抖动自定义">
      <div class="btn-box box4">
        <div class="ele2"></div>
      </div>
    </demo-block>
    <demo-block card title="@keyframes">
      <div class="btn-box box5">
        <div class="ele2"></div>
      </div>
    </demo-block>
    <demo-block card title="@keyframes急剧抖的">
      <div class="btn-box box6">
        <div class="ele2"></div>
      </div>
    </demo-block>
  </demo-section>
</template>
<script>
// #region js

// #endregion js
</script>
<style lang="less" scoped>
@import '../../../styles/index.less';
.btn-box {
  width: 440px;
  height: 180px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  // background-color: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
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
.box5 {
  // #region css5
  animation-name: shake;
  animation-duration: 0.8s;
  animation-timing-function: ease-out;
  animation-iteration-count: infinite;
  // #endregion css5
}
.box6 {
  // #region css6
  animation-name: shakeHurried;
  animation-duration: 0.8s;
  animation-timing-function: ease-out;
  animation-iteration-count: infinite;
  // #endregion css6
}
</style>