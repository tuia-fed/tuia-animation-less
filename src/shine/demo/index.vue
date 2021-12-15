<template>
  <demo-section class="demo-shine">
    <demo-block card title="闪光效果1">
      <div class="box box1"></div>
    </demo-block>
    <demo-block card title="闪光效果2">
      <div class="box box2"></div>
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
@import '../../styles/index.less';
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
</style>