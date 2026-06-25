import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SeccionContenido from './SeccionContenido';

export default function ServiciosRed() {
  const [abierto, setAbierto] = useState(null);

  // Asegúrate de que los nombres de los archivos aquí coincidan EXACTAMENTE con los de tu carpeta
  const pasos = [
    { 
      titulo: "14. Configuración IP del Cliente", 
      desc: "Se configuró la dirección IP estática en el equipo cliente.", 
      imgs: ["/docs_aranic/img_aranic/14. ip cliente.jpg"] 
    },
    { 
      titulo: "15. Cambio de Nombre del Equipo", 
      desc: "Se modificó el nombre del equipo cliente.", 
      imgs: ["/docs_aranic/img_aranic/15. nombre equipo.jpg"] 
    },
    { 
      titulo: "16. Incorporación al Dominio", 
      desc: "Se ingresó al dominio con credenciales de administrador.", 
      imgs: ["/docs_aranic/img_aranic/16. union dominio.jpg"] 
    },
    { 
      titulo: "17. Verificación en el Servidor", 
      desc: "Se comprobó el cliente en Active Directory.", 
      imgs: ["/docs_aranic/img_aranic/17. verificacion ad.jpg"] 
    }
  ];

  return (
    <SeccionContenido titulo="05. Incorporación al Dominio">
      <div className="space-y-4">
        {pasos.map((paso, i) => (
          <div key={i} className="backdrop-blur-md bg-white/60 border border-white/20 rounded-xl shadow-lg overflow-hidden">
            <button 
              onClick={() => setAbierto(abierto === i ? null : i)}
              className="w-full text-left p-4 font-bold text-pink-900 flex justify-between items-center"
            >
              {paso.titulo}
              <motion.span animate={{ rotate: abierto === i ? 180 : 0 }}>▼</motion.span>
            </button>
            
            <AnimatePresence>
              {abierto === i && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="border-t border-white/30"
                >
                  <div className="p-6">
                    <p className="mb-6 text-pink-900">{paso.desc}</p>
                    <div className="grid gap-4">
                      {paso.imgs.map((img, idx) => (
                        <img 
                          key={idx} 
                          src={img} 
                          alt="Evidencia" 
                          className="rounded-lg shadow-md w-full"
                          onError={(e) => { e.target.style.display = 'none'; console.error("No se encontró la imagen:", img); }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </SeccionContenido>
  );
}