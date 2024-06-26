"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsuarioController_1 = require("../controllers/UsuarioController");
const userRoutes = (0, express_1.Router)();
userRoutes.post('/user', UsuarioController_1.UsuarioController.post);
userRoutes.get('/user', UsuarioController_1.UsuarioController.get);
// // Login
// userRoutes.post('/login', (req: Request, res: Response ) => {
//     const body = req.body;
//     Usuario.findOne({ email: body.email }, ( err, userDB ) => {
//         if ( err ) throw err;
//         if ( !userDB ) {
//             return res.json({
//                 ok: false,
//                 mensaje: 'Usuario/contraseña no son correctos'
//             });
//         }
//         if ( userDB.compararPassword( body.password ) ) {
//             const tokenUser = Token.getJwtToken({
//                 _id: userDB._id,
//                 nombre: userDB.nombre,
//                 email: userDB.email,
//                 avatar: userDB.avatar
//             });
//             res.json({
//                 ok: true,
//                 token: tokenUser
//             });
//         } else {
//             return res.json({
//                 ok: false,
//                 mensaje: 'Usuario/contraseña no son correctos ***'
//             });
//         }
//     })
// });
// // Crear un usuario
// userRoutes.post('/create', ( req: Request, res: Response ) => {
//     const user = {
//         nombre   : req.body.nombre,
//         email    : req.body.email,
//         password : bcrypt.hashSync(req.body.password, 10),
//         avatar   : req.body.avatar
//     };
//     Usuario.create( user ).then( userDB => {
//         const tokenUser = Token.getJwtToken({
//             _id: userDB._id,
//             nombre: userDB.nombre,
//             email: userDB.email,
//             avatar: userDB.avatar
//         });
//         res.json({
//             ok: true,
//             token: tokenUser
//         });
//     }).catch( err => {
//         res.json({
//             ok: false,
//             err
//         });
//     });
// });
// // Actualizar usuario
// userRoutes.post('/update', verificaToken, (req: any, res: Response ) => {
//     const user = {
//         nombre: req.body.nombre || req.usuario.nombre,
//         email : req.body.email  || req.usuario.email,
//         avatar: req.body.avatar || req.usuario.avatar
//     }
//     Usuario.findByIdAndUpdate( req.usuario._id, user, { new: true }, (err, userDB) => {
//         if ( err ) throw err;
//         if ( !userDB ) {
//             return res.json({
//                 ok: false,
//                 mensaje: 'No existe un usuario con ese ID'
//             });
//         }
//         const tokenUser = Token.getJwtToken({
//             _id: userDB._id,
//             nombre: userDB.nombre,
//             email: userDB.email,
//             avatar: userDB.avatar
//         });
//         res.json({
//             ok: true,
//             token: tokenUser
//         });
//     });
// });
exports.default = userRoutes;
