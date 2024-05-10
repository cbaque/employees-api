"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = exports.Usuario = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
class Usuario {
    constructor(nombre, email, password) {
        this.nombre = nombre;
        this.email = email;
        this.password = password;
    }
    compararPassword(password) {
        return bcrypt_1.default.compareSync(password, this.password);
    }
}
exports.Usuario = Usuario;
class Database {
    constructor() {
        this.usuarios = [];
    }
    encontrarUsuarioPorEmail(email) {
        return this.usuarios.find(usuario => usuario.email === email);
    }
    getAll() {
        return this.usuarios;
    }
    crearUsuario(nombre, email, password, avatar) {
        const usuario = new Usuario(nombre, email, bcrypt_1.default.hashSync(password, 10));
        this.usuarios.push(usuario);
        return usuario;
    }
}
exports.Database = Database;
