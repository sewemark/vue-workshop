<template>
  <div>
    <div>
      <input v-model="breed" class="input" type="text">
      <FetchData :url="url">
        <template  #loading="{isPending}">
          <PulseLoader v-if="isPending" />
        </template>

        <template #error="{ error, refresh }">
          <div v-if="error">
            {{ error }}
            <AppButton @click="refresh">Refresh!</AppButton>
          </div>
        </template>

        <template #default="{ data, isPending, error, refresh }">
          <div v-if="!error">
            <img :src="data.message" class="result-image">
            <AppButton @click="refresh">Refresh!</AppButton>
          </div>
        </template>
      </FetchData>
      <!--<PulseLoader v-if="isPending"/>
      <template v-if="error">
        <div>
          {{ error }}
          <AppButton @click="refresh">Refresh!</AppButton>
        </div>
      </template>

      <template v-if="!error && !isPending">
        <div>
          <img :src="data.message" class="result-image">
          <AppButton @click="refresh">Refresh!</AppButton>
        </div>
      </template> -->
    </div>
  </div>
</template>

<script>
// import { ref, computed } from '@vue/composition-api'
import FetchData from './FetchData'
// import useFetchData from '@/composables/useFetchData'
import PulseLoader from 'vue-spinner/src/PulseLoader'

export default {
  components: {
    FetchData,
    PulseLoader,
  },
  setup () {
  },
  data () {
    return {
      breed: 'collie/border'
    }
  },
  computed: {
    url () {
      return `https://dog.ceo/api/breed/${this.breed}/images/random`
    }
  }
}
</script>

<style lang="scss">
.input {
  font-size: 16px;
  padding: 6px 10px;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
}
.steps {
  max-width: 30rem;
  text-align: left;
  margin: 0 auto 4rem;
  line-height: 1.6;
}
.result-image {
  display: block;
  margin: 0 auto 1rem
}
</style>
