export class Log {
    id?: number;
    user?: string;
    fechaHora?: string;
    tipoAcceso?: 'denegado' | 'exitoso';

    constructor(id?: number, user?: string, fechaHora?: string, tipoAcceso?: 'denegado' | 'exitoso') {
        this.id = id;
        this.user = user;
        this.fechaHora = fechaHora;
        this.tipoAcceso = tipoAcceso;
    }
   
}

