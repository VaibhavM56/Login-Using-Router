import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import store from "./store";
import HomeComp from "./components/HomeComp";
import LoginComp from "./components/LoginComp";
import SignUpComp from "./components/SignUpComp";
import ProductComp from "./components/ProductComp";
import CartComp from "./components/CartComp";

let router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomeComp,
    },
    {
      path: "/login",
      component: LoginComp,
    },
    {
      path: "/signup",
      component: SignUpComp,
    },
    {
      path: "/products",
      component: ProductComp,
    },
    {
      path: "/cart",
      component: CartComp,
    },
  ],
});

router.beforeEach((to, from) => {
  console.log("to", to);
  console.log("from", from);

  //return true

  if (to.path === "/cart" && store.state.isAuthenticated) {
    return true;
  } else if (to.path === "/cart" && !store.state.isAuthenticated) {
    return "/login";
  }
});

let app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
