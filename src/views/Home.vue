<template>
  <div class="container">
    <div v-if="api" class="api_main">
      <div>
        <Filmes />
      </div>
      <div>
        <Documentarios />
      </div>
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
    Series,
  },
  created() {
    this.fetchData("/portal");
  },
};
</script>

<style>
</style>