# GraphQL with Nodejs

### Links:

- https://graphql.org/
- https://www.apollographql.com/
- https://babeljs.io/docs/en/usage
- https://www.npmjs.com/package/@babel/node
- https://www.npmjs.com/package/nodemon
## Steps:

### Software
- Nodejs
- Visual Studio Code
- 

### 1 Instalación 
- Iniciar proyecto nodejs
    ```
    npm init -y
    ```
- Instalar Expres
    ```
    npm i express
    ```
- Crear el archivo en la siguiente ruta src/index.js e implementar un servidor 
    ```
    const express = require('express')
    const app = express();
    app.listen(3000, () => console.log("Server on port 3000"));
    ```
- Iniciar el servidor
    ```
    node src/index.js
    ```
- Instalar los modulos de Babel para poder utilizar javascript en sus últimas versiones 
    ```
    npm install --save-dev @babel/core @babel/cli @babel/preset-env
    ```
- Crear el archivo de configuración ".babelrc" en la raiz del proyecto y agregar 
    ```
    {
        "presets": [
            "@babel/preset-env"
        ]
    }
    ```
- Instalar Babel con Node
    ```
    npm install --save-dev @babel/node
    ```
- Modificar scripts del archivo package.json para definir los comandos de build y start
    ```
    scripts": {
        "build": "babel src -d dist --source-maps",
        "start": "babel-node src/index.js"
    }
    ```
- Actualizar archivo src/index.js
    ```
    import express from "express";
    const app = express();
    app.listen(3000, () => console.log("Server on port 3000"));
    ```
- Iniciar servidor nuevamente
    ```
    npm start
    ```
- Crear el build del proyecto
    ```
    npm run build
    ```
- Ejeuctar el build del proyecto
    ```
    node dist/index.js
    ```
- Instalar Nodemon el cual sirve para reiniciar el servidor cada vez que se realiza un cambio
    ```
    npm install --save-dev nodemon
    ```





<!-- - Instalar graphql para javascript
    ```
    npm install graphql
    npm install express express-graphql graphql
    ``` -->