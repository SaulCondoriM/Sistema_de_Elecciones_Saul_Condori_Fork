namespace Dominio.Administracion.vos {
  class Sistema {
    private estado_del_sistema: string;

    /**
     * Default constructor
     * @param estado_del_sistema Estado inicial del sistema
     */
    constructor(estado_del_sistema: string = "Activo") {
      this.estado_del_sistema = estado_del_sistema;
    }

    // Getter methods
    getEstadoDelSistema(): string {
      return this.estado_del_sistema;
    }

    // Setter methods
    setEstadoDelSistema(estado: string) {
      this.estado_del_sistema = estado;
    }
  }
}
