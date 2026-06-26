import { useState } from 'react';
import SeccionContenido from './SeccionContenido';

export default function Gpo() {
  const [abierto, setAbierto] = useState(null);

  const pasos = [
    { 
      titulo: "18. Creación de GPO", 
      desc: "Se creó y vinculó el objeto de directiva de grupo 'GPO-Ventas' en la Unidad Organizativa correspondiente.", 
      imgs: ["/img_aranic/18. Creacion gp0 ventas.jpg", "/img_aranic/18. creacion lista.jpg"] 
    },
    { 
      titulo: "19. Configuración de Restricciones", 
      desc: "Se editó el GPO para aplicar una restricción de usuario. Política configurada: 'Prohibir el acceso a Configuración de PC y a Panel de control' en estado Habilitada.", 
      imgs: ["/img_aranic/19. prohibir acceso.jpg"] 
    },
    { 
      titulo: "20. Aplicación y Verificación", 
      desc: "Tras forzar la actualización de directivas (gpupdate /force) en el cliente, se verificó efectivamente el bloqueo del acceso al intentar abrir el Panel de Control.", 
      imgs: ["/img_aranic/20. prohibicion cliente panel de control.jpg"] 
    }
  ];

  return (
    <SeccionContenido titulo="06. Políticas de Grupo (GPO)">
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