export default function SeccionContenido({ titulo, children }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-pink-100">
      <h2 className="text-3xl font-bold text-pink-900 mb-6">{titulo}</h2>
      <div className="text-pink-800 space-y-4">
        {children}
      </div>
    </div>
  );
}