import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");

const fun = () => {
  console.log("你好");
};

fun();
