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
const Profile = () => import("../components/Profile");

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
    // meta: 元数据(描述数据的数据)
    meta: {
      title: "首页"
    },
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
    component: About,
    meta: {
      title: "关于"
    },
    // 路由独享的守卫
    beforeEnter: (to, from, next) => {
      console.log("about beforeEnter");
      next();
    }
  },
  {
    path: "/user/:userId",
    component: User,
    meta: {
      title: "用户"
    }
  },
  {
    path: "/profile",
    component: Profile,
    meta: {
      title: "档案"
    }
  }
];

const router = new VueRouter({
  // 配置路由和组价之间的应用关系
  routes,
  mode: "history",
  linkActiveClass: "active"
});

// 前置守卫(guard)
router.beforeEach((to, from, next) => {
  //  从from跳转到to
  document.title = to.matched[0].meta.title;
  console.log(to);
  console.log("++++");
  next();
});

// 后置钩子(hook)
router.afterEach((to, from) => {
  console.log("----");
});

// 3. 将router对象传入到Vue实例
export default router;
