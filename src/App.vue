<template>
  <BlogHeader />
  <BlogContent />
  <SiteFooter />
</template>

<script>
  import BlogHeader from '@/components/Template/Header.vue';
  import BlogContent from '@/components/Blogs/BlogContent.vue';
  import SiteFooter from '@/components/Template/SiteFooter.vue';

  export default {
    components: {
      BlogHeader,
      BlogContent,
      SiteFooter
    }
  }
</script>