<template>
  <div>
    <div v-if="api">
      <!--<h1>{{api.nome}}</h1>-->
      <div v-if="api.categoria !== 'serie'" class="geral">
        <ul class="container">
          <li v-for="episodio in api.episodio" :key="episodio.id" class="item container">
            <div class="inside_itens">
              <h2>{{ api.nome }}</h2>
              <span>{{ api.duracao }}</span>
              <p>{{ api.descricao }}</p>
              <table>
                <td>
                  <b>Diretor</b>
                </td>
                <td>{{ api.diretor }}</td>
              </table>

              <router-link
                class="btn"
                :to="{ name: 'episodio', params: { episodio: episodio.id } }"
              >Assistir agora</router-link>
            </div>
            <div>
              <img :src="require(`../assets/${api.id}.jpg`)" />
            </div>
          </li>
        </ul>
      </div>
      <div v-if="api.categoria == 'serie'" class="container geral">
        <div class="item">
          <div class="inside_itens">
            <h2>{{ api.nome }}</h2>
            <span>{{ api.duracao }}</span>
            <p>{{ api.descricao }}</p>
            <table>
              <td>
                <b>Diretor</b>
              </td>
              <td>{{ api.diretor }}</td>
            </table>
            <ul>
              <li v-for="episodio in api.episodio" :key="episodio.id" class="container item_serie">
                <span>{{ episodio.nome }}</span>
                <router-link
                  class="btn"
                  :to="{ name: 'episodio', params: { episodio: episodio.id } }"
                >Assistir agora</router-link>
              </li>
            </ul>
          </div>
          <div>
            <img :src="require(`../assets/${api.id}.jpg`)" />
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "filme",
  components: {},
  data() {
    return {};
  },

  props: ["filme"],
  mixins: [fetchData],
  created() {
    this.fetchData(`/filme/${this.filme}`);
  },
};
</script>

<style scoped>
.geral {
  margin-bottom: 400px;
}
.item {
  display: flex;
  background: #141414;
  align-items: flex-start;
}

.item div {
  background: black;
  padding: 30px;

  max-width: 700px;
  margin: 0 auto;
}

.item div p {
  text-align: justify;
}

.item img {
  max-width: 400px;
  max-height: 400px;
}

.btn {
  border: 1px solid white;
  color: white;
  background: #141414;
  padding: 20px;
}

.btn:hover {
  background: #d1161d;
}

table {
  margin-bottom: 30px;
}

.item_serie {
  padding: 40px;
  border: 1px solid #d1161d;
  margin-top: 5px;
}

.item_serie span {
  margin-right: 10px;
}
</style>
