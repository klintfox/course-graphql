# GraphQL with Nodejs

### Links:

- https://graphql.org/
- https://www.apollographql.com/
- https://babeljs.io/docs/en/usage
- https://www.npmjs.com/package/@babel/node
- https://www.npmjs.com/package/nodemon
- https://graphql.org/graphql-js/running-an-express-graphql-server/
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
- Instalar módulo Babel con Node
    ```
    npm install --save-dev @babel/node
    ```
- Agregamos los comandos de build y start en el archivo package.json
    ```
    "scripts": {
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
- Instalar módulo Nodemon el cual  es una herramienta que sirve para reiniciar el servidor cada vez que se realiza un cambio
    ```
    npm install --save-dev nodemon
    ```
- Agregamos el comando serve  en el archivo package.json para incluir configuracion nodemon
    ```
    "scripts": {
        "build": "babel src -d dist --source-maps",
        "start": "nodemon src/index.js --exec babel-node",
        "serve": "node dist/index.js"
    }
    ```
- Instalar módulo RimRaf el cual sirve para eliminar carpetas
    ```
    npm i rimraf
    ```
- Agregar un comando "clean" en package.json
    ```
    "scripts": {
        "build": "babel src -d dist --source-maps",
        "start": "nodemon src/index.js --exec babel-node",
        "serve": "node dist/index.js",
        "clean": "rimraf dist"
    }
    ```
- Si se quiere eliminar la carpeta dist ejecutar el siguiente comando
    ```
    npm run clean
    ```
- Instalar graphql
    ```
    npm i graphql  express-graphql graphql-tools
    ```
- Ejemplo de Express GraphQL Server, para iniciar ejecitar el comando "npm start"
    ```
    var express = require('express');
    var { graphqlHTTP } = require('express-graphql');
    var { buildSchema } = require('graphql');

    // Construct a schema, using GraphQL schema language
    var schema = buildSchema(`
    type Query {
        hello: String
    }
    `);

    // The root provides a resolver function for each API endpoint
    var root = {
    hello: () => {
        return 'Hello world!';
    },
    };

    var app = express();
    app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
    }));
    app.listen(4000);
    console.log('Running a GraphQL API server at http://localhost:4000/graphql');
    ```