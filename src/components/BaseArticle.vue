<template>
  <div class="base-article">
    <header>{{item.time}} {{item.author}}</header>
    <section class="base-article__content">
      <div>{{item.description}}</div>
      <div v-if="item.type==='Article'">{{ item.text}}</div>
      <div v-if="item.type==='ImagePost'">
        <img :src="item.imageUrl" />
      </div>
      <div v-if="item.type==='Article'">
        <button @click="showMore = !showMore">Show more</button>
        <div v-if="showMore">{{ item.showMoreContent}}</div>
      </div>
    </section>
    <footer class="base-article__footer">
      <div v-if="item.type==='Event'" class="article__content--tags">{{ item.tags}}</div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "BaseArticle",
   data: function () {
    return {
      showMore: false,
    }
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>
<style scoped lang="scss">
.base-article {
  margin-top: 10px;
  box-shadow: 2px 14px 35px -14px rgba(0, 0, 0, 0.75);

  &__header {
    padding: 10px;
    background-color: #505160;
  }

  &__content {
    padding: 10px;
    background-color: #68829e;
    min-height: 400px;
  }
}
</style>

