<template>
  <demo-section class="demo-rotate">
    
    <demo-block card title="基础用法">
      <div class="btn-box box1"></div>
    </demo-block>
    <demo-block card title="自定义用法">
      <div class="btn-box box2"></div>
    </demo-block>
  </demo-section>
</template>
<script>
// #region js

// #endregion js
</script>
<style lang="less" scoped>
@import '../../styles/index.less';
@url: '//yun.tuisnake.com/h5-mami/bigCouponclose-modal-light.png';
.btn-box {
  .WH(336, 331);
  .BG('@{url}');
}
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