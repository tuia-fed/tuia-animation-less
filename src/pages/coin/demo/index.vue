<template>
  <demo-section class="demo-sparks">
    <demo-block card title="金币1">
      <div class="box tuia_animate_animated tuia_animate_coin"></div>
    </demo-block>
    <demo-block card title="倒置金币1">
      <div class="box box2"></div>
    </demo-block>
    <demo-block card title="金币2">
      <div class="box box3"></div>
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
@import '~@/styles/index.less';
.box {
  // .ABL(-430, 380);
  .WH(200, 600);
  // z-index: 204;
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
  // .ABL(-280, 300);
  .WH(300, 400);

  // #region css3
  .coin2()
  // #endregion css3
}
.box4 {
  position: absolute;
  bottom: -430px;
  left: 380px;
  // #region css4
  // 第一种金币
  width: 200px;
  height: 600px;
  background-image: url('//yun.tuisnake.com/h5-mani/turncard_mix/174a5f04-1c9c-4387-8f63-1936ccb230bd.png');
  background-size: 4600px 600px;
  animation: coin 0.92s steps(1) both;
  // #endregion css4
}
.box5 {
  position: absolute;
  bottom: -280px;
  left: 300px;
  // #region css5
  // 第二种金币
  width: 300px;
  height: 400px;
  background-image: url('//yun.tuisnake.com/h5-mani/turncard_mix/06715b73-3cf0-4c0f-a62c-fceaccbe845f.png');
  background-size: 4800px 1200px;
  animation: coin2 0.92s steps(1) both;
  // #endregion css5
}
</style>