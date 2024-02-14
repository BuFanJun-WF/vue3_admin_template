// 通过vue-router插件实现模板路由配置
import { createRouter, createWebHashHistory } from "vue-router";

// 引入常量路由
import { constantRoute } from "./routes";

// 创建路由器
export const router = createRouter({
  // 路由模式默认为hash模式，创建一个 hash 历史记录
  history: createWebHashHistory(),
  // 添加路由到路由列表中
  routes: constantRoute,
  // 是否应该禁止尾部斜杠。默认为假
  strict: true,
  // 滚动行为，路由切换，则滚动条归零
  scrollBehavior: () => ({ left: 0, top: 0 }),
});
