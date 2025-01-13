import { onMounted } from "vue";

export const useCalcDrag = (calcRefs, calcList) => {
  onMounted(() => {
    calcRefs.value.forEach((calc, index) => {
      calc.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", {
          ...calcList.value[index],
        }); // 必须设置才能开始拖拽
        calc.style.opacity = "0.5"; // 拖拽时稍微透明
      });

      calc.addEventListener("dragend", () => {
        calc.style.opacity = "1"; // 拖拽结束恢复透明度
      });
    });
  });
}