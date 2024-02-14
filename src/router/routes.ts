// 对外暴露配置路由(常量路由)
export const constantRoute = [
  {
    // 登录成功以后展示数据的路由
    path: "/",
    name: "Home",
    component: () => import("@/view/home/index.vue"),
  },
  {
    // 登录路由
    path: "/login",
    // 命名路由
    name: "Login",
    component: () => import("@/view/login/index.vue"),
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/view/404/index.vue"),
  },
  {
    // 匹配到任意路由
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    name: "Any",
  },
];
