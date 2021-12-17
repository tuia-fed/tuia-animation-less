<template>
  <div class="doc-demo-tip">
    <h2 v-if="text" class="doc-demo-tip__text">{{ text }}</h2>
    <div v-if="card" class="doc-demo-tip__card">
      <slot />
    </div>
    <slot v-else />
  </div>
</template>

<script>
export default {
  name: 'DemoTip',

  props: {
    card: Boolean,
    text: String,
  }
};
</script>

<style lang="less" scoped>
.doc-demo-tip {
  position: relative;
  &__text {
    margin: 0;
    padding: 32px 0 16px 16px;
    color: rgba(69, 90, 100, 0.8);
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
  }

  &__card {
    margin: 12px 12px 0;
    overflow: hidden;
    // border-radius: 8px;
  }

  &__text + &__card {
    margin-top: 0;
  }

  &:first-of-type {
    .doc-demo-tip__text {
      padding-top: 20px;
    }
  }
}
.demo-flex {
  display: flex;
  align-items: center;
  .doc-demo-tip__text {
    padding-right: 0;
  }
}
</style>
