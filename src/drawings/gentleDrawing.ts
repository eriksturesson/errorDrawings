import { CustomError } from "../interfaces/ErrorTypes";
import { terminalColours } from "../utils/terminalColours";

export function drawGentleError(error: CustomError | Error): void {
  const errorCode =
    "code" in error || "status" in error ? (error as CustomError).code || (error as CustomError).status : "xxx";
  const errorString = error.message || String(error);
  const terminalColour = terminalColours();

  console.log(`---------------------------------------`);
  console.log(`------------${terminalColour.BgYellow}WARNING CODE ${errorCode}${terminalColour.Reset}-----------`);
  console.log(`${terminalColour.BgYellow}WARNING STRING: ${errorString}${terminalColour.Reset}`);
  console.log(`---------------------------------------`);
  console.log(`-------------------${terminalColour.BgYellow}(-_-)${terminalColour.Reset}--------------------`);
  console.log(`------------------${terminalColour.BgYellow}--|||--${terminalColour.Reset}-------------------`);
  console.log(`-------------------${terminalColour.BgYellow}---${terminalColour.Reset}--------------------`);
  console.log(`------------------${terminalColour.BgYellow}-------${terminalColour.Reset}-------------------`);
  console.log(`-------------------${terminalColour.BgYellow}---${terminalColour.Reset}--------------------`);
  console.log(`---------------------------------------`);
}
