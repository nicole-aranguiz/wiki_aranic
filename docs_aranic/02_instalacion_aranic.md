# 1. Instalación y Configuración del Entorno

## 1.1 Configuración de Red de la Máquina Virtual
Para comenzar con la preparación de nuestro servidor (SRV-DC01), el primer paso es configurar la red en la máquina virtual. Es crucial aislar el entorno de laboratorio para que servicios como Active Directory o DHCP no interfieran con la red física (host).

Para esto, configuramos el adaptador de red en VirtualBox con los siguientes parámetros:
* **Conectado a:** Red interna
* **Nombre de la red:** redlab
* **Tipo de Adaptador:** PCnet-FAST III

## 1.2 Evidencia
A continuación, se muestra la captura de pantalla con la configuración aplicada al servidor:

![Configuración de Red Interna redlab](img_aranic/redlab.jpg)