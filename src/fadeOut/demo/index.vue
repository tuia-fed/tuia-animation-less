<template>
  <demo-section class="demo-fadeOut">
    
    <demo-block card title="基础用法">
      <div :class="['btn-box', 'box1', box1Active ? 'active': '']"></div>
      <div class="button" @click="handleReset(0)">{{box1Active ? '重置' : '点击消失'}}</div>
    </demo-block>
    <demo-block card title="自定义用法">
      <div :class="['btn-box', 'box2', box2Actice ? 'active': '']"></div>
      <div class="button" @click="handleReset(2)">{{ box2Actice ? '重置' : '点击消失'}}</div>
    </demo-block>
  </demo-section>
</template>
<script>
// #region js
export default {
  name: 'fadeOut',
  data() {
    return {
      showMask1: true,
      showMask2: false,
      box1Active: false,
      box2Actice: false
    }
  },
  methods: {
    handleReset (index) {
      if(index === 0 ){
        this.box1Active = !this.box1Active
      } else {
        this.box2Actice = !this.box2Actice
      }
    }
  },
}
// #endregion js
</script>
<style lang="less" scoped>
@import '../../styles/index.less';
.btn-box {
  .WH(200,200);
  background-color: rgb(83, 80, 80);
  opacity: 1;
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
  margin-top: 10px;
  &:hover {
    color: #40a9ff;
    border-color: #40a9ff;
    background-color: #fff;
  }
}
.box1.active {
  // #region css1
  .fadeOut();
  // #endregion css1
}
.box2.active {
  // #region css2
  .fadeOut(1s);
  // #endregion css2
}
</style>