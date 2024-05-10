import bcrypt from 'bcrypt';

export interface IUser {
    nombre: string;
    email: string;
    password: string;

    compararPassword(password: string): boolean;
}

export class Usuario implements IUser {
    nombre: string;
    email: string;
    password: string;

    constructor(nombre: string, email: string, password: string) {
        this.nombre = nombre;
        this.email = email;
        this.password = password;
    }

    compararPassword(password: string): boolean {
        return bcrypt.compareSync(password, this.password);
    }
}


export class Database {
    private usuarios: Usuario[];

    constructor() {
        this.usuarios = [];
    }

    public encontrarUsuarioPorEmail(email: string): Usuario | undefined {
        return this.usuarios.find(usuario => usuario.email === email);
    }

    public getAll() {
        return this.usuarios;
    }

    public crearUsuario(nombre: string, email: string, password: string, avatar?: string): Usuario {
        const usuario = new Usuario(nombre, email, bcrypt.hashSync(password, 10));
        this.usuarios.push(usuario);
        return usuario;
    }
}