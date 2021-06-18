<template>
  <demo-section class="demo-wave">
    
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
  name: 'wave'
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
  .wave();
  // #endregion css1
  background-image: url('//yun.tuisnake.com/h5-mani/videoTpl_3/red-bag-hand.png');
}
.box2 {
  // #region css2
  .wave(1s);
  // #endregion css2
  background-image: url('//yun.tuisnake.com/h5-mani/videoTpl_3/red-bag-hand.png');
}
.box3 {
  margin: 80px;
  // #region css3
  .wave(1s, 20deg, -20deg);
  // #endregion css3
  background-image: url('//yun.dui88.com/h5-mani/crystallBall/hand.png');
}
</style>