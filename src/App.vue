<template>
  <div id="app">
    <task1 class="task1"/>
    <!-- <better-task1 /> -->
  </div>
</template>

<script>
//import BetterTask1 from "./components/tasks/BetterTask1.vue";
import Task1 from "./components/Task1.vue";
export default {
  name: "app",
  components: {
    //BetterTask1,
    Task1
  }
};
</script>

<style>
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
body {
  box-sizing: border-box;
  background-color:#f3f6f8;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
}
.task1 {
  max-width:800px;
}
</style>
