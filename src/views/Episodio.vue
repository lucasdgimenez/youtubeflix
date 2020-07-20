<template>
  <div v-if="api">
    <iframe
      width="560"
      height="315"
      :src="`https://www.youtube.com/embed/${api.youtube}`"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "episodio",
  props: ["episodio"],
  mixins: [fetchData],
  created() {
    this.fetchData(`/episodio/${this.episodio}`);
  },
  beforeRouteUpdate(to, from, next) {
    this.fetchData(`/episodio/${to.params.episodio}`);
    next();
  }
};
</script>

<style scoped>
</style>