export default function TableMounting() {
  return (
    <div className="mt-10 bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-orange-600 mb-4">
        Tabla de Montas
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-orange-600 text-white">
              <th className="p-3">ID</th>
              <th className="p-3">Fecha</th>
              <th className="p-3">ID Macho</th>
              <th className="p-3">ID Hembra</th>
              <th className="p-3">Resultado</th>
              <th className="p-3">Notas</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b hover:bg-orange-50">
              <td className="p-3">1</td>
              <td className="p-3">09/06/2026</td>
              <td className="p-3">101</td>
              <td className="p-3">102</td>
              <td className="p-3 text-green-600 font-semibold">
                Exitoso
              </td>
              <td className="p-3">
                Montaje realizado correctamente
              </td>
            </tr>

            <tr className="border-b hover:bg-orange-50">
              <td className="p-3">2</td>
              <td className="p-3">08/06/2026</td>
              <td className="p-3">103</td>
              <td className="p-3">104</td>
              <td className="p-3 text-yellow-600 font-semibold">
                Pendiente
              </td>
              <td className="p-3">
                En seguimiento
              </td>
            </tr>

            <tr className="hover:bg-orange-50">
              <td className="p-3">3</td>
              <td className="p-3">07/06/2026</td>
              <td className="p-3">105</td>
              <td className="p-3">106</td>
              <td className="p-3 text-red-600 font-semibold">
                No exitoso
              </td>
              <td className="p-3">
                Sin gestación
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}