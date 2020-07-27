<template>
  <header>
    <nav>
      <div class="logo">
        <router-link to="/">
          <i>YOUTUBE FLIX</i>
        </router-link>
      </div>
      <ul class="menu">
        <li>
          <router-link to="/filmes">Filmes</router-link>
        </li>
        <li>
          <router-link to="/series">Series</router-link>
        </li>
        <li>
          <router-link to="/documentarios">Documentarios</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheMenu",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Mulish:wght@700&display=swap");
header {
  background: #141414;
}
nav {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  align-content: space-between;
  padding: 25px;
}

.logo {
  flex: 1;
}

.logo a {
  font-family: "Mulish", sans-serif;
  font-size: 1.2rem;
  color: #d1161d;
}

ul li {
  display: inline-block;
}
.menu li a {
  color: white;
}
li a {
  padding: 0 10px;
  margin-left: 10px;
}
</style>