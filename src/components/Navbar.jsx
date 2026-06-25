export default function Navbar() {
  return (
    <nav className="bg-white border-b border-pink-200 p-6 shadow-sm">
      <div className="max-w-6xl mx-auto">
        <h1 
          className="text-3xl text-pink-900 text-center" 
          style={{ fontFamily: 'Pacifico, cursive' }}
        >
          Laboratorio de Windows Server
        </h1>
      </div>
    </nav>
  );
}