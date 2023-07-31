namespace Dominio.Administracion {
  // Define the interface
  interface Repository {
      guardarAdministrador(administrador: Administrador): Promise<void>;
      eliminarAdministrador(administradorId: string): Promise<void>;
      actualizarAdministrador(administrador: Administrador): Promise<void>;
      obtenerAdministrador(administradorId: string): Promise<Administrador>;
  }
}
