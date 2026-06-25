import { useState } from 'react';
import SeccionContenido from './SeccionContenido';

export default function ActiveDirectory() {
  const [abierto, setAbierto] = useState(null);

  const pasos = [
    { 
      titulo: "8. Acceso a Consola de Administración", 
      desc: "Se accedió a la herramienta de gestión mediante: Administrador del servidor → Herramientas → Usuarios y equipos de Active Directory.", 
      imgs: ["/docs_aranic/img_aranic/8. Active directory.jpg"] 
    },
    { 
      titulo: "9. Creación de Unidad Organizativa (OU)", 
      desc: "Se creó la OU 'Ventas' para organizar los objetos del dominio.", 
      imgs: ["/docs_aranic/img_aranic/9. Ventas.jpg"] 
    },
    { 
      titulo: "10. Creación de Usuarios", 
      desc: "Se crearon dos usuarios en la OU 'Ventas'. Se desmarcó la opción 'el usuario debe cambiar la contraseña en el próximo inicio' para efectos del laboratorio.", 
      imgs: ["/docs_aranic/img_aranic/10. desmarcar .jpg", "/docs_aranic/img_aranic/10. usuarios creados.jpg"] 
    },
    { 
      titulo: "11. Gestión de Grupos y Pertenencia", 
      desc: "Se creó el grupo 'G-Ventas' y se incorporaron los usuarios creados anteriormente.", 
      imgs: ["/docs_aranic/img_aranic/11. creacion grupo.jpg", "/docs_aranic/img_aranic/11. usuario incorporado.jpg", "/docs_aranic/img_aranic/11. comprueba miembros.jpg"] 
    }
  ];

  return (
    <SeccionContenido titulo="03. Dominio y Objetos">
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