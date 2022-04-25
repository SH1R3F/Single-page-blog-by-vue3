<template>
  <div class="slider" :style="`background: linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url('${slides[slideIndex].img}')`" v-if="posts.length">
    <div class="slider-card" @mouseover="pauseAutoSlide" @mouseleave="resumeAutoSlide">
      <h2 class="card-title">{{ slides[slideIndex].title }}</h2>
      <router-link :to="{ name: 'category', params: { catid: slides[slideIndex].category.id } }" class="category">{{ slides[slideIndex].category.title }}</router-link>
      <p>{{ slides[slideIndex].brief }}</p>
      <router-link :to="{ name: 'post', params: { postid: slides[slideIndex].id } }" class="btn">Read more</router-link>
    </div>
    <div class="buttons">
      <fa icon="angle-left" @click="slide(slideIndex-1)"/>
      <fa icon="angle-right" @click="slide(slideIndex+1)"/>
    </div>
    <div class="indicators">
      <fa icon="circle" v-for="s, i in slides" @click="slide(i)" :class="{ active: i === slideIndex }" />
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      slideIndex: 0,
      autoSlide: null,
      posts: []
    }
  },
  computed: {
    slides() {
      return this.posts.slice(0, 7);
    }
  },
  methods: {
    async slide(newIndex) {
      if (newIndex === -1) {
        newIndex = this.slides.length - 1;
      } else if (newIndex === this.slides.length) {
        newIndex = 0;
      }
      this.slideIndex = newIndex;
    },
    automateSlider() {
      // Automatic sliding 
      this.autoSlide = setInterval(_ => {
        this.slide(this.slideIndex + 1);
      }, 3000);
    },
    pauseAutoSlide() {
      clearTimeout(this.autoSlide);
    },
    resumeAutoSlide() {
      this.automateSlider();
    },
  },
  mounted () {
    /**
     * I AM REPEATING MYSELF
     * I'm fetching the posts twice, once in the slider and another in the showposts view page.
     * I think the correct way should be done through vuex maybe? will think about it when i watch the vuex course.
     */
    // Fetch posts
    fetch ('http://localhost:3000/posts')
    .then (res => res.json())
    .then (data => {
      this.posts = data;
    })
    .catch (err => alert("Couldn't fetch posts!"));
    
    // Automate slider
    this.automateSlider();
  },
  unmounted() {
    clearTimeout(this.autoSlide);
  }
}

/**
 * LOTS OF WORK ON ANIMATION
 */

</script>

<style lang="scss" scoped>
  .slider {
    height: 100vh;
    background-size: cover !important;
    background-attachment: fixed !important;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    
    .slider-card {
      background-color: rgba(255, 255, 255, 0.98);
      width: 650px;
      max-width: 100%;
      border-radius: 10px;
      box-shadow: var(--box-shadow);
      padding: 35px;
      text-align: center;
      transition: all 0.5s;
      display: block;


      /* The animation code */
      &.active {
        animation: anim-fade-in-up 4s linear;
      }

      @keyframes anim-fade-in-up {
        0% {
            opacity: 0;
        }
        25% {
            opacity: 0.5;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 1;
        }
      }


      .card-title {
        color: orange;
        border-bottom: 1px solid orange;
        margin-bottom: 5px;
      }
      .category {
        background: #EEE;
        border-radius: 15px;
        display: inline-block;
        padding: 1px 15px;
        color: #000;
        font-size: 0.9rem;
        font-weight: bold;
      }
      .btn {
        display: inline-block;
        margin-top: 20px;
        padding: 5px 10px;
        color: #555;
        border: 1px solid #555;
        text-transform: uppercase;
        font-weight: bold;
        background-color: #FFF;
        border-radius: 5px;
        transition: all 0.3s;
        &:hover {
          color: orange;
          border-color: orange;
        }
      }
    }

    .buttons {
      position: absolute;
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
      svg {
        font-size: 1.5rem;
        background: rgba(255, 255, 255, 0.5);
        padding: 9px 15px;
        border-radius: 50%;
        box-shadow: var(--box-shadow);
        transition: all 0.3s ease-in;
        &:hover {
          color: orange;
          background-color: #FFF;
        }
      }
      @media (max-width: 768px) {
        & {
          padding: 0;
        }
        svg {
          background: rgba(255, 255, 255, 0.9);
        }
      }
    }
    .indicators {
      position: absolute;
      bottom: 20px; left: 0; right: 0;
      width: 100%;
      display: flex;
      justify-content: center;
      svg {
        color: rgba(255, 255, 255, 0.5);
        margin: 0 3px;
        box-shadow: var(--box-shadow);
        transition: color 0.3s ease-in;
        &:hover,
        &.active {
          color: #FFF;
        }
      }
    }
  }
</style>