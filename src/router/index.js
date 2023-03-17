import VueRouter from "vue-router";
import Vue from "vue";
import counterComponent from "../components/counter.component.vue";
import NotFoundComponent from "../components/notFound.component.vue";
import HomeComponent from "@/components/home.component.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/counter", name: "counter", component: counterComponent },
  { path: "/", name: "home", component: HomeComponent },
  {
    path: "/:catchAll(.*)",
    name: "notFound",
    component: NotFoundComponent,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
