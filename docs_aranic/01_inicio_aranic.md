# 01. Servidor: Instalación y Configuración (Bloque A)

## 1. Configuración de la Máquina Virtual
Se creó la VM **SRV-DC01** en VirtualBox con 4 GB de RAM y 50 GB de disco. Se configuró el Adaptador 1 en **Red interna** con nombre `redlab`.
![Captura 1: Configuración de VM](img_aranic/redlab.jpg)

## 2. Instalación de Windows Server 2025
Se instaló la versión Standard (Experiencia de escritorio) en español.
![Captura 2: Instalación OS](img_aranic/2.%20Idioma.jpg)

## 3. Asignación de Nombre de Equipo
En Administrador del servidor, se renombró el equipo a:
* **Nombre:** `SRV-DC01`
![Captura 3: Nombre de equipo](img_aranic/3.%20nombre%20adm%20servidor.jpg)

## 4. Configuración de IP Fija
Se configuró la red con los parámetros solicitados:
* **IP:** `192.168.10.10`
* **Máscara:** `255.255.255.0`
* **DNS Preferido:** `127.0.0.1`
![Ventana de configuración IP](img_aranic/4.%20config%20ip%20fija.jpg)
![Verificación de IP asignada](img_aranic/4.%20resultado%20ip%20fija.jpg)

## 5. Verificación de Firewall
Se comprobó que el firewall de Windows está activo por defecto.
![Captura 5: Estado Firewall](img_aranic/5.%20firewall%20activado.jpg)