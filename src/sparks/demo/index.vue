<template>
  <demo-section class="demo-sparks">
    
    <demo-block card title="基础用法">
      <div class="box box1" v-show="show1" @click="show1 = false"></div>
      <div class="button" @click="show1 = !show1">点击出现</div>
    </demo-block>
    <demo-block card title="光火花">
      <div class="box box2" v-show="show2" @click="show2 = false"></div>
      <div class="button" @click="show2 = !show2">点击出现</div>
    </demo-block>
  </demo-section>
</template>
<script>
// #region js
export default {
  name: 'sparks',
  data() {
    return {
      show1: false,
      show2: false
    }
  }
}
// #endregion js
</script>
<style lang="less" scoped>
@import '../../styles/index.less';
.box {
  position: fixed;
  top: 400px;
  right: 0;
  left: 0;
  z-index: 10;
  margin: 0 auto;
  .WH(500, 500);
}
.button {
  line-height: 64px;
  position: relative;
  display: inline-block;
  white-space: nowrap;
  text-align: center;
  box-shadow: 0 3px 0 rgb(0 0 0 / 2%);
  cursor: pointer;
  transition: all .3s cubic-bezier(.645,.045,.355,1);
  height: 64px;
  padding: 0 30px;
  user-select: none;
  font-size: 28px;
  border-radius: 8px;
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
  .sparks();
  // #endregion css1
}
.box2 {
  // #region css2
  .sparksLight();
  // #endregion css2
}
</style>