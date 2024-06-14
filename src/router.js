import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import AboutComponent from "./pages/AboutComponent.vue";
import SchedulingComponent from "./pages/SchedulingComponent.vue";
import ContactComponent from "./pages/ContactComponent.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/",
        name: "home",
        component: AppHome,
      },
      {
        path: "/about",
        name: "chi-siamo",
        component: AboutComponent,
      },
      {
        path: "/programmazione",
        name: "programmazione",
        component: SchedulingComponent,
      },
      {
        path: "/contattaci",
        name: "contattaci",
        component: ContactComponent,
      },


    ],
  });
  
  export { router };