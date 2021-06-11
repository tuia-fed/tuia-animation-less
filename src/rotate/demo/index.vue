<template>
  <demo-section class="demo-loading">
    
    <demo-block card title="基础用法">
      <div class="btn-box box1"></div>
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
  .rotate(8s, linear, 0.2s, infinite);
}
</style>