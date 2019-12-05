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
  margin-top: 50px;
  box-shadow: 2px 14px 35px -14px rgba(0, 0, 0, 0.75);

  &__header {
    padding: 10px;
    background-color: #505160;
  }

  &__content {
    padding: 10px;
    background-color: white;
    min-height: 400px;
    color: #5a6371;

    &--text {
      text-align: justify;
      text-justify: inter-word;
    }
    &--showMore {
      margin-top: 5px;
      background-color: #4256ef;
      color: #d9ddfc;
      border: 0;
      border-radius: 5px;
      font-size: 25px;
      padding: 5px;
    }
    &--like {
      margin-left: 20px;
      background-color: #ec407a;
      margin-top: 5px;
      color: #d9ddfc;
      border: 0;
      border-radius: 5px;
      font-size: 25px;
      padding: 5px;
    }
  }
  &__footer {
    height: 50px;
    text-align: left;
    margin-top: 20px;
  }

  &__tags {
    display: inline-flex;
  }
}
.tag {
  background-color: #ff9800;
  border-radius: 5px;
  padding: 10px;
  margin-left: 10px;
  display: inline-flex;
}
</style>
