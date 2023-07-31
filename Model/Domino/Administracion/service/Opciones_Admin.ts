import { Candidato } from '../../Candidatura/entities/Candidato.ts';
import { Resultado } from '../../Resultados/entities/Resultado.ts'

namespace Dominio.Administracion.service {
  class OpcionesAdmin {
    private baseDeDatos: BaseDeDatos;

    /**
     * Default constructor
     */
    constructor(baseDeDatos: BaseDeDatos) {
      this.baseDeDatos = baseDeDatos;
    }

    /**
     * Implement this method to handle candidate entry.
     */
    public async ingresar_candidatos(candidatos: Array<Candidato>): Promise<void> {
      // Guarda los candidatos en la base de datos
      for (const candidato of candidatos) {
        try {
          console.log(`Ingresando al candidato: ${candidato.nombre}`);
          await this.baseDeDatos.guardarCandidato(candidato);
        } catch (error) {
          console.error(`Hubo un error al ingresar al candidato: ${candidato.nombre}`, error);
        }
      }
    }

    /**
     * Implement this method to assign a date.
     */
    public async asignar_fecha(fecha: Date): Promise<void> {
      // Asigna la fecha de las elecciones
      try {
        console.log(`Asignando fecha de elecciones: ${fecha}`);
        await this.baseDeDatos.guardarFecha(fecha);
      } catch (error) {
        console.error(`Hubo un error al asignar la fecha: ${fecha}`, error);
      }
    }

    /**
     * Implement this method to display results.
     */
    public async mostrar_resultados(): Promise<void> {
      // Muestra los resultados de las elecciones
      try {
        const resultados = await this.baseDeDatos.obtenerResultados();
        console.log('Resultados de las elecciones:', resultados);
      } catch (error) {
        console.error('Hubo un error al mostrar los resultados', error);
      }
    }

    /**
     * Implement this method to collect results.
     */
    public async recopilar_resultados(): Promise<Array<Resultado>> {
      // Recoge los resultados de las elecciones
      try {
        console.log('Recopilando los resultados de las elecciones');
        const resultados = await this.baseDeDatos.obtenerResultados();
      
        return resultados; // devuelve los resultados
      } catch (error) {
        console.error('Hubo un error al recopilar los resultados', error);
        return []; // devuelve un array vacío en caso de error
      }
    }
  }
}
