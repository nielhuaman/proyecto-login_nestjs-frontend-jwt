export class Matricula {
    id?: number;
    codalumno: string;
    fechahora_registro: string;
    periodo_academico: string;

    constructor(codalumno: string,fechahora_registro: string,periodo_academico: string) {
        this.codalumno = codalumno;
        this.fechahora_registro = fechahora_registro;
        this.periodo_academico = periodo_academico;
    }
}