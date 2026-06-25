import { useState } from 'react'; // 1. Importamos useState
import Inicio from './components/Inicio';
import Instalacion from './components/Instalacion';
import ActiveDirectory from './components/ActiveDirectory';
import ClienteDominio from './components/ClienteDominio';
import ServiciosRed from './components/ServiciosRed';
import Gpo from './components/Gpo';
import BitacoraIA from './components/BitacoraIA';


export default function App() {
  // 2. Creamos el estado para saber qué página está activa
  const [paginaActual, setPaginaActual] = useState('Inicio');

  // Mapa de componentes
  const componentes = {
    'Inicio': <Inicio />,
    'Instalación': <Instalacion />,
    'Active Directory': <ActiveDirectory />,
    'Cliente Dominio': <ClienteDominio />,
    'Servicios Red': <ServiciosRed />,
    'GPO': <Gpo />,
    'Bitácora IA': <BitacoraIA />
  };

  return (
    <div className="min-h-screen bg-[#fff1f2] p-8">
      <header className="mb-8 pt-6">
        <h1 className="text-4xl md:text-5xl text-pink-900 text-center mb-6" style={{ fontFamily: "'Pacifico', cursive" }}>
          Laboratorio de Windows Server
        </h1>
      </header>

      <div className="flex gap-8">
<aside className="w-1/4 min-w-[250px]"> {/* Aumentamos un poco el ancho mínimo */}
  <div className="bg-white p-8 rounded-3xl shadow-lg border border-pink-100"> {/* Más padding y sombras suaves */}
    <h2 className="text-xl font-bold text-pink-900 mb-6 border-b border-pink-100 pb-2">
      Navegación
    </h2>
    <nav className="space-y-3 text-[16px]"> {/* Letra un poco más grande y más espacio */}
      {Object.keys(componentes).map((nombre, index) => (
        <p 
          key={nombre}
          onClick={() => setPaginaActual(nombre)}
          className={`p-4 rounded-xl transition-all duration-300 cursor-pointer flex items-center gap-3
            ${paginaActual === nombre 
              ? 'bg-pink-600 text-white shadow-md font-semibold' 
              : 'text-pink-900 hover:bg-pink-100 hover:scale-[1.02]'}`}
        >
          <span className="opacity-70">{String(index + 1).padStart(2, '0')}.</span> 
          {nombre}
        </p>
      ))}
    </nav>
  </div>
</aside>

        <main className="flex-1 space-y-6">
          {/* Aquí se muestra solo el componente seleccionado */}
          {componentes[paginaActual]}
        </main>
      </div>
    </div>
  );
}