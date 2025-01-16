import { Rect, subStyleProps } from '@antv/g6';
import { Text } from '@antv/g';

export default class CustomNode extends Rect {

  getTextStyle(attributes) {
    // 获取以 paragraph 开头的样式属性，例如 paragraphFontSize
    const paragraphStyle = subStyleProps(attributes, 'paragraph');
    return { ...paragraphStyle, text: attributes.paragraph };
  }
  drawTextShape(attributes, container) {
    // 自定义绘制逻辑，创建一个 G.Text
    console.log(this.context)
    return this.upsert('text', Text, this.getLabelStyle(attributes), container);
  }
  render(attrs, container) {
    super.render(attrs, container);
    // this.drawTextShape(attrs, container)
  }
}