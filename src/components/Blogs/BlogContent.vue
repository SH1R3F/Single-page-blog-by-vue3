<template>
  <div class="blog-content">
    <div class="container">
      <div class="row">
        <!-- <Posts /> -->
        <SinglePost />
        <Sidebar class="col col-md-30" />
      </div>
    </div>
  </div>
</template>

<script>
  import Sidebar from '@/components/Template/Sidebar/Sidebar.vue';
  import Posts from './Posts.vue';
  import SinglePost from './SinglePost.vue';

  export default {
    components: {
      Sidebar,
      Posts,
      SinglePost
    }
  }
</script>

<style lang="scss" scoped>
  .blog-content {
    padding: 20px 0;
  }
</style>