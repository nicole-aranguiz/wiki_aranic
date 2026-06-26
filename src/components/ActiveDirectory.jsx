import { useState } from 'react';
import SeccionContenido from './SeccionContenido';

export default function ActiveDirectory() {
  const [abierto, setAbierto] = useState(null);

  const pasos = [
    { 
      titulo: "8. Acceso a Consola de Administración", 
      desc: "Iniciamos la gestión de objetos del dominio accediendo a la herramienta 'Usuarios y equipos de Active Directory', disponible en el menú de Herramientas del Administrador del servidor. Esta consola es la interfaz principal donde realizaremos todas las tareas de administración de nuestro dominio.", 
      imgs: ["/img_aranic/8. Active directory.jpg"] 
    },
    { 
      titulo: "9. Creación de Unidad Organizativa (OU)", 
      desc: "Para mantener una estructura lógica y ordenada, creamos la Unidad Organizativa denominada 'Ventas'. Las OUs nos permiten agrupar usuarios y equipos para aplicar políticas de seguridad y configuración de manera más eficiente.", 
      imgs: ["/img_aranic/9. Ventas.jpg"] 
    },
    { 
      titulo: "10. Creación de Usuarios", 
      desc: "Procedimos a crear dos cuentas de usuario dentro de la OU 'Ventas'. Durante la configuración inicial, desmarcamos la opción 'el usuario debe cambiar la contraseña en el próximo inicio', asegurando así que las cuentas estén listas para las pruebas del laboratorio de inmediato.", 
      imgs: ["/img_aranic/10. desmarcar .jpg", "/img_aranic/10. usuarios creados.jpg"] 
    },
    { 
      titulo: "11. Gestión de Grupos y Pertenencia", 
      desc: "Creamos el grupo de seguridad 'G-Ventas' e incorporamos a los usuarios previamente creados. Esta práctica permite gestionar permisos y recursos compartidos a nivel de grupo, simplificando la administración de accesos en el futuro.", 
      imgs: ["/img_aranic/11. creacion grupo.jpg", "/img_aranic/11. usuario incorporado.jpg", "/img_aranic/11. comprueba miembros.jpg"] 
    }
  ];

  return (
    <SeccionContenido titulo="03. Dominio y Objetos">
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