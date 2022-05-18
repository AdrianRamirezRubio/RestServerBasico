const express = require('express');
var cors = require('cors');
class Server {

    constructor(){
        this.app = express();
        this.port =process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //middlewares
        this.middlewares();
        ///Rutas de app
        this.routes();

    }

    middlewares(){

        //Cors
        this.app.use(cors());
        //Lectura y parseo del body
        this.app.use(express.json() );

        //Directorio publico
        this.app.use(express.static('public'));
    }

    routes(){
          this.app.use(this.usuariosPath,require('../routes/usuarios'));
    }

    listen(){
        this.app.listen(process.env.PORT,()=>{
            console.log(`Servidor corriendo en ${process.env.PORT}`);
        });
    }

}

module.exports = Server;