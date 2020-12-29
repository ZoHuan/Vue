// 配置路由相关的信息
import VueRouter from "vue-router";
import Vue from "vue";
// import Home from "../components/Home";
// import About from "../components/About";
// import User from "../components/User";
// 路由懒加载
const Home = () => import("../components/Home");
const HomeNews = () => import("../components/HomeNews");
const HomeMessage = () => import("../components/HomeMessage");
const About = () => import("../components/About");
const User = () => import("../components/User");

// 1. 通过Vue.use(插件)，安装插件
Vue.use(VueRouter);

// 2. 创建VueRouter对象
const routes = [
  {
    path: "",
    // redirect重定向:
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home,
    children: [
      {
        path: "",
        redirect: "news"
      },
      {
        path: "news",
        component: HomeNews
      },
      {
        path: "message",
        component: HomeMessage
      }
    ]
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/user/:userId",
    component: User
  }
];

const router = new VueRouter({
  // 配置路由和组价之间的应用关系
  routes,
  mode: "history",
  linkActiveClass: "active"
});

// 3. 将router对象传入到Vue实例
export default router;
