<template>
  <div class="task2">
    <base-article :item="articles.imageItems[0]" />
    <base-article :item="articles.articleItems[0]" />
    <base-article :item="articles.eventItems[0]" />
  </div>
</template>

<script>
import BaseArticle from "./BaseArticle";
import mockedArticles from "../services/mockedArticles";

export default {
  name: "Task2",
  data() {
    return {
      articles: mockedArticles
    };
  },
  components: {
    BaseArticle
  }
};
</script>
<style lang="scss">
.task2 {
  max-width: 800px;
}
</style>
