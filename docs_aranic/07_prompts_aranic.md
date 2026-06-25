Registro de Prompts - Configuración e Implementación
Herramienta: Gemini (Google)
Sección del proyecto: Configuración de entorno, Tailwind CSS y Estilizado de componentes React.

Prompt 1 (Inicio de configuración):

"Estoy configurando un proyecto React con Vite y Tailwind CSS v4. Ya logré la instalación pero tengo errores de 'Cannot apply unknown utility class' al intentar usar clases como bg-slate-900. Mi objetivo es tener un entorno funcional y, posteriormente, estilizar el proyecto con una paleta de tonos rosados basada en los estándares de Tailwind. Ayúdame a corregir la configuración de PostCSS y Vite para que el motor de Tailwind detecte correctamente mis clases en los archivos JSX."

Qué se aceptó: La modificación del archivo src/index.css para utilizar la directiva @import "tailwindcss"; en lugar de las directivas de versión 3.

Corrección y justificación: El error persistía porque la sintaxis antigua no era compatible con la versión 4 de Tailwind. Se justificó el cambio por la actualización a la sintaxis moderna que gestiona mejor las utilidades a través de PostCSS.

Prompt 2 (Estilizado y diseño):

"Ahora que el motor de Tailwind funciona, quiero que la Wiki tenga tonos rosados para darle un aspecto moderno. ¿Cómo puedo organizar los colores usando la paleta de Tailwind (tonos 'pink') para que el diseño sea coherente, tenga buen contraste y sea profesional?"

Qué se aceptó: La implementación de una paleta basada en pink-50, pink-200 y pink-900.

Corrección y justificación: Se corrigió el uso inicial de text-white para adaptarlo a un esquema de colores más específico y estético, aplicando clases como bg-pink-50 para el fondo y text-pink-900 para el texto, asegurando la legibilidad según las buenas prácticas de diseño.

Prompt 3 (Creación del componente Navbar):

"Necesito crear un componente Navbar.jsx para mi Wiki. Debe utilizar una estructura flex con Tailwind. El diseño debe mantener la paleta de tonos rosados definida anteriormente: fondo pink-100, bordes pink-200, y enlaces que cambien a pink-900 al pasar el mouse. Debe incluir 4 secciones: 'Inicio', 'Servidor', 'Configuración' y 'Contacto'. Genera el código manteniendo la legibilidad y siguiendo las buenas prácticas de React."

Qué se aceptó: El componente Navbar.jsx con clases de espaciado y efectos de transición (transition, hover).

Corrección y justificación: Se implementó max-w-6xl y mx-auto para centrar el contenido, asegurando que el menú se vea profesional en pantallas grandes. Se justificó el uso de pseudo-clases hover para mejorar la experiencia de usuario (UX) mediante retroalimentación visual al navegar.