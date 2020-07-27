<template>
  <div id="app">
    <TheMenu />
    <router-view />
    <TheFooter />
  </div>
</template>

<script>
import TheMenu from "@/components/TheMenu.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  data() {
    return {};
  },
  components: {
    TheMenu,
    TheFooter,
  },
  methods: {},
};
</script>

<style>
html,
body,
div,
span,
h1,
h2,
h3,
h4,
h5,
h6,
p,
a,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}
footer {
  bottom: 0;
}
#app {
  color: white;
  background: #0c0a08;
}
body {
  font-family: "Avenir", Arial;
}
ul {
  list-style: none;
  margin: 0px;
  padding: 0px;
}
a {
  font-weight: normal;
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
  max-height: 400px;
}

a.router-link-active {
  font-weight: bold;
}

.container {
  max-width: 1450px;
  margin: 0 auto;
  padding: 15px;
}

.v-enter {
  opacity: 0;
  transform: translate3d(-20px, 0, 0);
}

.v-enter-active {
  transition: all 0.3s;
}

#section1 {
  border: 0.5px solid #141414;

  width: 100%;
}

.grid_geral {
  display: flex; /*
  display: grid;
  grid-template-columns: 200px 200px 200px 200px;*/
  overflow-x: scroll;
}

.grid_geral::-webkit-scrollbar {
  width: 18px;
  cursor: pointer;
}

.grid_geral::-webkit-scrollbar-thumb {
  cursor: pointer;
  background: #d1161d;
  border-left: 4px solid #faf6ed;
  border-right: 4px solid #faf6ed;
}

.grid_geral::-webkit-scrollbar-track {
  background: #faf6ed;
  cursor: pointer;
}

.grid_item {
  border: 1px solid #d1161d;
  background: skyblue;
  width: 300px;
}

.foto_legenda {
  position: relative;

  border: 1px solid white;
  box-shadow: 1px 1px 4px black;
  width: 300px;
}

.foto_legenda img {
  width: 100%;
  max-height: 100%;
  position: relative;
}

.foto_legenda figcaption {
  opacity: 0;
  position: absolute;
  top: 0px;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  width: 100%;
  height: 100%;
  /*esse width e height deixa a caixa preta ocupando
todo o espa�o da imagem */
  padding: 10px;
  box-sizing: border-box;
  transition: opacity 1s;
}

figure.foto_legenda:hover figcaption {
  opacity: 1;
}
/*
.grid_item h2 {
  margin: 0;
  padding: 0;
  border: 0;
  position: relative;
  top: 30px;
  margin-top: -28px;
  display: none;
  color: white;
}

.grid_item h2:hover {
  display: block;
}
.grid_item {
  background: rgba(0, 0, 0, 1);
}

.showMore:hover {
  z-index: 4;
}

.imgOver {
  position: absolute;
}*/
</style>
