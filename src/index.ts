import { drawGentleError } from "./drawings/gentleDrawing";
import { drawHappy } from "./drawings/happyDrawing";
import { drawImpaled } from "./drawings/impaledDrawing";
import { CustomError } from "./interfaces/ErrorTypes";
export type { CustomError } from "./interfaces/ErrorTypes";
export function drawError(error: CustomError | Error): void {
  drawImpaled(error);
}

export function drawWarning(error: CustomError | Error): void {
  drawGentleError(error);
}

export function drawInfo(error: CustomError | Error): void {
  drawHappy(error);
}

export default function drawLog(error: CustomError | Error): void {
  const severity = (error as CustomError).severity || "error";

  switch (severity) {
    case "info":
      drawHappy(error);
      break;
    case "warning":
      drawWarning(error);
      break;
    case "critical":
      drawError(error);
      break;
    default:
      drawError(error);
  }
}
