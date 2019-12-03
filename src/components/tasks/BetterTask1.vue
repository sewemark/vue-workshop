<template>
  <div>
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
        <div class="article__content--tags">{{ item.tags}}</div>
      </template>
    </better-base-article>
  </div>
</template>

<script>
import BetterBaseArticle from "./BetterBaseArticle";
import mockedArticles from "../../services/mockedArticles";

export default {
  name: "BetterTask1",
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
