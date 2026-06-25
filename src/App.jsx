import './App.css';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-100 to-white p-4 md:p-8">
      <Navbar />
      
      <div className="max-w-6xl mx-auto py-10 flex flex-col md:flex-row gap-8">
        {/* BARRA LATERAL */}
        <aside className="w-full md:w-1/4 space-y-3 p-6 rounded-3xl border border-white/60 bg-white/40 backdrop-blur-xl shadow-xl h-fit">
          <h2 className="text-pink-900 font-bold mb-4 px-2">Navegación</h2>
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSeccionActiva(item.id)}
              className={`w-full text-left p-4 rounded-xl font-bold transition-all duration-300 ${
                seccionActiva === item.id 
                ? 'bg-pink-600 text-white shadow-lg shadow-pink-300' 
                : 'text-pink-900 hover:bg-white/60'
              }`}
            >
              {item.label}
            </button>
          ))}
        </aside>

        {/* CONTENIDO PRINCIPAL */}
        <main className="w-full md:w-3/4 p-8 rounded-3xl border border-white/60 bg-white/40 backdrop-blur-xl shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={seccionActiva}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              {seccionActiva === 'inicio' && <Inicio />}
              {seccionActiva === 'instalacion' && <Instalacion />}
              {seccionActiva === 'ad' && <ActiveDirectory />}
              {seccionActiva === 'prompts' && <Prompts />}
              {seccionActiva === 'cliente' && <ClienteDominio />}
              {seccionActiva === 'servicios' && <ServiciosRed />}
              {seccionActiva === 'gpo' && <Gpo />}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}