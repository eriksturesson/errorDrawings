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
import drawLog, { type CustomError } from "error-drawings";

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
import drawLog, { type CustomError } from "error-drawings";

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

## 🎨 Works well with [backend-error](https://www.npmjs.com/package/backend-error)

![npm](https://img.shields.io/npm/v/backend-error)
![downloads](https://img.shields.io/npm/dm/backend-error)
![license](https://img.shields.io/npm/l/backend-error)

```bash
npm install backend-error
```

`backend-error` is a lightweight Node.js / TypeScript utility that formats all errors—custom or native—into standardized HTTP responses with correct status codes and user-friendly messages. The `httpErrorFormatter` ensures secure, consistent error output by controlling what is exposed to the frontend.

```ts
import { BackendError } from "backend-error";
import drawLog from "error-drawings";

try {
  throw BackendError.Forbidden("No access to resource");
} catch (err) {
  const isCritical = !(err instanceof BackendError && err.isOperational) || err.code >= 500;
  if (isCritical) {
    // 🔥 Draw dramatic error output to highlight critical issues during development
    // 🧠 Important: log BEFORE formatting, since the formatter may hide details if showUser is false
    drawLog(err);
  }
  const { status, body } = httpErrorFormatter(err); //Use the formatter as always
  res.status(status).json(body);
}
```
