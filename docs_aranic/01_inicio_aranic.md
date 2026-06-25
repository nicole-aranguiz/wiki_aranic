# 01. Servidor: Instalación y Configuración (Bloque A)

## 1. Configuración de la Máquina Virtual
Se creó la VM SRV-DC01 en VirtualBox con 4 GB de RAM y 50 GB de disco. Se configuró el Adaptador 1 en Red interna con nombre redlab.

Para qué sirve: La red interna redlab garantiza el aislamiento del entorno de laboratorio, permitiendo que el servidor y el cliente se comuniquen entre sí sin interferencias de la red física externa, cumpliendo con los estándares de seguridad de un entorno de red privada.

2. Instalación de Windows Server 2025
Se instaló la versión Standard (Experiencia de escritorio) en español.

Para qué sirve: Esta edición proporciona la interfaz gráfica necesaria para una gestión más intuitiva de las herramientas de administración de servidores, ideal para la configuración inicial de roles críticos.

3. Asignación de Nombre de Equipo
En Administrador del servidor, se renombró el equipo a:

Nombre: SRV-DC01

Para qué sirve: El uso de una nomenclatura estandarizada es fundamental para la correcta resolución de nombres y la administración jerárquica dentro del dominio inacap.local.

4. Configuración de IP Fija
Se configuró la red con los parámetros solicitados:

IP: 192.168.10.10

Máscara: 255.255.255.0

DNS Preferido: 127.0.0.1

Para qué sirve: La asignación de una IP estática es obligatoria para un Controlador de Dominio, ya que los clientes deben tener un punto de referencia constante para acceder a los servicios de red. El DNS apuntando a 127.0.0.1 (localhost) asegura que el servidor se consulte a sí mismo para resolver las peticiones del dominio.

5. Verificación de Firewall
Se comprobó que el firewall de Windows está activo por defecto.

Para qué sirve: Mantener el firewall activo es una medida de seguridad esencial para proteger los servicios del servidor frente a accesos no autorizados, permitiendo solo el tráfico necesario para la operación del dominio.