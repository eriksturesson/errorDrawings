import errorDrawing from "..";

//Custom Error interface
errorDrawing({ code: 500, message: "Custom test arg error" });

// A normal error
errorDrawing(new Error("This is a 'new Error'-error"));
