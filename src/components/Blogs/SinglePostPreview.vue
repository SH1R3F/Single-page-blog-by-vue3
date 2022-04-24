<template>
  <div class="single-post row">
    <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="">
    <div>
      <h2>Why the smartest people embrace being wrong</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione excepturi reiciendis illo ad vero neque voluptas. Laborum similique consequuntur odio sit architecto corporis cumque doloremque, illo enim ad, quaerat maiores!</p>
      <a href="#" class="category">Category</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .single-post {
    background: #FFF;
    box-shadow: var(--box-shadow);
    padding: 20px;
    border-radius: 5px;
    position: relative;
    margin-bottom: 15px;
    overflow: hidden;
    img {
      max-width: 35%;
      border-radius: 6px;
      box-shadow: var(--box-shadow);
      @media (max-width: 768px) {
        & {
          max-width: 100%;
        }
      }
    }
    div {
      padding-inline-start: 15px;
      height: 100%;
      h2 {
        color: orange;
      }
      p {
        margin-bottom: 10px;
      }
      .category {
        background: #EEE;
        border-radius: 15px;
        display: inline;
        padding: 1px 15px;
        color: #000;
        font-size: 0.9rem;
        font-weight: bold;
      }
    }
  }
</style>