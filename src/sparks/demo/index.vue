<template>
  <demo-section class="demo-sparks">
    
    <demo-block card title="基础用法">
      <div class="btn-box box1" v-show="show1" @click="show1 = false"></div>
      <div class="button" @click="show1 = !show1">点击出现</div>
    </demo-block>
  </demo-section>
</template>
<script>
// #region js
export default {
  name: 'sparks',
  data() {
    return {
      show1: false
    }
  }
}
// #endregion js
</script>
<style lang="less" scoped>
@import '../../styles/index.less';
.btn-box {

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
</style>