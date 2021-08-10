<template>
  <demo-section class="demo-rotate">
    
    <demo-block card title="基础用法">
      <div class="btn-box ele1 box1"></div>
    </demo-block>
    <demo-block card title="自定义用法">
      <div class="btn-box ele1 box2"></div>
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
</style>