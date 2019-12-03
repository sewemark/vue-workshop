<template>
  <div class="base-article">
    <slot name="header">
      <header>{{item.time}} {{item.author}}</header>
    </slot>
    <section class="base-article__content">
      <div>{{item.description}}</div>
      <slot name="contentSlot" :item="item" :toggleShowMore="toggleShowMore" :shouldShow="shouldShow"></slot>
    </section>
    <footer class="base-article__footer">
      <slot name="footerSlot" :item="item">Default footer</slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: "BetterBaseArticle",
  data: function() {
    return {
      showMore: false
    };
  },
  methods:{
    toggleShowMore(){
      this.showMore = !this.showMore;
    },
    shouldShow(){
      return this.showMore;
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

