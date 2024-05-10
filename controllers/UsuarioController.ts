import { Request, Response } from 'express';
import { Database } from "../models/usuario.model";

const db = new Database();


export const UsuarioController = {

    async post(req: Request, res: Response): Promise<void> {
        const { nombre, email, password, avatar } = req.body;
        const usuario = db.crearUsuario(nombre, email, password, avatar);
        res.json(usuario);
    },

    async get( req:Request, res: Response ): Promise<void> {

        const usuarios = db.getAll();

        res.status(200).json({data: usuarios})
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