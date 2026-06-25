# 03. Objetos del Dominio (Bloque C)

## 8. Acceso a Consola de Administración
Se accedió a la herramienta de gestión mediante: Administrador del servidor → Herramientas → Usuarios y equipos de Active Directory.

Para qué sirve: Esta consola es la interfaz principal para la administración de objetos (usuarios, grupos, equipos) en AD DS, permitiendo gestionar la estructura lógica del dominio y delegar tareas de administración.

9. Creación de Unidad Organizativa (OU)
Se creó la OU Ventas para organizar los objetos del dominio.

Para qué sirve: Las Unidades Organizativas (OU) son contenedores lógicos que permiten agrupar objetos para aplicar políticas de grupo (GPO) de manera específica y facilitar la delegación de control administrativo dentro de la organización.

10. Creación de Usuarios
Se crearon dos usuarios en la OU Ventas. Se desmarcó la opción "el usuario debe cambiar la contraseña en el próximo inicio" para efectos del laboratorio.

Para qué sirve: La creación de cuentas de usuario individuales es la base del control de acceso; permite identificar de forma única a cada colaborador y gestionar sus permisos de manera granular dentro del dominio.

11. Gestión de Grupos y Pertenencia
Se creó el grupo G-Ventas y se incorporaron los usuarios creados anteriormente.

Para qué sirve: Los grupos simplifican enormemente la administración; en lugar de asignar permisos usuario por usuario, se asignan permisos al grupo. Al añadir usuarios a G-Ventas, heredan automáticamente los accesos configurados para dicho grupo, siguiendo las mejores prácticas de administración eficiente.
