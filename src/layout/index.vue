<script setup>
import CalcList from "@/components/Calc/CalcList.vue";
import Instance from "@/components/g6/Instance.vue";
</script>

<template>
  <a-row class="w-full h-full">
    <a-col :span="4" class="border-solid border-r-4 border-blue-400">
      <CalcList />
    </a-col>
    <a-col :span="20" class="">
      <Instance />
    </a-col>
  </a-row>
</template>

<style lang="scss" scoped></style>
