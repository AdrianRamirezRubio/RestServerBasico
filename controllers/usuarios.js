const {response} =require('express');

const usuariosGet =(req, res=response)=> {

    const query = req.query;

    res.status(403).json({
        msg:'get API - controlador',
        query
    });

};


const usuariosPost = (req,  res=response)=> {

    const body = req.body;

    res.status(201).json({
        msg:'post API - controlador',
        body
    })
  };

  const usuariosPut = (req,  res=response)=> {

    const id= req.params.id;

    res.status(201).json({
        msg:'Put API - controlador ',
        id
    })
  };


  const usuariosPatch = (req,  res=response)=> {
    res.status(201).json({
        msg:'Patch API - controlador '
    })
  };


  const usuariosDelete = (req,  res=response)=> {
    res.status(201).json({
        msg:'Delete API  - controlador '
    })
  };

module.exports ={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}