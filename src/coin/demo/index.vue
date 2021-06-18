<template>
  <demo-section class="demo-sparks">
    
    <demo-block card title="基础用法">
      <div class="box box1" v-show="show1"></div>
      <div class="button" @click="handleBtnClick('show1')">点击出现</div>
    </demo-block>
    <demo-block card title="倒置金币方向">
      <div class="box box2" v-show="show2"></div>
      <div class="button" @click="handleBtnClick('show2')">点击出现</div>
    </demo-block>
    <demo-block card title="第二种金币">
      <div class="box box3" v-show="show3"></div>
      <div class="button" @click="handleBtnClick('show3')">点击出现</div>
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
      show2: false,
      show3: false
    }
  },
  methods: {
    handleBtnClick(key) {
      this[key] = true
      setTimeout(() => {
        this[key] = false
      }, 1000)
    }
  },
}
// #endregion js
</script>
<style lang="less" scoped>
@import '../../styles/index.less';
.box {
  .ABL(-430, 380);
  .WH(200, 600);
  z-index: 204;
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
  .coin();
  // #endregion css1
}
.box2 {
  // #region css2
  .coin();
  // 令金币镜像垂直翻转
  transform: rotateX(180deg);

  // #endregion css2
}
.box3 {
  .ABL(-280, 300);
  .WH(300, 400);

  // #region css3
  .coin2()
  // #endregion css3
}
</style>