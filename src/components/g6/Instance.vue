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
      x: 100, // Number，可选，节点位置的 x 值
      y: 200, // Number，可选，节点位置的 y 值
    },
    {
      id: "node2", // String，该节点存在则必须，节点的唯一标识
      x: 300, // Number，可选，节点位置的 x 值
      y: 200, // Number，可选，节点位置的 y 值
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
      palette: {
        type: "group",
        field: "cluster",
      },
    },
    layout: {
      type: "force",
    },
    behaviors: ["custom-behavior"],
  });
  await graph.value.render(); // 渲染图
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
        style: { x: layerX, y: layerY },
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
