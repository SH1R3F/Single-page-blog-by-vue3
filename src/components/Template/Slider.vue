<template>
  <div class="slider" :style="`background: linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url('${slides[slideIndex].img}')`">
    <div class="slider-card" @mouseover="pauseAutoSlide" @mouseleave="resumeAutoSlide">
      <h2 class="card-title">{{ slides[slideIndex].title }}</h2>
      <a href="#" class="category">{{ slides[slideIndex].category }}</a>
      <p>{{ slides[slideIndex].details }}</p>
      <button>Read more</button>
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
      slides: [
        {
          id: 1,
          title: '4 Lies You Are Told About What Attracts Abusive Personalities',
          category: 'Psychology',
          details: 'and what actually attracts them — I have heard such nonsense about what attracts people with personality disorders on the internet. I am diagnosed',
          img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
        {
          id: 2,
          title: 'Five Costly Mistakes That ‘Nice People’ Make',
          category: 'Relationships',
          details: 'They all reek of inauthenticity. — “Be kind, but don’t be nice.” I forget where I heard this exact piece of advice, but it resonate with me ever since I heard it. There’s a difference between treating people well and being nice',
          img: 'https://miro.medium.com/max/700/0*nV7ZiHQ8KpGJtxwv'
        },
        {
          id: 3,
          title: 'I’d Rather Re-Read These 10 Books Over and Over Again Instead of Starting New Ones',
          category: 'Books',
          details: 'Books that just might change your life, too — When I was lost, stuck, broke, and hopeless, I started diving into self-improvement and kept hearing the',
          img: 'https://miro.medium.com/max/700/0*AxpsmniSy4colytE'
        },
        {
          id: 4,
          title: 'Why the smartest people embrace being wrong',
          category: 'Mental Models',
          details: 'A mental model used by Jeff Bezos, Adam Grant, Ben Franklin, Ralph Waldo Emerson, and other great thinkers. — What happens when our beliefs are challenged? As organizational psychologist Adam Grant explains',
          img: 'https://miro.medium.com/max/1400/1*JiMtTrlA1JYqCWCLtc_F7g.png'
        },
        {
          id: 5,
          title: 'Why Growing Richer Requires You to Be Unselfish',
          category: 'Money',
          details: 'One question to keep asking yourself every day — Let’s say you make $120k in a year. You have a pretty good lifestyle. Your kids are well taken care of. Your bills are paid on time. You have your own business. Why should you',
          img: 'https://miro.medium.com/max/1400/1*Mccx9p1K0Guq7aOOFFk5tQ.jpeg'
        },
      ],
      autoSlide: null
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
      button {
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