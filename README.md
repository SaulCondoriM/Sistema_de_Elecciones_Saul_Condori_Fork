# SISTEMA DE ELECCIONES

## Integrantes:

- Sergio Sebastian Santos Mena Quispe
- Diego Francisco Apaza Andaluz
- Jesus Bruno Chancayauri Soncco
- Christian Pardavé Espinoza
- Saul Arturo Condori Machaca


En mi aportacion al codigo en el modelo de "ADMINISTRACION" estoy los siguientes estilos de programacion: Programación Orientada a Objetos (POO), Modelo-Vista-Controlador (MVC) y tratamiento de errores. A continuacion detallo cómo se aplico los estilos en las diversas partes del código.

### Programación Orientada a Objetos (POO)

En mi contribución al proyecto, diseñé las clases Administrador, Sistema, Opciones_Admin y la interfaz Repository siguiendo los principios de la Programación Orientada a Objetos. Cada una de estas clases representa un objeto en nuestro sistema y encapsula los datos y los comportamientos específicos de ese objeto.

### Modelo-Vista-Controlador (MVC)

Mi aporte sigue la estructura del patrón Modelo-Vista-Controlador. Las clases Administrador, Sistema y Repository que creé representan el Modelo, que contiene los datos y la lógica del negocio. La clase Opciones_Admin actúa como el Controlador, manipulando el Modelo y actualizando la Vista.

### Tratamiento de errores

Para asegurar la robustez y la fiabilidad del sistema, implementé el tratamiento de errores en la clase Opciones_Admin que desarrollé. Utilicé bloques try/catch para manejar cualquier error que pueda ocurrir durante las operaciones de la base de datos. Cuando se detecta un error, muestro un mensaje de error en la consola, permitiendo una fácil depuración y seguimiento de los problemas. Esto es esencial para asegurar que el sistema siga funcionando incluso cuando ocurran problemas inesperados.

### Code Smell

Por el momento, con ayuda de la extension SonarLint, pude identificar algunos problemas que me los marcaba com Code Smell, como por ejemplo, al momento de nombrar clases, teniendo mi clase la siguiente estructura:
```
class my_class {...}
```
Recomendando a que la cambie por la siguiente estructura:
```
class MyClass {...}
```

