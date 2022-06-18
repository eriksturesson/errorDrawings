"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var terminalColours_1 = require("../utils/terminalColours");
function drawImpaled(error) {
    var errorCode = error.code || error.status ? error.code || error.status : "xxx";
    var errorString = error.message || error.text ? error.message || error.text : error;
    console.log(error);
    var terminalColour = terminalColours_1.terminalColours();
    console.log("---------------------------------------");
    console.log("------------" + terminalColour.BgRed + "ERROR CODE " + errorCode + terminalColour.Reset + "-------------");
    console.log(terminalColour.BgRed + "ERROR STRING: " + errorString + terminalColour.Reset);
    console.log("---------------------------------------");
    console.log("------------------------" + terminalColour.BgGreen + "-" + terminalColour.Reset + "--------------");
    console.log("-----------------------" + terminalColour.BgGreen + "X-X" + terminalColour.Reset + "-------------");
    console.log("----------------------" + terminalColour.BgGreen + "--L--" + terminalColour.Reset + "------------");
    console.log("-----------------------" + terminalColour.BgGreen + "---" + terminalColour.Reset + "-------------");
    console.log("--------------------" + terminalColour.BgGreen + "-" + terminalColour.Reset + "---" + terminalColour.BgGreen + "-" + terminalColour.Reset + "---" + terminalColour.BgGreen + "-" + terminalColour.Reset + "----------");
    console.log("---------------------" + terminalColour.BgGreen + "-" + terminalColour.Reset + "--" + terminalColour.BgGreen + "-" + terminalColour.Reset + "--" + terminalColour.BgGreen + "-" + terminalColour.Reset + "-----------");
    console.log("-----------------------" + terminalColour.BgGreen + "---" + terminalColour.Reset + "-------------");
    console.log("------------------------" + terminalColour.BgGreen + "-" + terminalColour.Reset + "--------------");
    console.log("------------------------" + terminalColour.BgGreen + "-" + terminalColour.Reset + "--------------");
    console.log("-----------------------" + terminalColour.BgGreen + "---" + terminalColour.Reset + "-------------");
    console.log("---------------------" + terminalColour.BgGreen + "-" + terminalColour.Reset + "--" + terminalColour.BgRed + "-" + terminalColour.Reset + "--" + terminalColour.BgGreen + "-" + terminalColour.Reset + "-----------");
    console.log("-------------------" + terminalColour.BgGreen + "-" + terminalColour.Reset + "---" + terminalColour.BgRed + "---" + terminalColour.Reset + "---" + terminalColour.BgGreen + "-" + terminalColour.Reset + "---------");
    console.log("-----------------------" + terminalColour.BgRed + "---" + terminalColour.Reset + "-------------");
    console.log("-----------------" + terminalColour.BgGreen + "-" + terminalColour.Reset + "-----" + terminalColour.BgRed + "---" + terminalColour.Reset + "-------------");
    console.log("----------------" + terminalColour.BgGreen + "O-O" + terminalColour.Reset + "----" + terminalColour.BgRed + "---" + terminalColour.Reset + "-------------");
    console.log("---------------" + terminalColour.BgGreen + "--L--" + terminalColour.Reset + "---" + terminalColour.BgRed + "---" + terminalColour.Reset + "-------------");
    console.log("----------------" + terminalColour.BgGreen + "---" + terminalColour.Reset + "---" + terminalColour.BgGreen + "-" + terminalColour.Reset + terminalColour.BgRed + "---" + terminalColour.Reset + "-------------");
    console.log("-----------------" + terminalColour.BgGreen + "-" + terminalColour.Reset + "--" + terminalColour.BgGreen + "-" + terminalColour.Reset + "--" + terminalColour.BgRed + "---" + terminalColour.Reset + "-------------");
    console.log("----------------" + terminalColour.BgGreen + "---" + terminalColour.Reset + "----" + terminalColour.BgRed + "---" + terminalColour.Reset + "-------------");
    console.log("-----------------" + terminalColour.BgGreen + "-" + terminalColour.Reset + "-" + terminalColour.BgGreen + "-" + terminalColour.Reset + "---" + terminalColour.BgRed + "---" + terminalColour.Reset + "-------------");
    console.log("-----------------" + terminalColour.BgGreen + "-" + terminalColour.Reset + "---" + terminalColour.BgGreen + "-" + terminalColour.Reset + "-" + terminalColour.BgRed + "---" + terminalColour.Reset + "-------------");
    console.log("----------------" + terminalColour.BgGreen + "---" + terminalColour.Reset + "----" + terminalColour.BgRed + "---" + terminalColour.Reset + "-------------");
    console.log("---------------" + terminalColour.BgGreen + "-" + terminalColour.Reset + "---" + terminalColour.BgGreen + "-" + terminalColour.Reset + "---" + terminalColour.BgRed + "---" + terminalColour.Reset + "-------------");
    console.log("--------------" + terminalColour.BgGreen + "-" + terminalColour.Reset + "-----" + terminalColour.BgGreen + "-" + terminalColour.Reset + "--" + terminalColour.BgRed + "---" + terminalColour.Reset + "-------------");
    console.log("-----------------------" + terminalColour.BgRed + "---" + terminalColour.Reset + "-------------");
    console.log("---------------------------------------");
    return "error done";
}
function errorDrawing(error) {
    drawImpaled(error);
}
exports.default = errorDrawing;
