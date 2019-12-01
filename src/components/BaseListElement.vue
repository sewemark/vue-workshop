<template>
  <div class="list-element">
    <header>{{item.time}} {{item.author}}</header>
    <section class="list-element__content">
      <div v-if="item.type==='Article'">{{ item.text}}</div>
      <div v-if="item.type==='ImagePost'">
        <img :src="item.imageUrl" />
      </div>
    </section>
    <footer class="list-element__foter">
      <div v-if="item.type==='Event'">{{ item.tags}}</div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "BaseList",
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.list-element {
}
.base-list {
  &__element {
  }
  &__content {
  }
}
</style>
