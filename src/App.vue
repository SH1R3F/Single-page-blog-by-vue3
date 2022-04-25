<template>
  <BlogHeader @contactus="modal = true" />
  <BlogContent />
  <SiteFooter />
  <Modal v-if="modal" @quitModal="modal=false" title="Contact Me">
    <form class="contact-form">
      <div class="row">
        <input type="text" class="contact-form-input" placeholder="Your name">
        <input type="email" class="contact-form-input" placeholder="Your email">
      </div>
      <div class="row">
        <input type="text" class="contact-form-input" placeholder="Your number">
        <input type="text" class="contact-form-input" placeholder="Message subject">
      </div>
      <div class="row">
        <textarea placeholder="Your message" class="contact-form-textarea"></textarea>
      </div>
      <button type="submit" @click.prevent="ContactMe">Send !</button>
    </form>
  </Modal>
</template>

<script>
  import BlogHeader from '@/components/Template/Header.vue';
  import BlogContent from '@/components/Blogs/BlogContent.vue';
  import SiteFooter from '@/components/Template/SiteFooter.vue';
  import Modal from '@/components/Template/Modal.vue';

  export default {
    data() {
      return {
        modal: false,
        posts: []
      }
    },

    methods: {
      ContactMe() {
        alert('Check console');
        console.log('Nothing happened haha');
      }
    },

    components: {
      BlogHeader,
      BlogContent,
      SiteFooter,
      Modal
    },
  }
</script>

<style lang="scss" scoped>
  .contact-form {
    text-align: center;
    .row {
      .contact-form-input,
      .contact-form-textarea {
        flex: 1;
        width: 100%;
        margin: 5px;
        border: none;
        box-shadow: var(--box-shadow);
        padding: 7px 15px;
        border-radius: 2px;
        font-size: 1.1rem;
        border-left: 1px solid orange;
        border-bottom: 1px solid orange;
      }
    }
    button[type=submit] {
      background: transparent;
      border: 1px solid orange;
      padding: 7px 15px;
      margin-top: 20px;
      font-size: 1.1rem;
      color: orange;
      border-radius: 3px;
      box-shadow: var(--box-shadow);
      transition: background .3s;
      position: relative;
      cursor: pointer;
      &:hover {
        background: orange;
        color: #FFF;
      }
      &::before {
        content: 'Click me';
        position: absolute;
        right: -79px; top: 50%;
        transform: translateY(-50%);
        background: rgba(255, 165, 0, 0.7);
        color: #FFF;
        padding: .5px 6px;
        font-size: 1rem;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
        box-shadow: var(--box-shadow);
      }
      &::after {
        content: '';
        position: absolute;
        right: -20px; top: 50%;
        transform: translateY(-50%);
        height: 0;
        width: 0;
        border: 14px solid rgba(255, 165, 0, 0.7);
        border-top-color: transparent;
        border-left-color: transparent;
        border-bottom-color: transparent;
      }
    }
  }
</style>