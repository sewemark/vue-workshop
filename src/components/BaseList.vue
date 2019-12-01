<template>
  <div class="base-list">
    <div  v-for="(item, index) in items" v-bind:key="index">
      <base-list-element :item="item" />
  </div>
  </div>
</template>

<script>
import BaseListElement from './BaseListElement';

export default {
  name: 'BaseList',
  components:{
    BaseListElement,
  },
  props: {
    items: {
      type:Array,
      required: true,
    },
  }
}
</script>

<style scoped lang="scss">
</style>
