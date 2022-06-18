<center>

# Fun and clear error-messages

<img alt="GitHub package.json version (branch)" src="https://img.shields.io/github/package-json/v/eriksturesson/errorDrawings/master">

<img alt="npm" src="https://img.shields.io/npm/dy/@eriksturesson/myfirstnpmpackage?label=npm%20downloads">
</center>

```
npm install errorDrawings
```

Get <i><u>a picture</u></i> of what the script does:

```
npm run test
```

## ECMAScript Modules

Use the error object "e" as parameter in "errorDrawing(e)"

```
import errorDrawing from "./node_modules/error-drawings/src/errorDrawing";


async function myExample(){
try{
    myfunctionThatWillReturnError()
} catch(e){
    errorDrawing(e)
    }
}

```

### Expected output:

![Visual example](./src/images/example-image.png)

### We are looking for contributors

#### Upcoming features:

- Saving the full error object in a convinient file in an error-folder
- Outputed tips and tricks of how to solve the error
- More fun images
