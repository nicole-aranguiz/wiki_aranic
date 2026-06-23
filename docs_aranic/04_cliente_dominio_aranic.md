# 04. Servidor DHCP (Bloque D)

## 12. Instalación de Rol DHCP
Se instaló el rol de servidor DHCP para automatizar la asignación de direcciones IP en la red del laboratorio. Tras finalizar la instalación, se ejecutó el asistente de configuración posterior para la autorización del servidor en AD DS.

![Instalación del rol DHCP](img_aranic/12.%20DHCP%20instalacion.jpg)
![Finalización configuración post-instalación](img_aranic/12.%20Configuracion%20terminada.jpg)

## 13. Configuración de Ámbito (Scope)
Se definió el rango de direcciones y las opciones de red para los equipos clientes:
* **Acción:** Herramientas → DHCP → clic derecho en IPv4 → Ámbito nuevo.
* **Rango:** `192.168.10.50` a `192.168.10.100`.
* **Máscara:** `255.255.255.0` (Longitud 24).
* **Configuración adicional:** Se asoció al dominio `inacap.local` con el servidor DNS `192.168.10.10`.
* **Estado:** El ámbito se configuró como "Activo".

![Definición del rango IP](img_aranic/13.%20herramientas%20DHCP.jpg)
![Ámbito activo en la consola DHCP](img_aranic/13.%20finalizacion%20DHCP%20herramientas.jpg)