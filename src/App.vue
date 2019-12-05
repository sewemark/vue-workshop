<template>
  <div id="app">
    <nav>
      <router-link to="/task1" class="routerLink">Task1</router-link>
      <router-link to="/task2" class="routerLink">Task2</router-link>
      <router-link to="/task5" class="routerLink">Task5</router-link>
      <!-- Your solutions -->
      <!-- <router-link to="/task1Solution" class="routerLink">Task1Solution</router-link>
      <router-link to="/task2Solution" class="routerLink">Task2Solution</router-link>
      <router-link to="/task5Solution" class="routerLink">Task5Solution</router-link>-->
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app"
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
  background-color: #f3f6f8;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.routerLink {
  margin-left: 20px;
}
</style>
