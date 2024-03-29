import { createApp } from "vue";
import App from "@/App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// svg插件的配置代码
import "virtual:svg-icons-register";

//引入自定义插件对象：注册整个项目全局组件
import globalComponent from "@/components/index";
// 引入模板的全局样式文件
import "@/styles/index.scss";

// 引入路由
import { router } from "./router";

// 这个应该是一个对象，这个对象里面有install方法
// 只要使用了use方法，就是触发这个组件的install方法
createApp(App).use(ElementPlus).use(globalComponent).use(router).mount("#app");
