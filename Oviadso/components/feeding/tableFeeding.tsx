export default function TableFeeding() {
  return (
    <div className="mt-10 bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
      <h2 className="text-2xl font-bold text-orange-600 mb-4">
        Tabla de Alimentación
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-orange-600 text-white text-left">
              <th className="p-3">ID</th>
              <th className="p-3">Fecha</th>
              <th className="p-3">ID ovino</th>
              <th className="p-3">Tipo de Alimento</th>
              <th className="p-3">Cantidad</th>
              <th className="p-3">Notas</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b hover:bg-orange-50 transition-colors">
              <td className="p-3 text-gray-700">1</td>
              <td className="p-3 text-gray-600">09/06/2026</td>
              <td className="p-3 text-gray-600">101</td>
              <td className="p-3 font-semibold text-gray-700">Pasto</td>
              <td className="p-3 text-gray-600">5 kg</td>
              <td className="p-3 text-gray-500 italic">Alimentación diaria</td>
            </tr>

            <tr className="border-b hover:bg-orange-50 transition-colors">
              <td className="p-3 text-gray-700">2</td>
              <td className="p-3 text-gray-600">08/06/2026</td>
              <td className="p-3 text-gray-600">102</td>
              <td className="p-3 font-semibold text-gray-700">Concentrado</td>
              <td className="p-3 text-gray-600">3 kg</td>
              <td className="p-3 text-gray-500 italic">Complemento nutricional</td>
            </tr>

            <tr className="hover:bg-orange-50 transition-colors">
              <td className="p-3 text-gray-700">3</td>
              <td className="p-3 text-gray-600">07/06/2026</td>
              <td className="p-3 text-gray-600">103</td>
              <td className="p-3 font-semibold text-gray-700">Heno</td>
              <td className="p-3 text-gray-600">4 kg</td>
              <td className="p-3 text-gray-500 italic">Buena aceptación</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
