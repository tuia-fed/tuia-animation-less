<template>
  <demo-section class="demo-fadeIn">
    <demo-tip card text="想看效果，请点击" class="flex">
      <div class="tip ele1"></div>
    </demo-tip>
    <demo-block card title="基础用法-水平移动">
      <div :class="{'tuia_animate_animated': true, 'tuia_animate_moveX': activeX, 'ele1': true }" @click="handleShow('activeX')"></div>
    </demo-block>
    <demo-block card title="基础用法-垂直移动">
      <div :class="{'tuia_animate_animated': true, 'tuia_animate_moveY': activeY, 'ele1': true }" @click="handleShow('activeY')"></div>
    </demo-block>
    <demo-block card title="less函数-水平移动">
      <div :class="['ele1', 'box2', action2 ? 'action' : '']" @click="handleShow('action2')"></div>
    </demo-block>
    <demo-block card title="less函数-垂直移动">
      <div :class="['ele1', 'box1', action1 ? 'action' : '']" @click="handleShow('action1')"></div>
    </demo-block>
    <demo-block card title="@keyframes-水平移动">
      <div :class="{'ele1': true, 'tuia_animate_animated': true, 'box3': isActiveKeyframesX}" @click="handleShow('isActiveKeyframesX')"></div>
    </demo-block>
    <demo-block card title="@keyframes-垂直移动">
      <div :class="{'ele1': true, 'tuia_animate_animated': true, 'box4': isActiveKeyframesY}" @click="handleShow('isActiveKeyframesY')"></div>
    </demo-block>
  </demo-section>
</template>
<script>
// #region js
export default {
  name: 'move',
  data() {
    return {
      activeX: false,
      activeY: false,
      action1: false,
      action2: false,
      isActiveKeyframesX: false,
      isActiveKeyframesY: false
    }
  },
  methods: {
    handleShow(key) {
      this[key] = !this[key]
      setTimeout(() => {
        this[key] = true
      }, 0)
      setTimeout(() => {
        this[key] = false
      }, 1000)
    }
  }
}
// #endregion js
</script>
<style lang="less" scoped>
@import '../../styles/index.less';
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
.box1.action {
  // #region css1
  .move_y();
  // #endregion css1
}
.box2.action {
  // #region css2
  .move_x();
  // #endregion css2
}
.box3 {
  // #region css3
  animation-name: moveX;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  // #endregion css3
}
.box4 {
  // #region css4
  animation-name: moveY;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  // #endregion css4
}
.tip {
  width: 50px;
  height: 50px;
}
</style>