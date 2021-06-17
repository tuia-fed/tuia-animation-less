<template>
  <demo-section class="demo-shake">
    
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
.btn-box {
  width: 220px;
  height: 80px;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-color: #ddd;
}
.box1 {
  // #region css1
  .shake()
  // #endregion css1
}
</style>