<template>
  <div class="blogs col col-md-70">
    <div class="blog-post">
      <h1>{{ post.title }}</h1>
      <img :src="post.img" :alt="post.title">
      <p>{{ post.description }}</p>

      <router-link v-if="post.category" :to="{ name: 'category', params: { catid: post.category.id } }" class="category">{{ post.category.title }}</router-link>
    </div>
  </div>
</template>


<script>

export default {
  props: ['postid'],
  data() {
    return {
      post: {}
    }
  },
  mounted() {
    // Fetch post
    fetch (`http://localhost:3000/posts/${this.postid}`)
    .then (res => res.json())
    .then (data => {
      this.post = data;
    })
    .catch (err => console.log("Couldn't fetch post data!"));
  }
}

</script>

<style lang="scss" scoped>
  .blog-post {
    background: #FFF;
    box-shadow: var(--box-shadow);
    padding: 20px;
    border-radius: 5px;
    position: relative;
    margin-bottom: 15px;
    overflow: hidden;
    h1 {
      color: orange;
      border-bottom: 1px solid #EEE;
      margin-bottom: 15px;
    }
    img {
      width: 100%;
      border-radius: 6px;
      box-shadow: var(--box-shadow);
    }
    p {
      border-bottom: 1px solid #EEE;
      padding-bottom: 20px;
      margin-bottom: 10px;
    }
    .category {
      background: #EEE;
      border-radius: 15px;
      display: inline;
      padding: 1px 15px;
      color: #000;
      font-size: 0.9rem;
      font-weight: bold;
    }
  }
</style>