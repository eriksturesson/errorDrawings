import { terminalColours } from "../utils/terminalColours";
export function drawImpaled(error: any) {
  let errorCode = error.code || error.status ? error.code || error.status : "xxx";
  let errorString = error.message || error.text ? error.message || error.text : error;
  console.log(error);
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
