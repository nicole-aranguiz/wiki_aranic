Se instaló el rol de servidor DHCP para automatizar la asignación de direcciones IP en la red del laboratorio. Tras finalizar la instalación, se ejecutó el asistente de configuración posterior para la autorización del servidor en AD DS.

Para qué sirve: La implementación de DHCP elimina la necesidad de configuración manual de IPs en cada equipo cliente, reduciendo errores humanos y facilitando la escalabilidad de la red. La autorización en AD DS es un paso crítico de seguridad que evita la ejecución de servidores DHCP no autorizados ("rogue DHCP servers") en el dominio.

13. Configuración de Ámbito (Scope)
Se definió el rango de direcciones y las opciones de red para los equipos clientes:

Acción: Herramientas → DHCP → clic derecho en IPv4 → Ámbito nuevo.

Rango: 192.168.10.50 a 192.168.10.100.

Máscara: 255.255.255.0 (Longitud 24).

Configuración adicional: Se asoció al dominio inacap.local con el servidor DNS 192.168.10.10.

Estado: El ámbito se configuró como "Activo".

Para qué sirve: El ámbito (Scope) permite delimitar el espacio de direccionamiento IP disponible, asegurando que los clientes reciban no solo una IP válida, sino también la configuración necesaria (puerta de enlace, DNS, nombre de dominio) para integrarse correctamente a la red de la organización sin intervención manual.