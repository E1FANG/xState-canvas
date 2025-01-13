import { register, ExtensionCategory, BaseBehavior, CanvasEvent } from '@antv/g6';

export const registerG6Behavior = () => {
  register(ExtensionCategory.BEHAVIOR, 'custom-behavior', CanvasDragend);
}


class CanvasDragend extends BaseBehavior {
  constructor(context, options) {
    super(context, options);
    const { graph } = this.context;
    graph.on(CanvasEvent.DRAG_END, (event) => {
      const { layerX, layerY } = event.nativeEvent;
      console.log(event)
      console.log(event.nativeEvent)
      // graph.addNodeData([
      //   {
      //     id: 'node-' + Date.now(),
      //     style: { x: layerX, y: layerY },
      //   },
      // ]);
      // graph.draw();
    });
  }
}