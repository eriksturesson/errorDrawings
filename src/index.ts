import { drawImpaled } from "./drawings/impaledDrawing";

export default function errorDrawing(error: any): void {
  drawImpaled(error);
}
