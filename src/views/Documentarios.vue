<template>
  <div>
    <div v-if="api" class="container">
      <h1>Documentarios</h1>

      <ul class="api_main">
        <section id="section1" class="grid_geral">
          <li v-for="filme in api.filmes" :key="filme.id">
            <div v-if="filme.categoria == 'documentario'" class="grid_item">
              <figure class="foto_legenda">
                <img id="imgOver" :src="require(`../assets/${filme.id}.jpg`)" />
                <router-link class="routerLink" :to="{name: 'filme', params: {filme: filme.id}}">
                  <figcaption>
                    <h2 class="showMore">{{filme.nome}}</h2>
                  </figcaption>
                </router-link>
              </figure>
            </div>
          </li>
        </section>
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
  },
};
</script>

<style scoped></style>
