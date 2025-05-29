import { CustomError } from "../interfaces/ErrorTypes";
import { terminalColours } from "../utils/terminalColours";

export function drawHappy(error: CustomError | Error): void {
  const infoCode =
    "code" in error || "status" in error ? (error as CustomError).code || (error as CustomError).status : "info";
  const infoString = error.message || String(error);
  const terminalColour = terminalColours();

  console.log(`---------------------------------------`);
  console.log(`------------${terminalColour.BgBlue}INFO CODE ${infoCode}${terminalColour.Reset}-------------`);
  console.log(`${terminalColour.BgBlue}INFO STRING: ${infoString}${terminalColour.Reset}`);
  console.log(`---------------------------------------`);
  console.log(`-------------------${terminalColour.BgBlue}(^_^)${terminalColour.Reset}--------------------`);
  console.log(`------------------${terminalColour.BgBlue}--|||--${terminalColour.Reset}-------------------`);
  console.log(`-------------------${terminalColour.BgBlue}---${terminalColour.Reset}--------------------`);
  console.log(`------------------${terminalColour.BgBlue}-------${terminalColour.Reset}-------------------`);
  console.log(`-------------------${terminalColour.BgBlue}---${terminalColour.Reset}--------------------`);
  console.log(`---------------------------------------`);
}
