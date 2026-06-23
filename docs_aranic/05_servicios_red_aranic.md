# 05. Incorporación al Dominio (Bloque E)

## 14. Configuración del Cliente
Se creó la máquina virtual **PC01** con Windows 10 Pro, configurando el adaptador de red en la red interna `redlab` para permitir la comunicación con el controlador de dominio.

![Configuración red PC01](img_aranic/14.%20PC01%20redlab.jpg)

## 15. Verificación de Red
Se ejecutó `ipconfig` en el cliente, confirmando la recepción exitosa de una dirección IP desde el servidor DHCP (`192.168.10.x`) y la correcta configuración del DNS.

![Verificación IP vía DHCP](img_aranic/15.%20resultado%20ejec%20ipconfig.jpg)

## 16. Sincronización Temporal
Se validó la coincidencia de fecha y hora entre el controlador de dominio (`SRV-DC01`) y el cliente (`PC01`) para garantizar la integridad de las credenciales durante el proceso de unión.

![Fecha servidor](img_aranic/16.%20fecha%20DVC.jpg)
![Hora cliente](img_aranic/16.%20hora%20pc.jpg)

## 17. Unión al Dominio
Se procedió a unir el equipo al dominio `inacap.local`. Tras las credenciales administrativas, se completó la unión y el reinicio del equipo.

![Unión al dominio](img_aranic/17.%20unir%20dominio.jpg)
![Verificación de dominio](img_aranic/17.%20verificacion%20final%20dominio.jpg)