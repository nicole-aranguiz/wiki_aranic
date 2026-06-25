Bitácora de Prompts (IA)
I. Arquitectura y Estructura
Prompt 1: Definición de Acordeón
"Genera un componente React llamado 'Inicio.jsx' usando Tailwind CSS. El diseño debe ser un acordeón (useState) que contenga: título, descripción técnica de 3 párrafos y un array de imágenes en '/docs_aranic/img_aranic/'. Usa Framer Motion para las animaciones."

Prompt 2: Estandarización de Estilos
"Crea una clase utilitaria personalizada para los contenedores de los pasos, aplicando fondo blanco con opacidad, desenfoque y bordes redondeados para mantener la consistencia visual."

II. Contenido Técnico y Lógica
Prompt 3: Documentación de AD DS
"Redacta el contenido técnico para el paso 'Incorporación al Dominio'. Incluye requerimientos de DNS, unión al dominio 'inacap.local' y referencias a imágenes '17. unir dominio.jpg' y '17. verificacion.jpg'."

Prompt 4: Lógica de Estado Global
"Analiza la estructura del acordeón: ¿Cómo puedo elevar el estado 'activeKey' a nivel de componente padre para que al abrir una sección se cierren automáticamente las demás?"

Prompt 5: Optimización de UX
"Mejora la interacción con Framer Motion: usa AnimatePresence para que la expansión y contracción de cada sección no sea brusca, definiendo estados iniciales con height: 0."

III. Depuración y Robustez
Prompt 6: Manejo de Errores Multimedia
"Implementa manejo de errores en el renderizado de imágenes mediante el evento 'onError'. Si una imagen falla al cargar, muestra un placeholder."

Prompt 7: Diagnóstico de Rutas
"Error 'Failed to resolve import' detectado. Analiza la jerarquía de 'src/components/' y ajusta los imports en App.jsx para resolver la referencia correcta."

Reflexión Final.
La IA funcionó como un agente de pair programming. Al gestionar 7 prompts de alta especificidad, pasé de una fase de estructuración base a una de optimización avanzada (lógica de estado y robustez). La clave fue tratar a la IA no como una "caja negra" que genera todo, sino como un colaborador que requiere instrucciones precisas sobre mi entorno de desarrollo. La validación final de la integridad de los datos de red y la jerarquía de archivos fue realizada manualmente por mí, asegurando que la wiki cumpliera con el rigor técnico del laboratorio.