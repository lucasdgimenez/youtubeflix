import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Filmes from "@/views/Filmes";
import Series from "@/views/Series";
import Documentarios from "@/views/Documentarios";
import Filme from "@/views/Filme";
import Episodio from "@/views/Episodio";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/filmes",
    name: "filmes",
    component: Filmes,
  },
  {
    path: "/series",
    name: "series",
    component: Series,
  },
  {
    path: "/documentarios",
    name: "documentarios",
    component: Documentarios,
  },
  {
    path: "/filmes/:filme",
    name: "filme",
    component: Filme,
    props: true,
    children: [
      {
        path: ":episodio",
        name: "episodio",
        component: Episodio,
        props: true,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
