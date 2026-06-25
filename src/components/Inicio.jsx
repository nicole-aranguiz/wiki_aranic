import SeccionContenido from './SeccionContenido';
import { useState } from 'react';

export default function Inicio() {
  const pasos = [
    { 
      titulo: "1. Configuración de la Máquina Virtual", 
      desc: "Creé la VM SRV-DC01 en VirtualBox. Le asigné 4 GB de RAM y 50 GB de disco. Para que la red del laboratorio funcione bien y esté aislada, configuré el Adaptador 1 en modo 'Red interna' con el nombre 'redlab'.", 
      img: "/docs_aranic/img_aranic/redlab.jpg" 
    },
    { 
      titulo: "2. Instalación de Windows Server 2025", 
      desc: "Instalé la versión Standard de Windows Server 2025 (con experiencia de escritorio). Me aseguré de elegir el idioma en español desde el principio para que todo sea más fácil de configurar después.", 
      img: "/docs_aranic/img_aranic/2. Idioma.jpg" 
    },
    { 
      titulo: "3. Asignación de Nombre de Equipo", 
      desc: "Para mantener el orden, le cambié el nombre al servidor a 'SRV-DC01' directamente desde el Administrador del servidor. Así es más fácil identificarlo cuando empiece a trabajar con el dominio.", 
      img: "/docs_aranic/img_aranic/3. nombre adm servidor.jpg" 
    },
    { 
      titulo: "4. Configuración de IP Fija", 
      desc: "Le puse una IP fija (192.168.10.10) para que no cambie nunca. Configuré la máscara de subred en 255.255.255.0 y puse 127.0.0.1 como el DNS preferido, ya que este servidor será el encargado de manejar los servicios.", 
      imgs: [
  "/docs_aranic/img_aranic/4. config ip fija.jpg", 
  "/docs_aranic/img_aranic/4. resultado ip fija.jpg"] 
    },
    { 
      titulo: "5. Verificación de Firewall", 
      desc: "Revisé que el Firewall de Windows esté funcionando. Está activo por defecto, así que de momento lo dejo así para mantener la seguridad básica mientras sigo configurando el resto.", 
      img: "/docs_aranic/img_aranic/5.%20firewall%20activado.jpg" 
    }
  ];

  const [abierto, setAbierto] = useState(null);

  return (
    <SeccionContenido titulo="01. Portada y topología">
      <p className="mb-6 text-pink-700">
        Esta es la base de todo el laboratorio. Aquí documento los pasos iniciales para dejar mi servidor SRV-DC01 listo, configurado y conectado a la red del lab.
      </p>
      
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
                  {paso.img && <img src={paso.img} alt={paso.titulo} className="rounded-lg shadow-md border border-pink-200" />}
                  {paso.imgs && paso.imgs.map((img, idx) => (
                    <img key={idx} src={img} alt={`${paso.titulo} ${idx}`} className="rounded-lg shadow-md border border-pink-200" />
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