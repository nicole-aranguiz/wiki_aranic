# 02. Instalación (Bloque B)

## 6. Instalación de Roles (AD DS)
Se procedió a la instalación del rol de Servicios de dominio de Active Directory:
* **Acción:** Administrador del servidor → Administrar → Agregar roles y características.
* **Selección:** Se marcó la opción "Servicios de dominio de Active Directory" (AD DS).

![Selección de rol AD DS](/img_aranic/6. administrador del servidor.jpg)
![Proceso de instalación](/img_aranic/6. instalacion.jpg)
![Finalización de instalación](/img_aranic/6. finalizacion instalacion.jpg)

## 7. Promoción a Controlador de Dominio
Tras la instalación, se realizó la promoción del servidor:
* **Acción:** Se utilizó la notificación de la bandera de advertencia para "Promover este servidor a controlador de dominio".
* **Configuración:** Se configuró como un nuevo bosque con el dominio raíz `inacap.local`.
* **Resultado:** El sistema confirmó la configuración exitosa como controlador de dominio y se procedió al reinicio.
* **Acceso:** Tras el reinicio, se validó el inicio de sesión con el usuario `INACAP\Administrador`.

![Promoción a controlador de dominio](/img_aranic/7. controlador de dominio.jpg)
![Inicio de sesión exitoso](/img_aranic/7. finalizacion inacap administrador.jpg)