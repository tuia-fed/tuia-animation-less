<template>
  <demo-section class="demo-fadeIn">
    
    <demo-block card title="垂直移动">
      <div :class="['btn-box', 'box1', action1 ? 'action' : '']"></div>
      <div class="button" @click="handleShow('action1')">开始动画</div>
    </demo-block>
    <demo-block card title="水平移动">
      <div :class="['btn-box', 'box2', action2 ? 'action' : '']"></div>
      <div class="button" @click="handleShow('action2')">开始动画</div>
    </demo-block>
  </demo-section>
</template>
<script>
// #region js
export default {
  name: 'move',
  data() {
    return {
      action1: false,
      action2: false
    }
  },
  methods: {
    handleShow(key) {
      this[key] = !this[key]
      setTimeout(() => {
        this[key] = true
      }, 200)
    }
  }
}
// #endregion js
</script>
<style lang="less" scoped>
@import '../../styles/index.less';
.btn-box {
  width: 200px;
  height: 200px;
  background-color: #d9d9d9;
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
</style>