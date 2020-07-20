<template>
  <div>
    <div v-if="api">
      <!--<h1>{{api.nome}}</h1>-->
      <ul class="container">
        <li v-for="episodio in api.episodio" :key="episodio.id" class="item">
          <div>
            <h2>{{api.nome}}</h2>
            <span>{{api.duracao}}</span>
            <p>{{api.descricao}}</p>
            <h3>{{api.diretor}}</h3>
            <router-link :to="{name: 'episodio', params: {episodio: episodio.id}}">Assistir agora</router-link>
          </div>
          <div v-for="item in imgFilmes" :key="item.id">
            <div v-if="item.nome === api.nome">
              <img :src="item.img" />
            </div>
          </div>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "filme",
  data() {
    return {
      imgFilmes: "aonda.jpg"
    };
  },
  methods: {
    fetchProdutos() {
      fetch("http://localhost:3000/filme")
        .then(r => r.json())
        .then(r => {
          this.imgFilmes = r;
        });
    }
  },
  props: ["filme"],
  mixins: [fetchData],
  created() {
    this.fetchData(`/filme/${this.filme}`);
    this.fetchProdutos();
  }
};
</script>

<style scoped>
.item {
  display: flex;
}
.item div {
  max-width: 500px;
}

.item img {
  max-width: 400px;
}
</style>