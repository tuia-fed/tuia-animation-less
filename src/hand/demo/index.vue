<template>
  <demo-section class="demo-hand">
    
    <demo-block card title="基础用法">
      <div class="box box1"></div>
    </demo-block>
    <demo-block card title="自定义动画完成所需时间">
      <div class="box box2"></div>
    </demo-block>
    <demo-block card title="自定义手势幅度">
      <div class="box box3"></div>
    </demo-block>
  </demo-section>
</template>
<script>
// #region js
export default {
  name: 'hand'
}
// #endregion js
</script>
<style lang="less" scoped>
@import '../../styles/index.less';
.box {
  .WH(220,220);
  margin-top: 80px;
}

.box1 {
  // #region css1
  .handAni();
  // #endregion css1
}
.box2 {
  // #region css2
  .handAni(1s);
  // #endregion css2
}
.box3 {
  margin: 80px;
  // #region css3
  .handAni(1s, 20deg, -20deg);
  background-image: url('//yun.dui88.com/h5-mani/crystallBall/hand.png');
  // #endregion css3
}
</style>