"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const usuario_model_1 = require("../models/usuario.model");
const db = new usuario_model_1.Database();
exports.UsuarioController = {
    post(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombre, email, password, avatar } = req.body;
            const usuario = db.crearUsuario(nombre, email, password, avatar);
            res.json(usuario);
        });
    },
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarios = db.getAll();
            res.status(200).json({ data: usuarios });
        });
    }
    // async obtenerUsuarioPorEmail(req: Request, res: Response): Promise<void> {
    //     const { email } = req.params;
    //     const usuario = db.encontrarUsuarioPorEmail(email);
    //     if (usuario) {
    //         res.json(usuario);
    //     } else {
    //         res.status(404).json({ mensaje: 'Usuario no encontrado' });
    //     }
    // }
};
