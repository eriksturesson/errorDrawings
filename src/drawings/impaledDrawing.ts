import { CustomError } from "../interfaces/ErrorTypes";
import { terminalColours } from "../utils/terminalColours";
export function drawImpaled(error: CustomError | Error): void {
  //This error drawing was done before AI went popular, I have written this one with my own hands manualy, with love.
  const errorCode =
    "code" in error || "status" in error ? (error as CustomError).code || (error as CustomError).status : "xxx";
  const errorString = error.message || String(error);

  let terminalColour = terminalColours();
  console.log(`---------------------------------------`);
  console.log(`------------${terminalColour.BgRed}ERROR CODE ${errorCode}${terminalColour.Reset}-------------`);
  console.log(`${terminalColour.BgRed}ERROR STRING: ${errorString}${terminalColour.Reset}`);
  console.log(`---------------------------------------`);
  console.log(`------------------------${terminalColour.BgGreen}-${terminalColour.Reset}--------------`);
  console.log(`-----------------------${terminalColour.BgGreen}X-X${terminalColour.Reset}-------------`);
  console.log(`----------------------${terminalColour.BgGreen}--L--${terminalColour.Reset}------------`);
  console.log(`-----------------------${terminalColour.BgGreen}---${terminalColour.Reset}-------------`);
  console.log(
    `--------------------${terminalColour.BgGreen}-${terminalColour.Reset}---${terminalColour.BgGreen}-${terminalColour.Reset}---${terminalColour.BgGreen}-${terminalColour.Reset}----------`
  );
  console.log(
    `---------------------${terminalColour.BgGreen}-${terminalColour.Reset}--${terminalColour.BgGreen}-${terminalColour.Reset}--${terminalColour.BgGreen}-${terminalColour.Reset}-----------`
  );
  console.log(`-----------------------${terminalColour.BgGreen}---${terminalColour.Reset}-------------`);
  console.log(`------------------------${terminalColour.BgGreen}-${terminalColour.Reset}--------------`);
  console.log(`------------------------${terminalColour.BgGreen}-${terminalColour.Reset}--------------`);
  console.log(`-----------------------${terminalColour.BgGreen}---${terminalColour.Reset}-------------`);
  console.log(
    `---------------------${terminalColour.BgGreen}-${terminalColour.Reset}--${terminalColour.BgRed}-${terminalColour.Reset}--${terminalColour.BgGreen}-${terminalColour.Reset}-----------`
  );
  console.log(
    `-------------------${terminalColour.BgGreen}-${terminalColour.Reset}---${terminalColour.BgRed}---${terminalColour.Reset}---${terminalColour.BgGreen}-${terminalColour.Reset}---------`
  );
  console.log(`-----------------------${terminalColour.BgRed}---${terminalColour.Reset}-------------`);
  console.log(
    `-----------------${terminalColour.BgGreen}-${terminalColour.Reset}-----${terminalColour.BgRed}---${terminalColour.Reset}-------------`
  );
  console.log(
    `----------------${terminalColour.BgGreen}O-O${terminalColour.Reset}----${terminalColour.BgRed}---${terminalColour.Reset}-------------`
  );
  console.log(
    `---------------${terminalColour.BgGreen}--L--${terminalColour.Reset}---${terminalColour.BgRed}---${terminalColour.Reset}-------------`
  );
  console.log(
    `----------------${terminalColour.BgGreen}---${terminalColour.Reset}---${terminalColour.BgGreen}-${terminalColour.Reset}${terminalColour.BgRed}---${terminalColour.Reset}-------------`
  );
  console.log(
    `-----------------${terminalColour.BgGreen}-${terminalColour.Reset}--${terminalColour.BgGreen}-${terminalColour.Reset}--${terminalColour.BgRed}---${terminalColour.Reset}-------------`
  );
  console.log(
    `----------------${terminalColour.BgGreen}---${terminalColour.Reset}----${terminalColour.BgRed}---${terminalColour.Reset}-------------`
  );
  console.log(
    `-----------------${terminalColour.BgGreen}-${terminalColour.Reset}-${terminalColour.BgGreen}-${terminalColour.Reset}---${terminalColour.BgRed}---${terminalColour.Reset}-------------`
  );
  console.log(
    `-----------------${terminalColour.BgGreen}-${terminalColour.Reset}---${terminalColour.BgGreen}-${terminalColour.Reset}-${terminalColour.BgRed}---${terminalColour.Reset}-------------`
  );
  console.log(
    `----------------${terminalColour.BgGreen}---${terminalColour.Reset}----${terminalColour.BgRed}---${terminalColour.Reset}-------------`
  );
  console.log(
    `---------------${terminalColour.BgGreen}-${terminalColour.Reset}---${terminalColour.BgGreen}-${terminalColour.Reset}---${terminalColour.BgRed}---${terminalColour.Reset}-------------`
  );
  console.log(
    `--------------${terminalColour.BgGreen}-${terminalColour.Reset}-----${terminalColour.BgGreen}-${terminalColour.Reset}--${terminalColour.BgRed}---${terminalColour.Reset}-------------`
  );
  console.log(`-----------------------${terminalColour.BgRed}---${terminalColour.Reset}-------------`);
  console.log(`---------------------------------------`);
}
