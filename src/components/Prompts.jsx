import SeccionContenido from './SeccionContenido';
import { useState } from 'react';

export default function Prompts() {
  const listaPrompts = [
    { 
      categoria: "Base de Datos", 
      ejemplo: "Explícame cómo funciona una agregación en MongoDB para filtrar usuarios por rango de edad." 
    },
    { 
      categoria: "Documentación", 
      ejemplo: "Ayúdame a redactar los pasos técnicos para la configuración de un controlador de dominio en Windows Server." 
    },
    { 
      categoria: "Web / UI", 
      ejemplo: "Cómo aplicar una fuente de Google Fonts en un proyecto de React usando Tailwind CSS." 
    }
  ];

  const [abierto, setAbierto] = useState(null);

  return (
    <SeccionContenido titulo="07. Bitácora de Prompts">
      <p className="mb-6 text-pink-700">Aquí puedes guardar tus mejores prompts para consultarlos rápidamente.</p>
      
      <div className="space-y-3">
        {listaPrompts.map((p, i) => (
          <div key={i} className="border border-pink-200 rounded-lg overflow-hidden">
            <button 
              onClick={() => setAbierto(abierto === i ? null : i)}
              className="w-full text-left p-4 bg-pink-50 font-bold text-pink-900 hover:bg-pink-100 flex justify-between"
            >
              {p.categoria}
              <span>{abierto === i ? "▲" : "▼"}</span>
            </button>
            {abierto === i && (
              <div className="p-4 bg-white border-t border-pink-100 italic text-pink-800">
                "{p.ejemplo}"
              </div>
            )}
          </div>
        ))}
      </div>
    </SeccionContenido>
  );
}