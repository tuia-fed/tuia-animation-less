<template>
  <demo-section class="demo-shine">
    <demo-block card title="闪光效果1">
      <div class="box box1"></div>
    </demo-block>
    <demo-block card title="闪光效果2">
      <div class="box box2"></div>
    </demo-block>
    <demo-block card title="闪光效果3">
      <div class="bcontent">
        <div class="box box3"></div>
      </div>
    </demo-block>
    <demo-block card title="闪光效果4">
      <div class="bcontent">
        <div class="box box4"></div>
      </div>
    </demo-block>
  </demo-section>
</template>
<script>
// #region js
export default {
  name: 'shine',
  data() {
    return {
    }
  },
  methods: {
  },
}
// #endregion js
</script>
<style lang="less" scoped>
@import '../../../styles/index.less';
.bcontent {
  color: #fff;
  background-color: #000;
  border-radius: 32px;
}
.box {
  margin: 0 auto;
  .WH(200, 200);
  animation-iteration-count: infinite !important;
}
.box1 {
  // #region css1
  .shine1();
  // #endregion css1
}
.box2 {
  // #region css2
  .shine2();
  // #endregion css2
}
.box3 {
  // #region css3
  .shine3();
  // #endregion css3
}
.box4 {
  // #region css4
  .shine4();
  // #endregion css4
}
</style>