<template>
  <div class="task1">
    <better-base-article :item="articles.imageItems[0]">
      <template v-slot:header>
        <h1>Another header for image item</h1>
      </template>
      <template v-slot:contentSlot="{item}">
        <img :src="item.imageUrl" />
      </template>
    </better-base-article>
    <better-base-article :item="articles.articleItems[0]">
      <template v-slot:contentSlot="{item, toggleShowMore, shouldShow}">
        <div>
          {{ item.text}}
          <div>
            <button @click="toggleShowMore">Show more</button>
            <div v-if="shouldShow()">{{ item.showMoreContent}}</div>
          </div>
        </div>
      </template>
    </better-base-article>
    <better-base-article :item="articles.eventItems[0]">
      <template v-slot:footerSlot="{item}">
        <div class="article__tags">
            <p class="tag" v-for="(tag, index) in item.tags" v-bind:key="index">{{tag}}</p>
        </div>
      </template>
    </better-base-article>x
  </div>
</template>

<script>
import BetterBaseArticle from "./BetterBaseArticle";
import mockedArticles from "../../services/mockedArticles";

export default {
  name: "Task1Solution",
  data() {
    return {
      articles: mockedArticles
    };
  },
  components: {
    BetterBaseArticle
  }
};
</script>
<style lang="scss">
.task1 {
  max-width: 800px;
}
</style>