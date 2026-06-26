import { useState } from 'react';

export default function Inicio() {
  const [abierto, setAbierto] = useState(null);

  const seccion = [
    { 
      id: 1, 
      titulo: "1. Configuración de la Máquina Virtual", 
      contenido: "Creamos la máquina virtual SRV-DC01 en VirtualBox con 4 GB de RAM y 50 GB de disco. Se configuró el adaptador de red en modo 'Red interna' con el nombre 'redlab' para mantener el entorno aislado y seguro para las pruebas.", 
      img: ["/img_aranic/redlab.jpg"] 
    },
    { 
      id: 2, 
      titulo: "2. Instalación de Windows Server 2025", 
      contenido: "Realizamos la instalación de Windows Server 2025 (versión Standard con experiencia de escritorio). Optamos por esta versión para facilitar la administración y configuración de los roles iniciales a través de la interfaz gráfica.", 
      img: ["/img_aranic/2.%20Idioma.jpg"] 
    },
    { 
      id: 3, 
      titulo: "3. Asignación de Nombre de Equipo", 
      contenido: "Renombramos el equipo como 'SRV-DC01' desde el Administrador del servidor. Esta etiqueta nos permite identificar fácilmente el servidor como nuestro controlador de dominio principal dentro de la infraestructura.", 
      img: ["/img_aranic/3.%20nombre%20adm%20servidor.jpg"] 
    },
    { 
      id: 4, 
      titulo: "4. Configuración de IP Fija", 
      contenido: "Asignamos una dirección IP estática (192.168.10.10) para asegurar que el servidor sea localizable siempre en la misma dirección. Además, configuramos el propio servidor como su DNS (127.0.0.1) para que gestione sus propias consultas de red.", 
      img: ["/img_aranic/4.%20config%20ip%20fija.jpg", "/img_aranic/4.%20resultado%20ip%20fija.jpg"] 
    },
    { 
      id: 5, 
      titulo: "5. Verificación de Firewall", 
      contenido: "Comprobamos que el Firewall de Windows se encuentra activo. Esta configuración es necesaria para proteger el sistema mientras realizamos las implementaciones y configuraciones de seguridad en el dominio.", 
      img: ["/img_aranic/5.%20firewall%20activado.jpg"] 
    },
  ];

  return (
    <div className="bg-white p-8 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-pink-900 mb-6">01. Portada y topología</h2>
      <div className="space-y-4">
        {seccion.map((item) => (
          <div key={item.id} className="border border-pink-100 rounded-xl bg-pink-50 overflow-hidden">
            <button 
              onClick={() => setAbierto(abierto === item.id ? null : item.id)}
              className="w-full p-5 text-left font-bold text-pink-900 flex justify-between items-center hover:bg-pink-100 transition-colors"
            >
              {item.titulo} <span>{abierto === item.id ? '▲' : '▼'}</span>
            </button>
            {abierto === item.id && (
              <div className="p-5 border-t border-pink-100 bg-white">
                <p className="text-pink-800 mb-4">{item.contenido}</p>
                <div className="grid gap-4">
                  {item.img.map((src, i) => (
                    <img key={i} src={src} alt="Evidencia técnica" className="rounded-lg shadow-sm border" />
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}