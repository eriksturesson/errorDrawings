import { drawImpaled } from "./drawings/impaledDrawing";
import { CustomError } from "./interfaces/ErrorTypes";

export default function errorDrawing(error: CustomError | Error): void {
  drawImpaled(error);
}
