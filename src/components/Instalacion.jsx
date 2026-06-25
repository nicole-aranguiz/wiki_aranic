import { useState } from 'react';
import SeccionContenido from './SeccionContenido';

export default function Instalacion() {
  const [abierto, setAbierto] = useState(null);

  const pasos = [
    { 
      titulo: "6. Instalación de Roles (AD DS)", 
      desc: "Se procedió a la instalación del rol de Servicios de dominio de Active Directory: Acción: Administrador del servidor → Administrar → Agregar roles y características. Selección: Se marcó la opción 'Servicios de dominio de Active Directory' (AD DS).", 
      imgs: ["/docs_aranic/img_aranic/6. administrador del servidor.jpg", "/docs_aranic/img_aranic/6. instalacion.jpg", "/docs_aranic/img_aranic/6. finalizacion instalacion.jpg"] 
    },
    { 
      titulo: "7. Promoción a Controlador de Dominio", 
      desc: "Tras la instalación, se realizó la promoción del servidor: Acción: Se utilizó la notificación de la bandera de advertencia para 'Promover este servidor a controlador de dominio'. Configuración: Se configuró como un nuevo bosque con el dominio raíz inacap.local. Resultado: El sistema confirmó la configuración exitosa como controlador de dominio y se procedió al reinicio. Acceso: Tras el reinicio, se validó el inicio de sesión con el usuario INACAP\\Administrador.", 
      imgs: ["/docs_aranic/img_aranic/7. controlador de dominio.jpg", "/docs_aranic/img_aranic/7. finalizacion inacap administrador.jpg"] 
    }
  ];

  return (
    <SeccionContenido titulo="02. Instalación y Config. Básica">
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