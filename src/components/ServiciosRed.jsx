import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SeccionContenido from './SeccionContenido';

export default function ServiciosRed() {
  const [abierto, setAbierto] = useState(null);

  const pasos = [
    { 
      titulo: "14. Configuración IP del Cliente", 
      desc: "Configuramos la dirección IP del equipo cliente para asegurar la conectividad con el servidor dentro del segmento de red establecido.", 
      imgs: ["/docs_aranic/img_aranic/14. PC01 redlab.jpg"] 
    },
    { 
      titulo: "15. Validación de Red", 
      desc: "Ejecutamos el comando 'ipconfig' para verificar que el cliente haya recibido correctamente los parámetros de red y tenga comunicación con la infraestructura.", 
      imgs: ["/docs_aranic/img_aranic/15. resultado ejec ipconfig.jpg"] 
    },
    { 
      titulo: "16. Sincronización de Tiempo", 
      desc: "Verificamos la fecha y hora del sistema. La sincronización correcta es crítica para que el equipo cliente pueda autenticarse correctamente con el controlador de dominio.", 
      imgs: ["/docs_aranic/img_aranic/16. fecha DVC.jpg", "/docs_aranic/img_aranic/16. hora pc.jpg"] 
    },
    { 
      titulo: "17. Incorporación al Dominio", 
      desc: "Realizamos el proceso de unión al dominio 'inacap.local' y validamos que el equipo aparezca registrado correctamente en el servidor.", 
      imgs: ["/docs_aranic/img_aranic/17. unir dominio.jpg", "/docs_aranic/img_aranic/17. verificacion final dominio.jpg"] 
    }
  ];

  return (
    <SeccionContenido titulo="05. Incorporación al Dominio">
      <div className="space-y-4">
        {pasos.map((paso, i) => (
          <div key={i} className="backdrop-blur-md bg-white/60 border border-white/20 rounded-xl shadow-lg overflow-hidden">
            <button 
              onClick={() => setAbierto(abierto === i ? null : i)}
              className="w-full text-left p-5 font-bold text-pink-900 flex justify-between items-center transition-colors hover:bg-white/40"
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
                    <p className="mb-6 text-pink-900 leading-relaxed">{paso.desc}</p>
                    <div className="grid gap-4">
                      {paso.imgs.map((img, idx) => (
                        <img 
                          key={idx} 
                          src={img} 
                          alt={`Evidencia ${idx}`} 
                          className="rounded-lg shadow-md w-full border border-pink-100" 
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