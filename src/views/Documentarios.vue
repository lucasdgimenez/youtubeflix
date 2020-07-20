<template>
  <div>
    <div v-if="api" class="container">
      <ul class="bloco api_main">
        <li v-for="filme in api.filmes" :key="filme.id">
          <div v-if="filme.categoria == 'documentario'">
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
  name: "documentario",
  mixins: [fetchData],
  created() {
    this.fetchData("/filmes");
  }
};
</script>

<style>
</style>