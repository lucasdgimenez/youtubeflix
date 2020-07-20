<template>
  <div>
    <div v-if="api">
      <ul>
        <li v-for="filme in api.filmes" :key="filme.id">
          <div v-if="filme.categoria == 'filme'">
            <h2>{{filme.nome}}</h2>
            <p>{{filme.descricao}}</p>
            <router-link :to="{name: 'filme', params: {filme: filme.id}}">Mais informacoes</router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "filmes",
  mixins: [fetchData],
  created() {
    this.fetchData("/filmes");
  }
};
</script>

<style>
.bloco {
  display: flex;
}
</style>