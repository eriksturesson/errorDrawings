# Fun and clear error-messages

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
import {errorDrawing} from "errorDrawing"


async function myExample(){
try{
    myNotSoAwesomeCode()
    return "yay"
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
