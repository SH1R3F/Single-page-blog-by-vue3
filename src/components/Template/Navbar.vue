<template>
  <nav class="navbar">
    <div class="container flex">
      <a href="#" class="navbar-logo"><span>V</span>ue<span>B</span>log</a>
      <ul class="flex navigation-bar" :class="{'expanded': expanded}">
        <li><a href="#">Psychology</a></li>
        <li><a href="#">Love</a></li>
        <li><a href="#">Relationships</a></li>
        <li><a href="#">Social Media</a></li>
        <li><a href="#">Dev Ops</a></li>
        <button class="contact-us" @click="$emit('contactus')">Contact Us</button>
      </ul>
      <fa :icon="expanded ? 'times' : 'bars'" class="hidden toggle-mobile-nav" @click="toggleNavbar"/>
    </div>
  </nav>
</template>

<script>

export default {
  data() {
    return {
      expanded: false
    }
  },
  methods: {
    toggleNavbar() {
      this.expanded = !this.expanded;
    }
  }
}

</script>

<style lang="scss" scoped>
  .navbar {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 9999;
    background: #FFF;
    box-shadow: var(--box-shadow);
    padding: 10px 0;
    font-size: 1.1rem;
    .navbar-logo {
      margin-inline-end: auto;
      font-size: 1.5rem;
      color: #333;
      span {
        font-weight: bold;
        color: orange
      }
    }
    ul > * { margin: 0 7px; }
    li {
      display: inline;
      text-transform: uppercase;
      border-bottom: 1px solid #FFF;
      position: relative;
      &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 1px;
        bottom: 0; left: 0; right: 0;
        background: orange;
      }
      a { color: #333; }
      &:hover {
        a { 
          color: orange;
          transition: color 0.4s;
        }
        &::after {
          width: 100%;
          transition: width 0.4s;
        }
      }
    }
    button {
      color: orange;
      background: #FFF;
      border: 1px solid orange;
      border-radius: 15px;
      padding: 0 15px;
      transition: all 0.4s;
      &:hover {
        background-color: orange;
        color: #FFF;
      }
    }
  }
  svg {
    color: #333;
    background-color: #EEE;
    padding: 10px 11px;
    border-radius: 50%;
    cursor: pointer;
  }
  svg:not(.toggle-mobile-nav):hover,
  .expanded + .toggle-mobile-nav {
    background: #ffb937;
    color: #FFF;
    transition: all 0.2s;
    &.toggle-mobile-nav { padding: 10px 12px; }
  }

  // media queries
  @media (max-width: 768px) {
    .navbar {
      .navigation-bar {
        background: #FFF;
        position: absolute;
        top: 0; left: 0; right: 0;
        padding: 5px 20px;
        overflow: hidden;
        max-height: 0;
        display: block;
        &.expanded {
          box-shadow: var(--box-shadow);
          max-height: 500px;
          top: calc(100%);
          transition: max-height 0.6s ease-out;
        }
        & > * { 
          display: block;
          margin: 5px 0;
          width: 100%;
          padding: 0 5px;
          &.contact-us {
            border: none;
            text-align: start;
            color: #333;
            border-radius: 0;
            transition: none;
            &:hover {
              background-color: transparent;
              border: 1px solid orange;
              color: orange;
            }
          }
        }
      }
    }
    .toggle-mobile-nav {
      display: block;
    }
  }
</style>