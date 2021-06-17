<template>
  <demo-section class="demo-shake">
    
    <demo-block card title="基础用法">
      <div class="btn-box box1"></div>
    </demo-block>
    <demo-block card title="自定义动画完成所需时间">
      <div class="btn-box box2"></div>
    </demo-block>
    <demo-block card title="自定义动画呼吸幅度">
      <div class="btn-box box3"></div>
    </demo-block>
    <demo-block card title="自定义动画速度曲线">
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
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-image: url("//yun.tuisnake.com/h5-mami/dist/97a10a5cbd0c9cf3f606.png?x-oss-process=image/format,webp");
}
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
</style>