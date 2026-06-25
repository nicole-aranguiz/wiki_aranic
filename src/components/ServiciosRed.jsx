import { useState } from 'react';
import SeccionContenido from './SeccionContenido';

export default function ServiciosRed() {
  const [abierto, setAbierto] = useState(null);

  const pasos = [
    { 
      titulo: "14. Configuración del Cliente", 
      desc: "Se creó la máquina virtual PC01 con Windows 10 Pro, configurando el adaptador de red en la red interna 'redlab' para permitir la comunicación con el controlador de dominio.", 
      imgs: ["/docs_aranic/img_aranic/14. PC01 redlab.jpg"] 
    },
    { 
      titulo: "15. Verificación de Red", 
      desc: "Se ejecutó ipconfig en el cliente, confirmando la recepción exitosa de una dirección IP desde el servidor DHCP y la correcta configuración del DNS.", 
      imgs: ["/docs_aranic/img_aranic/15. resultado ejec ipconfig.jpg"] 
    },
    { 
      titulo: "16. Sincronización Temporal", 
      desc: "Se validó la coincidencia de fecha y hora entre el controlador de dominio (SRV-DC01) y el cliente (PC01) para garantizar la integridad de las credenciales.", 
      imgs: ["/docs_aranic/img_aranic/16. fecha DVC.jpg", "/docs_aranic/img_aranic/16. hora pc.jpg"] 
    },
    { 
      titulo: "17. Unión al Dominio", 
      desc: "Se procedió a unir el equipo al dominio inacap.local. Tras las credenciales administrativas, se completó la unión y el reinicio del equipo.", 
      imgs: ["/docs_aranic/img_aranic/17. unir dominio.jpg", "/docs_aranic/img_aranic/17. verificacion final dominio.jpg"] 
    }
  ];

  return (
    <SeccionContenido titulo="05. Incorporación al Dominio">
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