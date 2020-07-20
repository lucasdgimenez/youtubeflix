<template>
  <div id="app">
    <TheMenu />
    <router-view />
  </div>
</template>

<script>
import TheMenu from "@/components/TheMenu.vue";
export default {
  components: {
    TheMenu
  }
};
</script>

<style>
body {
  margin: 0px;
  font-family: "Avenir", Arial;
  color: #234;
}
ul {
  list-style: none;
  margin: 0px;
  padding: 0px;
}
a {
  font-weight: bold;
  text-decoration: none;
}

a.router-link-exact-active {
  color: #4b8;
}

.container {
  max-width: 980px;
  margin: 0 auto;
  padding: 20px;
}

.v-enter {
  opacity: 0;
  transform: translate3d(-20px, 0, 0);
}

.v-enter-active {
  transition: all 0.3s;
}

.bloco {
  display: flex;
}

.api_main div {
  border: 0.5px solid black;
}
</style>
