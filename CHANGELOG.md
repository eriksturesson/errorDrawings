# Changelog

## [3.0.0] - 2025-05-29

### Breaking Changes

- Renamed default export from `errorDrawing` to `drawLog`.  
  Update imports from

  ```ts
  import errorDrawing from "error-drawings";
  ```

  to

  ```ts
  import drawLog from "error-drawings";
  ```

- Added exported `CustomError` interface for better typing.  
  Import with

  ```ts
  import type { CustomError } from "error-drawings";
  ```

- Introduced named exports for explicit drawing functions: `drawError`, `drawWarning`, and `drawInfo`.  
  Example:

  ```ts
  import { drawError, drawWarning, drawInfo } from "error-drawings";
  ```

- `drawLog` now uses the `severity` property in `CustomError` to determine which drawing function to call:
  - `"info"` calls `drawHappy`
  - `"warning"` calls `drawWarning`
  - `"critical"` calls `drawError`
  - default is `drawError`

### Migration

- Change all imports of `errorDrawing` to `drawLog`.
- Use named exports if you want to manually select the drawing function.
- Throw errors conforming to `CustomError` to use severity-based rendering, e.g.:
  ```ts
  throw {
    message: "Warning example",
    severity: "warning",
  };
  ```
- Normal `Error` objects without severity fallback to the default `drawError` rendering.

## [2.0.3] - 2025-05-29

### Changed

- Added interfaces/ folder with CustomError interface to replace any type.
- Updated errorDrawing function to accept both native Error and CustomError types instead of any.
- Improved type safety and error property handling in drawing functions.

## [2.0.2] - 2025-05-29

### Changed

- Moved drawing functions into a new `drawings/` folder for better structure and clarity.
- Updated main error drawing function to import from `drawings/`.
- Cleaned up exports and typings.
- Added `.gitignore` entry for `dist/` folder to avoid committing compiled output.
- Added `/dist` to `.gitignore` and removed `dist` folder from version control.

## [2.0.1] - 2025-05-29

### Changed

- Updating engines
- updating exports filepath

## [2.0.0] - 2025-05-29

### Changed

- Rewrote build system to use `dist/` folder
- Fixed main entry point, now works via `import errorDrawing from 'error-drawings'`
- Moved test files to `src/test`
- Removed legacy structure from initial prototype
- No duplication of ts-files to js-files in `src` folder

### Breaking

- Previous `import from './node_modules/error-drawings/src/errorDrawing'` no longer works
- Consumers must now import from package root
