import { createApp } from "vue";
import App from "@/App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

console.log(import.meta.env);
createApp(App).use(ElementPlus).mount("#app");
