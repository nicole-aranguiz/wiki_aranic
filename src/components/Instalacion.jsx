import { useState } from 'react';
import SeccionContenido from './SeccionContenido';

export default function Instalacion() {
  const [abierto, setAbierto] = useState(null);

  const pasos = [
    { 
      titulo: "6. Instalación de Roles (AD DS)", 
      desc: "Iniciamos la configuración del servidor añadiendo el rol de 'Servicios de dominio de Active Directory' (AD DS). Esto se realizó desde el Administrador del servidor, accediendo al asistente de 'Agregar roles y características'. Al completar la instalación, el sistema quedó preparado para gestionar usuarios y equipos de forma centralizada.", 
      imgs: ["/img_aranic/6. administrador del servidor.jpg", "/img_aranic/6. instalacion.jpg", "/img_aranic/6. finalizacion instalacion.jpg"] 
    },
    { 
      titulo: "7. Promoción a Controlador de Dominio", 
      desc: "Una vez instalado el rol, promocionamos el servidor a Controlador de Dominio para activar la gestión del dominio. Creamos un 'nuevo bosque' llamado 'inacap.local'. Tras finalizar el proceso y el reinicio automático del sistema, validamos el acceso iniciando sesión como 'INACAP\\Administrador', lo que confirma que el controlador está operativo y gestionando nuestro dominio.", 
      imgs: ["/img_aranic/7. controlador de dominio.jpg", "/img_aranic/7. finalizacion inacap administrador.jpg"] 
    }
  ];

  return (
    <SeccionContenido titulo="02. Instalación y Config. Básica">
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