<template>
  <div class="header">
    <div class="container">
      <Navbar />
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
export default {
  components: {
    Navbar
  }
}

</script>

<style lang="scss" scoped>
  .header {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 9999;
    background: #FFF;
    box-shadow: var(--box-shadow);
    padding: 5px 0;
    font-size: 1.1rem;
  }
</style>