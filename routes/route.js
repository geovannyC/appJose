require('dotenv').config()
const express = require('express');
const router = express.Router();
const usuario = require('../db/request')
var path = require('path');

router.get("/home",(req, res)=>{
    res.json('casa')
    
})

router.get("/login/:email/:contra", (req, res)=>{
    const email = req.params.email;
    const contra = req.params.contra;
    usuario.formatoUsuario.findAll({
        where: {
            email: email,
            contraseña: contra
        }
    }).then(libro => {
        JSON.stringify(libro)===JSON.stringify([])?res.json('no hay usuario'):res.json(libro)
        
      });
})
router.get('/register/:usr1/:usr2/:usr3/:usr4',(req,res)=>{
    let nombreUsr = req.params.usr1
    let apellidoUsr = req.params.usr2
    let emaiUsr = req.params.usr3
    let contraseñaUsr = req.params.usr4
    let datos = {
        nombre: nombreUsr,
        apellido: apellidoUsr,
        email: emaiUsr,
        contraseña: contraseñaUsr
    }
    usuario.formatoUsuario.create(datos).then(jane => {
        res.status(200)
        res.json(jane)
      });
})
// router.post('/destruir/:destruirID',(req,res)=>{
//     const my = req.params.destruirID;
//     usuario.formatoUsuario.destroy({
//         where: {
//           id: my
//         }
//       }).then(destr => {
//         res.json('EXTERMINADO')
//       });
      
// })
module.exports = router;