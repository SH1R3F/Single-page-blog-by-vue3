<template>
  <div class="blog-content">
    <div class="container">
      <div class="row">
        <router-view />
        <Sidebar class="col col-md-30" />
      </div>
    </div>
  </div>
</template>

<script>
  import Sidebar from '@/components/Template/Sidebar/Sidebar.vue';

  export default {
    components: {
      Sidebar,
    }
  }
</script>

<style lang="scss" scoped>
  .blog-content {
    padding: 20px 0;
  }
</style>