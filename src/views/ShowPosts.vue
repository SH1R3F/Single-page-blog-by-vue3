<template>
  <div class="blogs col col-md-70">
    <div class="search">
      <input type="search" placeholder="Searching for a post?" v-model="search">
    </div>
    <SinglePostPreview v-for="post in resultPosts" :key="post.id" :post="post" />
    <div class="pagination" v-if="pages > 1">
      <a href="#" :disabled="page == 1" @click.prevent="paginate(parseInt(page) - 1)">Prev</a>
      <a href="#" v-for="n in pages" :key="n" :class="{ active: n == page }" @click.prevent="paginate(n)">{{ n }}</a>
      <a href="#" :disabled="page == pages" @click.prevent="paginate(parseInt(page) + 1)">Next</a>
    </div>
  </div>
</template>

<script>
  import SinglePostPreview from '@/components/Blogs/SinglePostPreview.vue';
  export default {
    props: ['catid'],
    components: {
      SinglePostPreview
    },
    data() {
      return {
        posts: [],
        perPage: 6,
        page: this.$route.query.page || 1,
        pages: 0,
        search: ''
      }
    },
    computed: {
      resultPosts() {
        let result = this.posts;

        if (this.catid) {
          // Show posts by category id
          result = result.filter(post => post.category.id == this.catid);
        }

        // Achieve Search
        result = result.filter(post => post.title.toLowerCase().includes(this.search.toLowerCase()));

        // Achieve Pagination
        const start = (this.page - 1) * this.perPage;
        const end   = this.page * this.perPage;
        const paginated = result.slice(start, end);
        // Update number of pages
        this.pages = Math.ceil(result.length / this.perPage);

        return paginated;

      }
    },
    watch: {
      '$route.query.page': {
        handler(value) {
          this.page = value || 1;
        }
      }
    },
    methods: {
      paginate(n) {
        if (n > this.pages || n < 1) return;
        this.$router.push({ path: this.$route.path, query: { page: n } } );
      }
    },
    mounted() {
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
    }
  }
</script>

<style lang="scss" scoped>
  .blogs {
    .search {
      margin-bottom: 5px;
      input {
        width: 100%;
        border: none;
        padding: 10px;
        background: transparent;
        font-weight: bold;
        border-bottom: 1px solid orange;
        border-inline-start: 1px solid orange;
        // box-shadow: var(--box-shadow);
        border-radius: 2px;
      }
    }

    .pagination {
      a {
        color: #000;
        background: #FFF;
        margin: 0 2px;
        padding: 2px 10px;
        border-radius: 3px;
        box-shadow: var(--box-shadow);
        &.active {
          background: orange;
          color: #FFF;
        }
        &[disabled=true] {
          background: #EFEFEF;
          cursor: default;
        }
      }
    }
  }
</style>