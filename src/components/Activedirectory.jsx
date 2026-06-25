export default function ActiveDirectory() {
  return (
    <section id="active-directory" className="bg-white p-8 rounded-2xl shadow-sm border border-pink-200 mt-6">
      <h2 className="text-3xl font-bold text-pink-900 mb-6">03. Active Directory: Dominio y Objetos</h2>
      <div className="text-pink-800 leading-relaxed space-y-4">
        <p>
          En esta sección se detalla la configuración del controlador de dominio y la creación de objetos (usuarios y grupos) en Active Directory.
        </p>
        
        <div className="bg-pink-50 border border-pink-100 p-4 rounded-lg text-center mt-4 italic">
          [Aquí irá la captura de la estructura de la OU o usuarios creados: &lt;img src="/img_/ad_objetos.png" alt="Active Directory" /&gt;]
        </div>

        <h3 className="text-xl font-semibold text-pink-900 mt-6">Puntos clave:</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Instalación del rol de AD DS.</li>
          <li>Configuración del nuevo bosque de dominio.</li>
          <li>Creación de Unidades Organizativas (OU).</li>
        </ul>
      </div>
    </section>
  );
}