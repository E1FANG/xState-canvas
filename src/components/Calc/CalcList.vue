<script setup>
import { ref, useTemplateRef, onMounted } from "vue";
import Calc from "@/components/Icon/calc";

const calcList = ref([
  {
    id: "aggregation",
  },
]);

const calcRefs = useTemplateRef("items");

// const draggable = document.getElementById("draggable");

// draggable.addEventListener("dragstart", (e) => {
//   e.dataTransfer.setData("text/plain", null); // 必须设置才能开始拖拽
//   draggable.style.opacity = "0.5"; // 拖拽时稍微透明
// });

onMounted(() => {
  console.log(calcRefs);
  calcRefs.value.forEach((calc) => {
    calc.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", null); // 必须设置才能开始拖拽
      calc.style.opacity = "0.5"; // 拖拽时稍微透明
    });
  });
});
</script>

<template>
  <div class="p-2">
    <div class="title">Calc</div>
    <div class="py-4">
      <div
        v-for="item in calcList"
        ref="items"
        class="inline-block"
        draggable="true"
      >
        <Calc :name="item.id" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
