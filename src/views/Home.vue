<template>
  <div class="container">
    <h1>Home</h1>
    <div v-if="api" class="api_main">
      <h1>Filmes</h1>
      <div>
        <Filmes />
      </div>
      <h1>Documentarios</h1>
      <div>
        <Documentarios />
      </div>
      <h1>Series</h1>
      <div>
        <Series />
      </div>
    </div>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";
import Filmes from "@/views/Filmes.vue";
import Documentarios from "@/views/Documentarios.vue";
import Series from "@/views/Series.vue";

export default {
  name: "home",
  mixins: [fetchData],
  components: {
    Filmes,
    Documentarios,
    Series
  },
  created() {
    this.fetchData("/portal");
  }
};
</script>

<style>
</style>