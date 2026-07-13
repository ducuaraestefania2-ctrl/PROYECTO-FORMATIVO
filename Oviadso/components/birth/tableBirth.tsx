export default function TableBirth() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-green-700 mb-6">
        Tabla de Nacimientos
      </h2>

      <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200">
        <table className="w-full bg-white">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="px-4 py-3 text-left">ID</th>
              <th className="px-4 py-3 text-left">Fecha</th>
              <th className="px-4 py-3 text-left">ID ovino</th>
              <th className="px-4 py-3 text-left">ID Madre</th>
              <th className="px-4 py-3 text-left">Peso</th>
              <th className="px-4 py-3 text-left">Estado</th>
              <th className="px-4 py-3 text-left">Notas</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b hover:bg-gray-100 transition">
              <td className="px-4 py-3">1</td>
              <td className="px-4 py-3">09/06/2026</td>
              <td className="px-4 py-3">201</td>
              <td className="px-4 py-3">101</td>
              <td className="px-4 py-3">4.5 kg</td>
              <td className="px-4 py-3">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  Activo
                </span>
              </td>
              <td className="px-4 py-3">Nacimiento normal</td>
            </tr>

            <tr className="border-b hover:bg-gray-100 transition">
              <td className="px-4 py-3">2</td>
              <td className="px-4 py-3">08/06/2026</td>
              <td className="px-4 py-3">202</td>
              <td className="px-4 py-3">102</td>
              <td className="px-4 py-3">5 kg</td>
              <td className="px-4 py-3">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  Activo
                </span>
              </td>
              <td className="px-4 py-3">Cría saludable</td>
            </tr>

            <tr className="hover:bg-gray-100 transition">
              <td className="px-4 py-3">3</td>
              <td className="px-4 py-3">07/06/2026</td>
              <td className="px-4 py-3">203</td>
              <td className="px-4 py-3">103</td>
              <td className="px-4 py-3">3.8 kg</td>
              <td className="px-4 py-3">
                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                  Inactivo
                </span>
              </td>
              <td className="px-4 py-3">Revisión requerida</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}