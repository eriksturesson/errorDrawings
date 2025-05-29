# Changelog

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
