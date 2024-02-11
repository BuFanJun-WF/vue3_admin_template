import { createApp } from "vue";
import App from "@/App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// svg插件的配置代码
import "virtual:svg-icons-register";

//引入自定义插件对象：注册整个项目全局组件
import gloablComponent from "@/components/index";
// 引入模板的全局样式文件
import "@/styles/index.scss";

// 测试mock接口是否可以使用
import axios from "axios";
// 登录接口
axios({
  url: "/api/user/login",
  method: "post",
  data: {
    username: "admin",
    password: "111111",
  },
});
// 这个应该是一个对象，这个对象里面有install方法
// 只要使用了use方法，就是触发这个组件的install方法
createApp(App).use(ElementPlus).use(gloablComponent).mount("#app");
