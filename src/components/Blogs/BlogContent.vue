<template>
  <div class="blog-content">
    <div class="container">
      <div class="row">
        <Posts />
        <Sidebar class="col col-md-30" />
      </div>
    </div>
  </div>
</template>

<script>
  import Sidebar from '@/components/Template/Sidebar/Sidebar.vue';
  import Posts from './Posts.vue';

  export default {
    components: {
      Sidebar,
      Posts
    }
  }
</script>

<style lang="scss" scoped>
  .blog-content {
    padding: 20px 0;
  }
</style>