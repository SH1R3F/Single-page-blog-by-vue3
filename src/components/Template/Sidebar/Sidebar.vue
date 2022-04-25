<template>
  <div class="sidebar">
    <SidebarBlock title="whoami>" class="about-me">
      <img src="https://yt3.ggpht.com/xxzQfL4-SINrOvkNj_BeQC3wgXLq8n6paY8jbFk0BfZ8V7gizVAI2VxOTdep2VkSeXSHWjih" alt="">
      <h2>Mahmoud Shiref</h2>
      <p>A procrastinator web developer</p>
      <div class="social-media">
        <a href="https://www.facebook.com/Slumdog.Mellionare/" target="_blank"><fa :icon="['fab', 'facebook']" /></a>
        <a href="https://www.instagram.com/mahmoud_shireff/" target="_blank"><fa :icon="['fab', 'instagram']" /></a>
        <a href="https://www.linkedin.com/in/sh1r3f/" target="_blank"><fa :icon="['fab', 'linkedin']" /></a>
      </div>
    </SidebarBlock>

    <SidebarBlock title="Categories" class="categories">
      <ul>
        <li v-for="category in categories" :key="category.id" :class="{ active: category.id == $route.params.catid }">
          <router-link :to="{ name: 'category', params: { catid: category.id } }">{{ category.title }}</router-link>
        </li>
      </ul>
    </SidebarBlock>
  </div>
</template>

<script>
  import SidebarBlock from './SidebarBlock.vue';
  export default {
    data() {
      return {
        categories: []
      }
    },
    components: {
      SidebarBlock
    },
    mounted() {
      /**
       * I AM REPEATING MYSELF
       * I'm fetching the categories twice, once here and another in the navbar page.
       * I think the correct way should be done through vuex maybe? will think about it when i watch the vuex course.
       */
      // Fetch categories from backend
      fetch ('http://localhost:3000/categories')
      .then (res => res.json())
      .then (data => {
        this.categories = data;
      })
      .catch (err => alert("Couldn't fetch categories!"));

    }
  }
</script>

<style lang="scss" scoped>
.sidebar {
  .about-me {
    img {
      height: 200px;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      margin: auto;
      display: block;
    }
    h2 {
      text-transform: uppercase;
      color: orange;
      font-weight: bold;
      margin: 0;
    }
    p {
      font-weight: bold;
      color: #000;
      text-transform: capitalize;
      margin: 0;
      letter-spacing: 5px;
    }
    .social-media {
      a {
        color: #555;
        margin: 0 5px;
        font-size: 1.2rem;
        transition: color .3s;
        &:hover {
          color: orange;
        }
      }
    }
  }

  .categories {
    ul {
      text-align: left;
      list-style: none;
      li {
        padding: 5px 0;
        transition: color 0.3s;
        color: #000;
        display: flex;
        justify-content: space-between;
        &:hover a, &.active a {
          color: orange;
        }
        a {
          transition: color 0.3s;
          color: #000;
          font-weight: bold;
          &:hover {
            color: orange;
          }
        }
        span {
          background: #333;
          padding: 3px 7px;
          color: #FFF;
          border-radius: 5px;
          transition: all .3s;
          &:hover {
            color: #333;
            background: orange;
          }
        }
      }
    }
  }
}
</style>