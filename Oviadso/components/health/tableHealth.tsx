export default function TableHealth() {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-orange-700 mb-6 border-b-2 border-orange-200 pb-2 flex items-center gap-2">
        Tabla de Sanidad
      </h2>

      <div className="overflow-x-auto rounded-lg border border-orange-100 shadow-sm">
        <table className="w-full text-left border-collapse bg-white text-sm text-gray-700">
          
          <thead className="bg-orange-500 text-white font-semibold uppercase text-xs tracking-wider">
            <tr>
              <th className="px-6 py-4">ID</th>
              <th className="px-6 py-4">Fecha</th>
              <th className="px-6 py-4">ID ovino</th>
              <th className="px-6 py-4">Diagnóstico</th>
              <th className="px-6 py-4">Tratamiento</th>
              <th className="px-6 py-4">Observaciones</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-orange-100">
            
            <tr className="hover:bg-orange-50/50 transition-colors">
              <td className="px-6 py-4 font-medium text-orange-900">1</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-500">09/06/2026</td>
              <td className="px-6 py-4 font-semibold text-gray-800">101</td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-orange-100 text-orange-800">
                  Fiebre
                </span>
              </td>
              <td className="px-6 py-4 text-gray-600">Medicamento veterinario</td>
              <td className="px-6 py-4 text-gray-500 italic">Revisión en 7 días</td>
            </tr>

            <tr className="hover:bg-orange-50/50 transition-colors">
              <td className="px-6 py-4 font-medium text-orange-900">2</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-500">08/06/2026</td>
              <td className="px-6 py-4 font-semibold text-gray-800">102</td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-orange-100 text-orange-800">
                  Infección
                </span>
              </td>
              <td className="px-6 py-4 text-gray-600">Antibiótico</td>
              <td className="px-6 py-4 text-gray-500 italic">Mejoría del animal</td>
            </tr>

            <tr className="hover:bg-orange-50/50 transition-colors">
              <td className="px-6 py-4 font-medium text-orange-900">3</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-500">07/06/2026</td>
              <td className="px-6 py-4 font-semibold text-gray-800">103</td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-orange-100 text-orange-800">
                  Herida
                </span>
              </td>
              <td className="px-6 py-4 text-gray-600">Limpieza y curación</td>
              <td className="px-6 py-4 text-gray-500 italic">Control veterinario</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
}
