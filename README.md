## Starting with Backend
- Initializing empty node.js project, using "npm init" command.
- React Works on a concept of hot reloading, so whenever a change is made you don't have to restart the server, it's been restarted by itself, but in express, you have to kill the terminal and restart it again, whenever changes are made.
- To solve this issue, Nodemon is installed.
- import express from "express" => this is a module type import, which we have to defined in the package.json file.

## CORS Policy (Cross Origin Resource Sharing)
- Can be fixed by white listing the url. (IP white list)
- By installing cors npm package, and passing the details to the code structure. (app.use(cors()))
- Adding proxy makes the server think that the request is coming from the same origin, as in the app.jsx file inside the frontend folder, the axios get request is done on  /api/jokes, and proxy will add localhost:3000 before api, so it will think that the request is ot coming from localhost:5173, but localhost:3000.

## Proxy
- Writing the complete url everytime is a tedious job to do, and in production you have to change it again and again, therefore proxys are made, so that api response stay standardise.
- You can write proxy in the package.json file if the application is made using CRA, we're using vite bundler, so here the proxys are written inside the vite.config.js file in object format.
- In production we just have to change the value of the "/api" key.

## Moon Modeler
- Moon modeler is a data modelling tool for MongoDB and noSQL, it is used to define the structure of the data.

## Codesanbox, Github Codespaces, stackblitz, repelit
- All these platforms provides the services to right code in cloud storage environment, you need nothing to be installed on your local device.