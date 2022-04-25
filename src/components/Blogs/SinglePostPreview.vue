<template>
  <div class="single-post row">
    <img :src="post.img" :alt="post.title">
    <div>
      <router-link :to="{ name: 'post', params: { postid: post.id } }">
        <h2>{{ post.id }}. {{ post.title }}</h2>
      </router-link>
      <p>{{ post.brief }}</p>
      <router-link :to="{ name: 'category', params: { catid: post.category.id } }" class="category">{{ post.category.title }}</router-link>
    </div>
  </div>
</template>

<script>

  export default {
    props: ['post']
  }

</script>

<style lang="scss" scoped>
  .single-post {
    background: #FFF;
    box-shadow: var(--box-shadow);
    padding: 20px;
    border-radius: 5px;
    position: relative;
    margin-bottom: 15px;
    overflow: hidden;
    img {
      max-width: 35%;
      border-radius: 6px;
      box-shadow: var(--box-shadow);
      aspect-ratio: 1/1;
      object-fit: cover;
      @media (max-width: 768px) {
        & {
          max-width: 100%;
        }
      }
    }
    div {
      padding-inline-start: 15px;
      height: 100%;
      h2 {
        color: orange;
      }
      p {
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
  }
</style>