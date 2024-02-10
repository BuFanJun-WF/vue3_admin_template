import SvgIcon from "@/components/SvgIcon/index.vue";
import Pagination from "@/components/Pagination/index.vue";
import type { App, Component } from "vue";
const components: { [name: string]: Component } = { SvgIcon, Pagination };
// 对外暴露一个插件对象
export default {
  // 插件执行install方法
  install(app: App) {
    // 注册项目全部的全局组件
    Object.keys(components).forEach((key: string) => {
      app.component(key, components[key]);
    });
  },
};
