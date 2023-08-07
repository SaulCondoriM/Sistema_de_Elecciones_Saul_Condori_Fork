import { Candidato } from '../../Candidatura/entities/Candidato.ts';
import { Resultado } from '../../Resultados/entities/Resultado.ts';

// Interfaces para segregación y inversión de dependencias
interface ICandidatoDB {
  guardarCandidato(candidato: Candidato): Promise<void>;
}

interface IFechaDB {
  guardarFecha(fecha: Date): Promise<void>;
}

interface IResultadoDB {
  obtenerResultados(): Promise<Array<Resultado>>;
}

// Implementación de una clase que maneja errores
class ErrorHandler {
  handleCandidatoError(candidato: Candidato, error: any) {
    console.error(`Hubo un error al ingresar al candidato: ${candidato.nombre}`, error);
  }

  handleFechaError(fecha: Date, error: any) {
    console.error(`Hubo un error al asignar la fecha: ${fecha}`, error);
  }

  handleResultadosError(error: any) {
    console.error('Hubo un error al mostrar/recopilar los resultados', error);
  }
}

namespace Dominio.Administracion.service {
  class OpcionesAdmin {
    private candidatoDB: ICandidatoDB;
    private fechaDB: IFechaDB;
    private resultadoDB: IResultadoDB;
    private errorHandler: ErrorHandler;

    constructor(candidatoDB: ICandidatoDB, fechaDB: IFechaDB, resultadoDB: IResultadoDB, errorHandler: ErrorHandler) {
      this.candidatoDB = candidatoDB;
      this.fechaDB = fechaDB;
      this.resultadoDB = resultadoDB;
      this.errorHandler = errorHandler;
    }

    public async ingresar_candidatos(candidatos: Array<Candidato>): Promise<void> {
      for (const candidato of candidatos) {
        try {
          console.log(`Ingresando al candidato: ${candidato.nombre}`);
          await this.candidatoDB.guardarCandidato(candidato);
        } catch (error) {
          this.errorHandler.handleCandidatoError(candidato, error);
        }
      }
    }

    public async asignar_fecha(fecha: Date): Promise<void> {
      try {
        console.log(`Asignando fecha de elecciones: ${fecha}`);
        await this.fechaDB.guardarFecha(fecha);
      } catch (error) {
        this.errorHandler.handleFechaError(fecha, error);
      }
    }

    public async mostrar_resultados(): Promise<void> {
      try {
        const resultados = await this.resultadoDB.obtenerResultados();
        console.log('Resultados de las elecciones:', resultados);
      } catch (error) {
        this.errorHandler.handleResultadosError(error);
      }
    }

    public async recopilar_resultados(): Promise<Array<Resultado>> {
      try {
        console.log('Recopilando los resultados de las elecciones');
        const resultados = await this.resultadoDB.obtenerResultados();
        return resultados;
      } catch (error) {
        this.errorHandler.handleResultadosError(error);
        return [];
      }
    }
  }
}
