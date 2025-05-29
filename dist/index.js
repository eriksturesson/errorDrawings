"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = errorDrawing;
var terminalColours_1 = require("./utils/terminalColours");
function drawImpaled(error) {
    var errorCode = error.code || error.status ? error.code || error.status : "xxx";
    var errorString = error.message || error.text ? error.message || error.text : error;
    console.log(error);
    var terminalColour = (0, terminalColours_1.terminalColours)();
    console.log("---------------------------------------");
    console.log("------------".concat(terminalColour.BgRed, "ERROR CODE ").concat(errorCode).concat(terminalColour.Reset, "-------------"));
    console.log("".concat(terminalColour.BgRed, "ERROR STRING: ").concat(errorString).concat(terminalColour.Reset));
    console.log("---------------------------------------");
    console.log("------------------------".concat(terminalColour.BgGreen, "-").concat(terminalColour.Reset, "--------------"));
    console.log("-----------------------".concat(terminalColour.BgGreen, "X-X").concat(terminalColour.Reset, "-------------"));
    console.log("----------------------".concat(terminalColour.BgGreen, "--L--").concat(terminalColour.Reset, "------------"));
    console.log("-----------------------".concat(terminalColour.BgGreen, "---").concat(terminalColour.Reset, "-------------"));
    console.log("--------------------".concat(terminalColour.BgGreen, "-").concat(terminalColour.Reset, "---").concat(terminalColour.BgGreen, "-").concat(terminalColour.Reset, "---").concat(terminalColour.BgGreen, "-").concat(terminalColour.Reset, "----------"));
    console.log("---------------------".concat(terminalColour.BgGreen, "-").concat(terminalColour.Reset, "--").concat(terminalColour.BgGreen, "-").concat(terminalColour.Reset, "--").concat(terminalColour.BgGreen, "-").concat(terminalColour.Reset, "-----------"));
    console.log("-----------------------".concat(terminalColour.BgGreen, "---").concat(terminalColour.Reset, "-------------"));
    console.log("------------------------".concat(terminalColour.BgGreen, "-").concat(terminalColour.Reset, "--------------"));
    console.log("------------------------".concat(terminalColour.BgGreen, "-").concat(terminalColour.Reset, "--------------"));
    console.log("-----------------------".concat(terminalColour.BgGreen, "---").concat(terminalColour.Reset, "-------------"));
    console.log("---------------------".concat(terminalColour.BgGreen, "-").concat(terminalColour.Reset, "--").concat(terminalColour.BgRed, "-").concat(terminalColour.Reset, "--").concat(terminalColour.BgGreen, "-").concat(terminalColour.Reset, "-----------"));
    console.log("-------------------".concat(terminalColour.BgGreen, "-").concat(terminalColour.Reset, "---").concat(terminalColour.BgRed, "---").concat(terminalColour.Reset, "---").concat(terminalColour.BgGreen, "-").concat(terminalColour.Reset, "---------"));
    console.log("-----------------------".concat(terminalColour.BgRed, "---").concat(terminalColour.Reset, "-------------"));
    console.log("-----------------".concat(terminalColour.BgGreen, "-").concat(terminalColour.Reset, "-----").concat(terminalColour.BgRed, "---").concat(terminalColour.Reset, "-------------"));
    console.log("----------------".concat(terminalColour.BgGreen, "O-O").concat(terminalColour.Reset, "----").concat(terminalColour.BgRed, "---").concat(terminalColour.Reset, "-------------"));
    console.log("---------------".concat(terminalColour.BgGreen, "--L--").concat(terminalColour.Reset, "---").concat(terminalColour.BgRed, "---").concat(terminalColour.Reset, "-------------"));
    console.log("----------------".concat(terminalColour.BgGreen, "---").concat(terminalColour.Reset, "---").concat(terminalColour.BgGreen, "-").concat(terminalColour.Reset).concat(terminalColour.BgRed, "---").concat(terminalColour.Reset, "-------------"));
    console.log("-----------------".concat(terminalColour.BgGreen, "-").concat(terminalColour.Reset, "--").concat(terminalColour.BgGreen, "-").concat(terminalColour.Reset, "--").concat(terminalColour.BgRed, "---").concat(terminalColour.Reset, "-------------"));
    console.log("----------------".concat(terminalColour.BgGreen, "---").concat(terminalColour.Reset, "----").concat(terminalColour.BgRed, "---").concat(terminalColour.Reset, "-------------"));
    console.log("-----------------".concat(terminalColour.BgGreen, "-").concat(terminalColour.Reset, "-").concat(terminalColour.BgGreen, "-").concat(terminalColour.Reset, "---").concat(terminalColour.BgRed, "---").concat(terminalColour.Reset, "-------------"));
    console.log("-----------------".concat(terminalColour.BgGreen, "-").concat(terminalColour.Reset, "---").concat(terminalColour.BgGreen, "-").concat(terminalColour.Reset, "-").concat(terminalColour.BgRed, "---").concat(terminalColour.Reset, "-------------"));
    console.log("----------------".concat(terminalColour.BgGreen, "---").concat(terminalColour.Reset, "----").concat(terminalColour.BgRed, "---").concat(terminalColour.Reset, "-------------"));
    console.log("---------------".concat(terminalColour.BgGreen, "-").concat(terminalColour.Reset, "---").concat(terminalColour.BgGreen, "-").concat(terminalColour.Reset, "---").concat(terminalColour.BgRed, "---").concat(terminalColour.Reset, "-------------"));
    console.log("--------------".concat(terminalColour.BgGreen, "-").concat(terminalColour.Reset, "-----").concat(terminalColour.BgGreen, "-").concat(terminalColour.Reset, "--").concat(terminalColour.BgRed, "---").concat(terminalColour.Reset, "-------------"));
    console.log("-----------------------".concat(terminalColour.BgRed, "---").concat(terminalColour.Reset, "-------------"));
    console.log("---------------------------------------");
    return "error done";
}
function errorDrawing(error) {
    drawImpaled(error);
}
