<template>
  <demo-section class="demo-sparks">
    <demo-block card title="爆炸效果1">
      <div class="box box1"></div>
      <!-- <div class="button" @click="handleBtnClick('show1')">点击出现</div> -->
    </demo-block>
    <demo-block card title="爆炸效果2">
      <div class="box box2"></div>
      <!-- <div class="button" @click="handleBtnClick('show2')">点击出现</div> -->
    </demo-block>
    <demo-block card title="爆炸效果3">
      <div class="box box3"></div>
      <!-- <div class="button" @click="handleBtnClick('show3')">点击出现</div> -->
    </demo-block>
  </demo-section>
</template>
<script>
// #region js
export default {
  name: 'sparks',
  data() {
    return {
      active: false,
      active2: false,
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
  // position: fixed;
  // top: 400px;
  // right: 0;
  // left: 0;
  // z-index: 10;
  margin: 0 auto;
  .WH(200, 200);
  animation-iteration-count: infinite !important;
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
.box3 {
  // .WH(500, 500);
  // animation-name: sparks;
  // animation-duration: 0.4s;
  // animation-timing-function: steps(1);
  // animation-delay: 0s;
  // animation-iteration-count: 1;
  // background-image: url('//yun.tuisnake.com/mami-media/img/e9064d2f-3644-413b-b62b-d8451f5fe76a.png');
  // background-repeat: no-repeat;
  // background-position: -10000px -10000px;
  // background-size: 400% 300%;
  // transform: scale(1.8);
  // #region css3
  .sparks3();
  // #endregion css3
}
</style>