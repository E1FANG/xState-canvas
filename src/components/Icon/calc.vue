<script setup>
import { defineAsyncComponent } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    default: "24px",
  },
  height: {
    type: String,
    default: "24px",
  },
});

const icon = defineAsyncComponent(() =>
  import(`./calcIconSvg/${props.name}.svg`)
);
</script>

<template>
  <div class="p-2 border-solid border-2 border-indigo-600 rounded inline-block">
    <component :is="icon" :width="props.width" :height="props.height" />
  </div>
</template>
