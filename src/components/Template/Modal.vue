<template>
  <teleport to="#modals">
    <div class="overlay" @click.self="$emit('quitModal')">
      <div class="modal">
        <h1 class="modal-title">{{ title }}</h1>
        <div class="modal-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>

  export default {
    props: ['title'],
    data() {
      return {
        body: document.querySelector('body')
      }
    },
    mounted() {
      this.body.style.overflow = 'hidden';
    },
    unmounted() {
      this.body.style.overflow = 'auto';
    }
  }

</script>

<style lang="scss" scoped>
  .overlay {
    position: fixed;
    top: 0; left: 0; right: 0;
    height: 100vh;
    width: 100vw;
    z-index: 9999;
    background: rgba(0, 0, 0, .9);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    .modal {
      background: #FFF;
      padding: 30px 20px;
      border-radius: 7px;
      width: 700px;
      max-width: 100%;
      .modal-title {
        font-weight: bold;
        color: orange;
        border-bottom: 1px solid #EEE;
        text-transform: uppercase;
        text-align: center;
      }
      .modal-body {
        padding: 35px 0 20px;
      }
    }
  }
</style>