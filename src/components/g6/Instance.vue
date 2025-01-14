<script setup>
import { Graph } from "@antv/g6";
import { registerG6Behavior } from "./g6.js";
import { onMounted, shallowRef } from "vue";

registerG6Behavior();

const data = {
  // 点集
  nodes: [
    {
      id: "node1", // String，该节点存在则必须，节点的唯一标识
      x: 50, // Number，可选，节点位置的 x 值
      y: 50, // Number，可选，节点位置的 y 值
      style: {
        fill: "#1783FF",
        size: 32,
      },
    },
    {
      id: "node2", // String，该节点存在则必须，节点的唯一标识
      x: 60, // Number，可选，节点位置的 x 值
      y: 60, // Number，可选，节点位置的 y 值
      style: {
        size: 32,
        fill: "#1783FF",
      },
    },
  ],
  // 边集
  edges: [
    {
      source: "node1", // String，必须，起始点 id
      target: "node2", // String，必须，目标点 id
    },
  ],
};

const graph = shallowRef();

const initGraph = async () => {
  const container = document.querySelector("#mountNode");
  graph.value = new Graph({
    container: "mountNode", // String | HTMLElement，必须，在 Step 1 中创建的容器 id 或容器本身
    width: container.width, // Number，必须，图的宽度
    height: container.height, // Number，必须，图的高度
    data,
    node: {
      type: "custom-node",
    },
    layout: {
      type: "force",
    },
    behaviors: ["custom-behavior", "drag-element"],
  });
  await graph.value.render(); // 渲染图
  window.graph = graph.value;
};

onMounted(async () => {
  await initGraph();

  const canvas = graph.value.getCanvas().config.container;
  canvas.addEventListener("dragover", (e) => {
    e.preventDefault(); // 允许拖拽
  });
  canvas.addEventListener("drop", (e) => {
    const { layerX, layerY } = e;
    graph.value.addNodeData([
      {
        id: "node-" + Date.now(),
        type: "custom-node",
        style: {
          x: layerX,
          y: layerY,
        },
      },
    ]);
    graph.value.draw();
  });
});
</script>

<template>
  <div id="mountNode" class="w-full h-full"></div>
</template>

<style lang="scss" scoped></style>
