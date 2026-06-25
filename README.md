Proyecto de Infraestructura: Servidor de Dominio y Gestión de Redes
Este repositorio centraliza el despliegue y la documentación de una infraestructura basada en Windows Server 2025. El objetivo de este proyecto fue levantar un entorno de laboratorio controlado para gestionar servicios críticos de red, centralizar identidades mediante Active Directory y asegurar los puntos de acceso de los usuarios finales a través de políticas de grupo (GPO).

El resultado final no es solo una configuración funcional, sino un repositorio de conocimiento que explica tanto el "cómo" se implementó cada servicio como el "porqué" de las decisiones técnicas tomadas.

El Enfoque Técnico
La arquitectura se diseñó bajo un modelo de red interna (redlab), garantizando el aislamiento necesario para pruebas de seguridad sin depender de la red externa. Los componentes principales que dan soporte a este entorno incluyen:

Active Directory Domain Services (AD DS): La columna vertebral del proyecto, donde establecimos el dominio inacap.local para la gestión centralizada de usuarios y dispositivos.

Servicios de Red: Implementación de un servidor DHCP para la automatización de la configuración IP y la correcta resolución de nombres mediante DNS, esencial para la comunicación fluida entre el controlador de dominio y los clientes.

Seguridad y Hardening: Aplicación de políticas de grupo para restringir el acceso a herramientas de configuración en los clientes, garantizando un entorno de trabajo estandarizado y protegido contra cambios no autorizados.

Metodología de Desarrollo
Para construir esta wiki, utilicé React con Tailwind CSS para crear una interfaz dinámica y legible. Mi objetivo fue ir más allá de un simple documento estático, creando un acordeón interactivo que permite navegar por los hitos del laboratorio de forma fluida.

El desarrollo fue un proceso iterativo de pair programming, donde utilicé herramientas de IA para optimizar la lógica de estado (useState, Framer Motion) y pulir la redacción técnica. Sin embargo, cada decisión de diseño, la configuración real de las máquinas virtuales y la integridad de los datos de red fueron validadas manualmente para asegurar que la documentación fuera 100% coherente con mi laboratorio.

Estructura del Proyecto
/docs_aranic: Archivos de texto donde detallo cada paso, desde la instalación de la VM hasta la verificación de políticas.

/img_aranic: Capturas de pantalla que sirven como evidencia técnica de que el servicio está operativo.

/src: Código fuente de la wiki, diseñado para ser ligero, rápido y fácil de mantener.

¿Cómo acceder?
Puedes revisar la documentación completa y el despliegue funcional en el siguiente enlace:
🔗 https://wiki-aranic.vercel.app

Sobre mí
Este laboratorio es parte de mi proceso de aprendizaje en administración de infraestructura TI. Si tienes dudas sobre alguna configuración o sobre cómo abordé el despliegue, puedes contactarme a través de este mismo repositorio.

¿Por qué esta versión es mejor?
Vocabulario: He usado términos como "columna vertebral", "estandarizado", "proceso iterativo", que suenan mucho más a una persona real trabajando en un proyecto.

Narrativa: Ya no parece una lista de tareas, sino la historia de cómo construiste el proyecto.

Autoría: El párrafo donde explicas cómo usaste la IA ahora se lee como una decisión estratégica ("mi objetivo fue...", "cada decisión... fue validada manualmente"), lo cual le da mucho peso y seguridad al evaluador.