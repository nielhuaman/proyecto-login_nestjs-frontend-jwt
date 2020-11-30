export class Curso {
    id?: number;
    nombre: string;
    curso: string;
    numero_ciclo: number;
    creditos: number;

    constructor(nombre: string,curso: string,numero_ciclo: number, creditos: number) {
        this.nombre = nombre;
        this.curso = curso;
        this.numero_ciclo = numero_ciclo;
        this.creditos = creditos;
    }
}
