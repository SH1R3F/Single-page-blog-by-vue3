<template>
  <div class="blogs col col-md-70">
    <div class="search">
      <input type="search" placeholder="Searching for a post?">
    </div>
    <SinglePostPreview v-for="i in 5" :key="i" />
    <div class="pagination">
      <a href="#" disabled>Prev</a>
      <a href="#">1</a>
      <a href="#" class="active">2</a>
      <a href="#">3</a>
      <a href="#">4</a>
      <a href="#">Next</a>
    </div>
  </div>
</template>

<script>
  import SinglePostPreview from './SinglePostPreview.vue';
  export default {
    components: {
      SinglePostPreview
    }
  }
</script>

<style lang="scss" scoped>
  .blogs {
    .search {
      margin-bottom: 5px;
      input {
        width: 100%;
        border: none;
        padding: 10px;
        background: transparent;
        font-weight: bold;
        border-bottom: 1px solid orange;
        border-inline-start: 1px solid orange;
        // box-shadow: var(--box-shadow);
        border-radius: 2px;
      }
    }

    .pagination {
      a {
        color: #000;
        background: #FFF;
        margin: 0 2px;
        padding: 2px 10px;
        border-radius: 3px;
        box-shadow: var(--box-shadow);
        &.active {
          background: orange;
          color: #FFF;
        }
        &[disabled] {
          background: #EFEFEF;
          cursor: default;
        }
      }
    }
  }
</style>