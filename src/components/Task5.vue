<template>
  <div>
    <div>
      <input v-model="breed" class="input" type="text" />
      <FetchData :url="url">
        <template #loading="{isPending}">
          <PulseLoader v-if="isPending" />
        </template>

        <template #error="{ error, refresh }">
          <div v-if="error">
            {{ error }}
            <button @click="refresh" class="refreshButton">Refresh!</button>
          </div>
        </template>

        <template #default="{ data, isPending, error, refresh }">
          <div v-if="!error">
            <img :src="data.message" class="resultImage" />
            <button @click="refresh" class="refreshButton">Refresh!</button>
          </div>
        </template>
      </FetchData>
    </div>
  </div>
</template>

<script>
import FetchData from "./FetchData";
import PulseLoader from "vue-spinner/src/PulseLoader";

export default {
  components: {
    FetchData,
    PulseLoader
  },
  data() {
    return {
      breed: "collie/border"
    };
  },
  computed: {
    url() {
      return `https://dog.ceo/api/breed/${this.breed}/images/random`;
    }
  }
};
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
.resultImage {
  display: block;
  margin: 0 auto 1rem;
}
.refreshButton {
  margin-top: 5px;
  background-color: #4256ef;
  color: #d9ddfc;
  border: 0;
  border-radius: 5px;
  font-size: 25px;
  padding: 5px;
}
</style>
