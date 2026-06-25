import { useState } from 'react';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import Instalacion from './components/Instalacion';
import ActiveDirectory from './components/ActiveDirectory';
import Prompts from './components/Prompts';
import ClienteDominio from './components/ClienteDominio'; 
import ServiciosRed from './components/ServiciosRed';
import Gpo from './components/Gpo';



export default function App() {
  const [seccionActiva, setSeccionActiva] = useState('inicio');

  // Lista de secciones para generar el menú automáticamente
  const menuItems = [
    { id: 'inicio', label: '1. Inicio' },
    { id: 'instalacion', label: '2. Instalación' },
    { id: 'ad', label: '3. Active Directory' },
    { id: 'cliente', label: '4. Cliente Dominio' },
    { id: 'servicios', label: '5. Servicios Red' },
    { id: 'gpo', label: '6. GPO' },
    { id: 'prompts', label: '7. Bitácora IA' },
  ];

  return (
    <div className="bg-pink-50 min-h-screen text-pink-900">
      <Navbar />
      
      <div className="flex max-w-6xl mx-auto py-10 px-6 gap-8">
        {/* BARRA LATERAL IZQUIERDA */}
        <aside className="w-1/4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSeccionActiva(item.id)}
              className={`w-full text-left p-4 rounded-xl font-bold transition duration-200 ${
                seccionActiva === item.id 
                ? 'bg-pink-600 text-white shadow-md' 
                : 'bg-white hover:bg-pink-100 text-pink-900 border border-pink-200'
              }`}
            >
              {item.label}
            </button>
          ))}
        </aside>

{/* ÁREA DE CONTENIDO A LA DERECHA */}
        <main className="w-3/4">
          {seccionActiva === 'inicio' && <Inicio />}
          {seccionActiva === 'instalacion' && <Instalacion />}
          {seccionActiva === 'ad' && <ActiveDirectory />}
          {seccionActiva === 'prompts' && <Prompts />}
          {seccionActiva === 'cliente' && <ClienteDominio />}
          {seccionActiva === 'servicios' && <ServiciosRed />}
          {seccionActiva === 'gpo' && <Gpo />}

        </main>
      </div>
    </div>
  );
}