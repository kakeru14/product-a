<<<<<<< HEAD
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import OrderConfirm from "../views/OrderConfirm.vue";
import Itemlist from "../views/Itemlist.vue";
import ItemDescription from "../views/ItemDescription.vue";
=======
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import OrderConfirm from '../views/OrderConfirm.vue'
import Cart from '../components/Shopping-cart.vue'
>>>>>>> 6d9f13a69c6368f480dad41f2bc852ca132e872e

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/OrderConfirm",
    name: "OrderConfirm",
    component: OrderConfirm,
  },
  {
    path: "/itemlist",
    name: "Itemlist",
    component: Itemlist,
  },
  {
    path: "/itemdescription",
    name: "ItemDescription",
    component: ItemDescription,
  },
<<<<<<< HEAD
];
=======
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
]
>>>>>>> 6d9f13a69c6368f480dad41f2bc852ca132e872e

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
