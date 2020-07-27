<template>
  <div v-if="api">
    <section class="modal">
      <div class="modal_container">
        <button class="modal_fechar" @click="$router.go(-1)">X</button>
        <iframe
          width="560"
          height="315"
          :src="`https://www.youtube.com/embed/${api.youtube}`"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </section>
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
  },
};
</script>

<style scoped>
.modal::before {
  content: "";
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
}

.modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50px;
  left: 0px;
  width: 100%;
  padding: 80px;
}

.modal_container {
  z-index: 1;
}

.modal_container iframe {
  display: flex;
  align-self: center;
}

.modal_fechar {
  color: white;
  background: red;
  border-radius: 50%;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  padding: 10px;
  border: 1px solid white;
}

.modal_fechar:hover {
  background: crimson;
}
</style>