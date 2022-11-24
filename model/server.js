const express = require('express');
const cors = require('cors')

class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Midelware
        this.midelware();
        
        //Rutas de aplicación
        this.routes();
       

    }

    routes() {

        this.app.use(this.usuariosPath, require('../routes/usuarios'));

    
    }

    midelware(){

        //CORS
        this.app.use(cors());
        //Lectura y parseo Body
        this.app.use(express.json());
        //Directorio publico
        this.app.use(express.static('public'));
    }

    listen(){
        this.app.listen(this.port , ()=>{
            console.log('Servidor ejecuntando en el puerto' ,this.port );
        });
    }

}

module.exports = Server;