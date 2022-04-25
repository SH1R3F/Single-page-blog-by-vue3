<template>
  <div class="header">
    <Navbar @contactus="$emit('contactus')" />
    <Slider />
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import Slider from './Slider.vue'
export default {

  components: {
    Navbar,
    Slider
  }
}

</script>

<style lang="scss" scoped>

</style>