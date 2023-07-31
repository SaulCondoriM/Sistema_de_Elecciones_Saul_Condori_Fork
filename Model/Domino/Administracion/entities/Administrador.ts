namespace Dominio.Administracion.entities {
  class Administrador extends Usuario {
    private fechaInicioActividad: Date;
    private fechaFinActividad: Date;
    private ultimoInicioSesion: Date;

    /**
     * Default constructor
     * @param rol ID del usuario
     * @param nombre Nombre del usuario
     * @param email Email del usuario
     * @param dni DNI del usuario
     * @param fechaInicioActividad Fecha inicio de actividad del administrador
     * @param fechaFinActividad Fecha fin de actividad del administrador
     * @param ultimoInicioSesion Ultimo inicio de sesión del administrador
     */
    constructor(
      rol: string,
      nombre: string,
      email: string,
      dni: string,
      fechaInicioActividad: Date,
      fechaFinActividad: Date,
      ultimoInicioSesion: Date
    ) {
      super();
      this.fechaInicioActividad = fechaInicioActividad;
      this.fechaFinActividad = fechaFinActividad;
      this.ultimoInicioSesion = ultimoInicioSesion;
    }

    // Setter methods
    setFechaInicioActividad(fecha: Date) {
      this.fechaInicioActividad = fecha;
    }
    
    setFechaFinActividad(fecha: Date) {
      this.fechaFinActividad = fecha;
    }
    
    setUltimoInicioSesion(fecha: Date) {
      this.ultimoInicioSesion = fecha;
    }

    // Getter methods
    getFechaInicioActividad(): Date {
      return this.fechaInicioActividad;
    }

    getFechaFinActividad(): Date {
      return this.fechaFinActividad;
    }

    getUltimoInicioSesion(): Date {
      return this.ultimoInicioSesion;
    }
  }
}
