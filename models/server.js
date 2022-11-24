import cors from 'cors'
import express from "express";
import path from 'path';
import {fileURLToPath} from 'url';
import { router } from '../routes/user.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.userPath = '/api/users';

    //Middleware
    this.middlewares();

    

    //My app routes
    this.routes();
  }

  middlewares(){

    //CORS
    this.app.use(cors())
    //AUTENTICACION CROSS ORIGIN, ver documentacion de como restringir rutas de acceso y demas funcionalidades


    //READ AND PARSE THE BODY
    this.app.use( express.json() )


    //Public directory
    this.app.use( express.static('public'))
    //por defecto va a buscar el index.html de la carpeta especificada PUBLIC


  }

  routes() {

    this.app.use(this.userPath, router)
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port: ${this.port}`);
    });
  }
}

export { Server };
