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
        <li v-for="i in 10">
          <a href="#">Category {{ i }}</a>
          <span>{{ i * 3 + 2 }}</span>
        </li>
      </ul>
    </SidebarBlock>
  </div>
</template>

<script>
  import SidebarBlock from './SidebarBlock.vue';
  export default {
    components: {
      SidebarBlock
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
        &:hover {
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