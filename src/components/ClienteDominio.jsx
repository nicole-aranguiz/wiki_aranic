import { useState } from 'react';
import SeccionContenido from './SeccionContenido';

export default function ClienteDominio() {
  const [abierto, setAbierto] = useState(null);

  const pasos = [
    { 
      titulo: "12. Instalación de Rol DHCP", 
      desc: "Se instaló el rol de servidor DHCP para automatizar la asignación de direcciones IP. Tras finalizar, se autorizó el servidor en AD DS.", 
      imgs: ["/docs_aranic/img_aranic/12. DHCP instalacion.jpg", "/docs_aranic/img_aranic/12. Configuracion terminada.jpg"] 
    },
    { 
      titulo: "13. Configuración de Ámbito (Scope)", 
      desc: "Se definió el rango de direcciones (192.168.10.50 a 192.168.10.100) y opciones de red (DNS 192.168.10.10, Dominio inacap.local).", 
      imgs: ["/docs_aranic/img_aranic/13. herramientas DHCP.jpg", "/docs_aranic/img_aranic/13. finalizacion DHCP herramientas.jpg"] 
    }
  ];

  return (
    <SeccionContenido titulo="04. Cliente en el dominio.">
      <div className="space-y-3">
        {pasos.map((paso, i) => (
          <div key={i} className="border border-pink-200 rounded-lg overflow-hidden bg-white shadow-sm">
            <button 
              onClick={() => setAbierto(abierto === i ? null : i)}
              className="w-full text-left p-4 bg-pink-50 font-bold text-pink-900 hover:bg-pink-100 flex justify-between items-center transition-colors"
            >
              {paso.titulo}
              <span className="text-pink-400">{abierto === i ? "▲" : "▼"}</span>
            </button>
            
            {abierto === i && (
              <div className="p-6 border-t border-pink-100">
                <p className="mb-6 text-pink-900">{paso.desc}</p>
                <div className="grid gap-4">
                  {paso.imgs.map((img, idx) => (
                    <img key={idx} src={img} alt={`Imagen ${idx}`} className="rounded-lg shadow-md border border-pink-200" />
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