# 05. Incorporación al Dominio (Bloque E)

## 14. Configuración del Cliente
Se creó la máquina virtual PC01 con Windows 10 Pro, configurando el adaptador de red en la red interna redlab para permitir la comunicación con el controlador de dominio.

Para qué sirve: El uso de la red interna redlab es indispensable para aislar el tráfico de red del laboratorio. Al configurar PC01 aquí, garantizamos que el cliente pueda localizar al servidor de dominio sin interferencias externas, manteniendo un entorno de pruebas controlado.

15. Verificación de Red
Se ejecutó ipconfig en el cliente, confirmando la recepción exitosa de una dirección IP desde el servidor DHCP (192.168.10.x) y la correcta configuración del DNS.

Para qué sirve: Verificar la asignación de IP es el primer paso de diagnóstico; confirmar que el cliente recibe la IP del ámbito DHCP y la dirección del DNS del controlador de dominio asegura que la infraestructura de servicios de red está operando correctamente antes de intentar la unión.

16. Sincronización Temporal
Se validó la coincidencia de fecha y hora entre el controlador de dominio (SRV-DC01) y el cliente (PC01) para garantizar la integridad de las credenciales durante el proceso de unión.

Para qué sirve: La sincronización horaria es crítica en entornos con Active Directory, ya que el protocolo Kerberos, utilizado para la autenticación, requiere que la diferencia de tiempo entre cliente y servidor sea mínima (generalmente menor a 5 minutos) para evitar errores de autenticación por "ataques de reproducción" (replay attacks).

17. Unión al Dominio
Se procedió a unir el equipo al dominio inacap.local. Tras las credenciales administrativas, se completó la unión y el reinicio del equipo.

Para qué sirve: La unión al dominio permite que la identidad de la máquina sea gestionada por Active Directory, otorgando al equipo acceso a recursos de red compartidos, políticas de grupo (GPO) y permitiendo el inicio de sesión centralizado con cuentas de dominio.