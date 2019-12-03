<template>
    <div>
    <better-base-article :item="articles.imageItems[0]"  />
    <better-base-article :item="articles.articleItems[0]" />
    <better-base-article :item="articles.eventItems[0]" />
    </div>
</template>

<script>
import BetterBaseArticle from './BetterBaseArticle';
import mockedArticles from '../../services/mockedArticles';

export default {
  name: 'BetterTask1',
  data () {
    return {
      articles:mockedArticles,
    }
  },
  components:{
    BetterBaseArticle,
  },
}
</script>
