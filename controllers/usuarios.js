
const { response } = require('express');

const usuariosGet = (req, res = response) => {

    const {apikey , nombre= 'not name', q , page=1, limit} = req.query;

    res.json({
        msg: 'get API - Controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    })

}

const usuariosPost = (req, res = response) => {

    const {nombre , apellido ,edad} = req.body;
    res.status(201).json({
        msg: 'post Api - Controlador',
        nombre,
        apellido,
        edad
    })

}

const usuariosPut = (req , res = response)=>{

    const id = req.params.id;
    res.status(200).json({
        msg: 'put API- Controlador',
        id
    })
}

const usuariosDelete = (req , res = response)=>{
    res.status(200).json({
        msg: 'delete API- Controlador'
    })
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}
