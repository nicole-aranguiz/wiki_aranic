import SeccionContenido from './SeccionContenido';

export default function BitacoraIA() {
  return (
    <SeccionContenido titulo="07. Bitácora de Prompts (IA)">
      <div className="space-y-6 text-pink-900">
        
        {/* I. Arquitectura y Estructura */}
        <div className="bg-white/70 p-6 rounded-xl border border-pink-200 shadow-sm">
          <h3 className="font-bold text-lg mb-4 text-pink-950">I. Arquitectura y Estructura</h3>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-sm">Prompt 1: Definición de Acordeón</p>
              <blockquote className="bg-pink-50 p-3 rounded-lg border-l-4 border-pink-400 italic text-xs mb-2">
                "Genera un componente React llamado 'Inicio.jsx' usando Tailwind CSS. El diseño debe ser un acordeón (useState) que contenga: título, descripción técnica de 3 párrafos y un array de imágenes en '/docs_aranic/img_aranic/'. Usa Framer Motion para las animaciones."
              </blockquote>
            </div>
            <div>
              <p className="font-semibold text-sm">Prompt 2: Estandarización de Estilos</p>
              <blockquote className="bg-pink-50 p-3 rounded-lg border-l-4 border-pink-400 italic text-xs mb-2">
                "Crea una clase utilitaria personalizada para los contenedores de los pasos, aplicando fondo blanco con opacidad, desenfoque y bordes redondeados para mantener la consistencia visual."
              </blockquote>
            </div>
          </div>
        </div>

        {/* II. Contenido Técnico y Lógica */}
        <div className="bg-white/70 p-6 rounded-xl border border-pink-200 shadow-sm">
          <h3 className="font-bold text-lg mb-4 text-pink-950">II. Contenido Técnico y Lógica</h3>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-sm">Prompt 3: Documentación de AD DS</p>
              <blockquote className="bg-pink-50 p-3 rounded-lg border-l-4 border-pink-400 italic text-xs mb-2">
                "Redacta el contenido técnico para el paso 'Incorporación al Dominio'. Incluye requerimientos de DNS, unión al dominio 'inacap.local' y referencias a imágenes '17. unir dominio.jpg' y '17. verificacion.jpg'."
              </blockquote>
            </div>
            <div>
              <p className="font-semibold text-sm">Prompt 4: Lógica de Estado Global</p>
              <blockquote className="bg-pink-50 p-3 rounded-lg border-l-4 border-pink-400 italic text-xs mb-2">
                "Analiza la estructura del acordeón: ¿Cómo puedo elevar el estado 'activeKey' a nivel de componente padre para que al abrir una sección se cierren automáticamente las demás?"
              </blockquote>
            </div>
            <div>
              <p className="font-semibold text-sm">Prompt 5: Optimización de UX</p>
              <blockquote className="bg-pink-50 p-3 rounded-lg border-l-4 border-pink-400 italic text-xs mb-2">
                "Mejora la interacción con Framer Motion: usa AnimatePresence para que la expansión y contracción de cada sección no sea brusca, definiendo estados iniciales con height: 0."
              </blockquote>
            </div>
          </div>
        </div>

        {/* III. Depuración y Robustez */}
        <div className="bg-white/70 p-6 rounded-xl border border-pink-200 shadow-sm">
          <h3 className="font-bold text-lg mb-4 text-pink-950">III. Depuración y Robustez</h3>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-sm">Prompt 6: Manejo de Errores Multimedia</p>
              <blockquote className="bg-pink-50 p-3 rounded-lg border-l-4 border-pink-400 italic text-xs mb-2">
                "Implementa manejo de errores en el renderizado de imágenes mediante el evento 'onError'. Si una imagen falla al cargar, muestra un placeholder."
              </blockquote>
            </div>
            <div>
              <p className="font-semibold text-sm">Prompt 7: Diagnóstico de Rutas</p>
              <blockquote className="bg-pink-50 p-3 rounded-lg border-l-4 border-pink-400 italic text-xs mb-2">
                "Error 'Failed to resolve import' detectado. Analiza la jerarquía de 'src/components/' y ajusta los imports en App.jsx para resolver la referencia correcta."
              </blockquote>
            </div>
          </div>
        </div>

        {/* Reflexión Final */}
        <div className="bg-pink-100/60 p-6 rounded-xl border border-pink-300">
          <h3 className="font-bold text-lg mb-2 text-pink-950">Reflexión Final</h3>
          <p className="text-sm leading-relaxed">
            El uso de inteligencia artificial en este laboratorio fue fundamental para optimizar los tiempos de desarrollo, pero mi enfoque fue utilizarla exclusivamente como una herramienta de soporte técnico y no como una solución automatizada. Gestioné la bitácora mediante 7 prompts específicos, los cuales me permitieron resolver problemas complejos de programación, como la lógica de estado en React y la configuración de rutas, manteniendo siempre la estructura de la wiki alineada con los requisitos de la asignatura.

El valor de este trabajo no radica en la generación del contenido, sino en la validación técnica que realicé sobre cada propuesta de la IA. Aunque la herramienta facilitó la estructuración de la documentación, cada procedimiento detallado —desde la promoción del controlador de dominio en inacap.local hasta la implementación de las políticas de grupo— fue verificado manualmente contra los resultados obtenidos en mis propias máquinas virtuales.

Fui yo quien supervisó que la configuración técnica fuera consistente y que las evidencias capturadas fueran verídicas. En este sentido, la IA me permitió trabajar de manera más eficiente en la interfaz y en el código, pero la responsabilidad del rigor técnico y la coherencia del laboratorio es completamente mía. Esta experiencia me permitió entender que, en el ámbito profesional, la IA es un acelerador potente siempre y cuando exista una capacidad crítica por parte de quien la dirige.
          </p>
        </div>

      </div>
    </SeccionContenido>
  );
}