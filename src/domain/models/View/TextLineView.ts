import { TextLine, Span } from "../Line/TextLine";
import { SVGNS } from "./SVGNS";

export class TextLineView {
  constructor(
    private textLine: TextLine,
    private textElement: SVGTextElement
  ) {}

  render(content: string): SVGTSpanElement {
    const tspanElement = document.createElementNS(
      SVGNS,
      "tspan"
    ) as SVGTSpanElement;
    for (const span of this.textLine.spans) {
      const spanView = new SpanView(span);
      tspanElement.appendChild(spanView.render(content));
    }
    Object.assign(tspanElement, { annotatorElement: this });
    this.textElement.append(tspanElement);
    return tspanElement;
  }

  get startOffset(): number {
    return this.textLine.startOffset;
  }

  get endOffset(): number {
    return this.textLine.endOffset;
  }
}

class SpanView {
  constructor(private span: Span) {}

  render(content: string): SVGTSpanElement {
    const tspanElement = document.createElementNS(
      SVGNS,
      "tspan"
    ) as SVGTSpanElement;
    tspanElement.setAttribute("dx", this.span.dx.toString());
    tspanElement.textContent = content.substring(
      this.span.startOffset,
      this.span.endOffset
    );
    return tspanElement;
  }
}
