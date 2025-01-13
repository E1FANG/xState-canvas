<script setup>
import { ref, useTemplateRef, onMounted } from "vue";
import Calc from "@/components/Icon/calc";
import { useCalcDrag } from "@/hooks/useCalcDrag";

const calcList = ref([
  {
    id: "aggregation",
  },
]);

const calcRefs = useTemplateRef("items");

useCalcDrag(calcRefs, calcList);
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
