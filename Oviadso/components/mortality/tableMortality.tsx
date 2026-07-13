export default function TableMortality() {
  return (
    <div className="mt-10 bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-orange-600 mb-4">
        Tabla de Mortalidades
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-orange-600 text-white text-left">
              <th className="p-3">ID</th>
              <th className="p-3">Fecha</th>
              <th className="p-3">ID Ganado</th>
              <th className="p-3">Causa</th>
              <th className="p-3">Descripción</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b hover:bg-orange-50">
              <td className="p-3">1</td>
              <td className="p-3">09/06/2026</td>
              <td className="p-3">101</td>
              <td className="p-3 font-semibold text-gray-700">Enfermedad</td>
              <td className="p-3 text-gray-600">Problema respiratorio</td>
            </tr>

            <tr className="border-b hover:bg-orange-50">
              <td className="p-3">2</td>
              <td className="p-3">08/06/2026</td>
              <td className="p-3">102</td>
              <td className="p-3 font-semibold text-gray-700">Accidente</td>
              <td className="p-3 text-gray-600">Lesión grave</td>
            </tr>

            <tr className="hover:bg-orange-50">
              <td className="p-3">3</td>
              <td className="p-3">07/06/2026</td>
              <td className="p-3">103</td>
              <td className="p-3 font-semibold text-gray-700">Desconocida</td>
              <td className="p-3 text-gray-600">Sin información adicional</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
