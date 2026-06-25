import { useState } from 'react';
import SeccionContenido from './SeccionContenido';

export default function Cliente() {
  const [abierto, setAbierto] = useState(null);

  const pasos = [
    { 
      titulo: "12. Instalación de Rol DHCP", 
      desc: "Procedimos con la instalación del rol de servidor DHCP para automatizar la asignación de direcciones IP en nuestra red de laboratorio. Tras finalizar la instalación, ejecutamos el asistente de configuración para autorizar el servidor en Active Directory, permitiendo así que comience a gestionar las peticiones de red de forma segura.", 
      imgs: ["/docs_aranic/img_aranic/12. DHCP instalacion.jpg", "/docs_aranic/img_aranic/12. Configuracion terminada.jpg"] 
    },
    { 
      titulo: "13. Configuración de Ámbito DHCP", 
      desc: "Definimos el ámbito del DHCP, estableciendo un rango de direcciones IP (desde 192.168.10.50 hasta 192.168.10.100). Además, configuramos las opciones de red necesarias, asociando el servidor DNS (192.168.10.10) para garantizar que los clientes del dominio 'inacap.local' reciban la configuración correcta automáticamente.", 
      imgs: ["/docs_aranic/img_aranic/13. herramientas DHCP.jpg", "/docs_aranic/img_aranic/13. finalizacion DHCP herramientas.jpg"] 
    }
  ];

  return (
    <SeccionContenido titulo="04. Cliente en el dominio">
      <div className="space-y-4">
        {pasos.map((paso, i) => (
          <div key={i} className="border border-pink-200 rounded-xl overflow-hidden bg-white shadow-sm">
            <button 
              onClick={() => setAbierto(abierto === i ? null : i)}
              className="w-full text-left p-5 bg-pink-50 font-bold text-pink-900 hover:bg-pink-100 flex justify-between items-center transition-colors"
            >
              {paso.titulo}
              <span className="text-pink-600 font-bold">{abierto === i ? "▲" : "▼"}</span>
            </button>
            
            {abierto === i && (
              <div className="p-6 border-t border-pink-100">
                <p className="text-pink-800 mb-6 leading-relaxed">{paso.desc}</p>
                <div className="grid gap-4">
                  {paso.imgs.map((img, idx) => (
                    <img key={idx} src={img} alt={`Evidencia de ${paso.titulo}`} className="rounded-lg shadow-sm border border-pink-100" />
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </SeccionContenido>
  );
}