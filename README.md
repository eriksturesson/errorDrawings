<center>

# Fun and clear error-messages

<img alt="GitHub package.json version (branch)" src="https://img.shields.io/github/package-json/v/eriksturesson/errorDrawings/master">

<img alt="npm" src="https://img.shields.io/npm/dy/error-drawings?label=npm%20downloads">
</center>

```
npm install error-drawings
```

Get <i><u>a picture</u></i> of what the script does:

```
npm run test
```

## ECMAScript Modules

Use the error object `e` as parameter in `drawLog(e)`

```ts
import drawLog from "error-drawings";

async function example() {
  try {
    // code that may throw an error
  } catch (err) {
    drawLog(err);
    throw err; // re-throw if you want to bubble up the error
  }
}
```

### Expected output:

![Visual example](./src/images/example-image.png)

### Severity handling inside `drawlog`

- "info" severity calls drawHappy, for informational messages.
- "warning" severity calls drawWarning, for warnings.
- "critical" severity calls drawError, for critical errors.
- If no severity or unknown severity is given, drawError is used as default.

### How to use severity with a CustomError type

```ts
throw {
  message: "Something might be wrong",
  severity: "warning",
};
```

You can also throw a normal Error without severity — it will fall back to the default drawing (critical error style).

### Using `CustomError` vs native `Error`

Since native JavaScript Error objects don’t have a severity property, there are two ways to use this library clearly:

#### 1. For native `Error` objects (no severity):

```ts
import { drawError, drawWarning, drawInfo } from "error-drawings";

drawError(new Error("This is a critical error"));
drawWarning(new Error("This is a warning"));
drawInfo(new Error("This is an informational message"));
```

This is recommended if you want to specify the drawing manually because you have no severity info.

#### 2. For `CustomError` objects (with severity)

Use the default export `drawLog`, which reads the severity property and routes to the correct drawing automatically:

```ts
import drawLog from "error-drawings";

const error: CustomError = {
  message: "This is a warning with severity",
  severity: "warning",
};

drawLog(error);
```

This is the easiest way if you control or extend your errors with a severity field.

### Types

The package exports the `CustomError` interface for strong typing:

```ts
import type { CustomError } from "error-drawings";

const error: CustomError = {
  code: 123,
  message: "Example error",
  severity: "info",
};
```

CustomError shape:

```ts
export interface CustomError {
  code?: string | number;
  status?: string | number;
  message?: string;
  severity?: "info" | "warning" | "error" | "critical";
}
```
