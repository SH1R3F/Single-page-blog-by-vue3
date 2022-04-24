<template>
  <div class="side-block">
    <h3 class="block-title">{{ title }}</h3>
    <div class="block-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>

  export default {
    props: ['title']
  }

</script>

<style lang="scss" scoped>
  .side-block {
    box-shadow: var(--box-shadow);
    margin-bottom: 15px;
    .block-title {
      background: #333;
      color: #FFF;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      padding: 10px;
      letter-spacing: 1.5px;
    }
    .block-content {
      background-color: #FFF;
      padding: 10px 20px;
      text-align: center;
      border-radius: 5px;
    }
  }
</style>