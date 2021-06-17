<template>
  <demo-section class="demo-fadeIn">
    
    <demo-block card title="基础用法">
      <div class="btn-box box1" v-show="showMask1" @click="showMask1 = false"></div>
      <div class="button" @click="showMask1 = !showMask1">点击出现</div>
    </demo-block>
    <demo-block card title="自定义用法">
      <div class="btn-box box2" v-show="showMask2" @click="showMask2 = false"></div>
      <div class="button" @click="showMask2 = !showMask2">点击出现</div>
    </demo-block>
  </demo-section>
</template>
<script>
// #region js
export default {
  name: 'fadeIn',
  data() {
    return {
      showMask1: false,
      showMask2: false
    }
  }
}
// #endregion js
</script>
<style lang="less" scoped>
@import '../../styles/index.less';
.btn-box {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.85);
}
.button {
  line-height: 32px;
  position: relative;
  display: inline-block;
  white-space: nowrap;
  text-align: center;
  box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
  cursor: pointer;
  transition: all .3s cubic-bezier(.645,.045,.355,1);
  height: 32px;
  padding: 0 15px;
  user-select: none;
  font-size: 14px;
  border-radius: 4px;
  color: rgba(0,0,0,.65);
  background-color: #fff;
  border: 1px solid #d9d9d9;
  &:hover {
    color: #40a9ff;
    border-color: #40a9ff;
    background-color: #fff;
  }
}
.box1 {
  // #region css1
  .fadeIn();
  // #endregion css1
}
.box2 {
  // #region css2
  .fadeIn(1s);
  // #endregion css2
}
</style>