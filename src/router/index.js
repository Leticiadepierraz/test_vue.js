import { createRouter, createWebHashHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import about from "../views/AboutView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: EventList,
  },
  {
    path: "/About",
    name: "About",
    component: about,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
