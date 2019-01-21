import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/pages/Home";
import Login from "@/components/pages/Login";
import Success from "@/components/pages/Success";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "*",
      redirect: "/"
    },
    {
      path: "/",
      name: "home",
      component: Login
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/success",
      name: "success",
      component: Success
    }
  ]
});
