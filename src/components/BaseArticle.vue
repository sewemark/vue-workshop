<template>
  <div class="base-article">
    <header>{{item.time}} {{item.author}}</header>
    <section class="base-article__content">
      <div>{{item.description}}</div>
      <div v-if="item.type==='Article'" class="base-article__content--text">{{ item.text}}</div>
      <div v-if="item.type==='ImagePost'">
        <img :src="item.imageUrl" />
      </div>
      <div v-if="item.type==='Article'">
        <button class="base-article__content--showMore" @click="showMore = !showMore">Show more</button>
        <div v-if="showMore">{{ item.showMoreContent}}</div>
      </div>
    </section>
    <a v-bind:href="url" class="nav-link">
      <slot></slot>
    </a>
    <navigation-link url="/profile">
      <span class="fa fa-user"></span>
      Your Profile
    </navigation-link>
    <footer class="base-article__footer">
      <div v-if="item.type==='Event'" class="article__tags">
        <p class="tag" v-for="(tag, index) in item.tags" v-bind:key="index">{{tag}}</p>
      </div>
      <div v-else>
        <button class="base-article__content--like">&hearts; Like</button>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "BaseArticle",
  data: function() {
    return {
      showMore: false
    };
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

