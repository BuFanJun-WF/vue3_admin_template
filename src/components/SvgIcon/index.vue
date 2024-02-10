<script setup lang="ts">
// 使用 defineProps 可以在子组件中明确指定接收的 props 类型以及默认值，以及是否必须传递。
// 这样可以减少不必要的 props 类型错误，并且使得组件在使用时更加清晰和易于理解。
defineProps({
  //xlink:href属性值的前缀
  prefix: {
    type: String,
    default: "#icon-",
  },
  // svg矢量图的名字
  name: String,
  // svg图标的颜色
  color: {
    type: String,
    default: "",
  },
  //svg宽度
  width: {
    type: String,
    default: "16px",
  },
  //svg高度
  height: {
    type: String,
    default: "16px",
  },
});
</script>

<template>
  <div>
    <!-- 封装svg容器标签 -->
    <svg :style="{ width: width, height: height }">
      <!-- 表示链接拼接为#icon-phone -->
      <use :xlink:href="prefix + name" :fill="color"></use>
    </svg>
  </div>
</template>
