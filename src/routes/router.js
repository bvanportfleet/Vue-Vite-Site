import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Contact from "../components/Contact.vue";
import Education from "../components/Education.vue";
import WorkHistory from "../components/WorkHistory.vue";
import Recommendations from "../components/Recommendations.vue";
import Todo from "../components/Todo/TodoApp.vue";

const routes = [
  {
    path: "/",
    component: Home,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/contact/:userId",
    props: true, // Automatically pass route params as props
    component: Contact,
    meta: {
      title: "Contact",
    },
  },
  {
    path: "/education/:userId",
    props: true, // Automatically pass route params as props
    component: Education,
    meta: {
      title: "Education",
    },
  },
  {
    path: "/workhistory/:userId",
    props: true, // Automatically pass route params as props
    component: WorkHistory,
    meta: {
      title: "WorkHistory",
    },
  },
  {
    path: "/Recommendations/:userId",
    props: true, // Automatically pass route params as props
    component: Recommendations,
    meta: {
      title: "Recommendations",
    },
  },
  {
    path: "/todo",
    component: Todo,
    meta: {
      title: "Todo",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from) => {
  document.title = to.meta?.title ?? "default title";
});
export default router;
