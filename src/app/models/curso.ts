export class Curso {
    id?: number ;
    codigo: string;
    codigo_profesor: number;
    nombres: string;
    curso: string;
    numero_ciclo: number;
    creditos: number;

    constructor(codigo: string,codigo_profesor: number,nombres: string,curso: string,numero_ciclo: number, creditos: number) {
        this.codigo = codigo;
        this.codigo_profesor = codigo_profesor;
        this.nombres = nombres;
        this.curso = curso;
        this.numero_ciclo = numero_ciclo;
        this.creditos = creditos;
    }
}
