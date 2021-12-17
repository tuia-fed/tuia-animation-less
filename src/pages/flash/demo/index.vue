<template>
  <demo-section class="demo-fadeFlash">
    <demo-tip card text="想看效果，请点击" class="demo-flex">
      <div class="tip ele1"></div>
    </demo-tip>
    <demo-block card title="基础用法">
      <div :class="{'tuia_animate_animated': true, 'tuia_animate_flash': active, 'ele1': true }" @click="handleEvent"></div>
    </demo-block>
    <demo-block card title="less函数">
      <div :class="['btn-box', 'ele1', 'box1', box1Active ? 'active': '']" @click="handleReset(0)"></div>
    </demo-block>
    <demo-block card title="less函数自定义用法">
      <div :class="['btn-box', 'ele1', 'box2', box2Actice ? 'active': '']" @click="handleReset(2)"></div>
    </demo-block>
    <demo-block card title="@keyframes">
      <div :class="{'ele1': true, 'tuia_animate_animated': true, 'box3': isActiveKeyframes}" @click="handleKeyframseEvent"></div>
    </demo-block>
  </demo-section>
</template>
<script>
// #region js
export default {
  name: 'fadeOut',
  data() {
    return {
      active: false,
      showMask1: true,
      showMask2: false,
      box1Active: false,
      box2Actice: false,
      isActiveKeyframes: false
    }
  },
  methods: {
    handleReset (index) {
      if(index === 0 ){
        this.box1Active = true
        setTimeout(() => {
          this.box1Active = false
        }, 800)
      } else {
        this.box2Actice = true
        setTimeout(() => {
          this.box2Actice = false
        }, 800)
      }
    },
    handleEvent() {
      this.active = true
      setTimeout(() => {
        this.active = false
      }, 800)
    },
    handleKeyframseEvent() {
      this.isActiveKeyframes = true
      setTimeout(() => {
        this.isActiveKeyframes = false
      }, 800)
    }
  },
}
// #endregion js
</script>
<style lang="less" scoped>
@import '../../../styles/index.less';
.btn-box {
  .WH(200,200);
  // background-color: rgb(83, 80, 80);
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
  .flash();
  // #endregion css1
}
.box2.active {
  // #region css2
  .flash(0.5s);
  // #endregion css2
}
.box3 {
  // #region css3
  animation-name: flash;
  animation-duration: 0.5s;
  // #endregion css3
}
.tip {
  width: 50px;
  height: 50px;
}
</style>