export default function TableResponsibles() {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-orange-700 mb-6 border-b-2 border-orange-200 pb-2 flex items-center gap-2">
        Tabla de Responsables
      </h2>

      <div className="overflow-x-auto rounded-lg border border-orange-100 shadow-sm">
        <table className="w-full text-left border-collapse bg-white text-sm text-gray-700">
          
          <thead className="bg-orange-500 text-white font-semibold uppercase text-xs tracking-wider">
            <tr>
              <th className="px-6 py-4">ID</th>
              <th className="px-6 py-4">Nombre</th>
              <th className="px-6 py-4">Apellido</th>
              <th className="px-6 py-4">Documento</th>
              <th className="px-6 py-4">Teléfono</th>
              <th className="px-6 py-4">Email</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-orange-100">
            
            <tr className="hover:bg-orange-50/50 transition-colors">
              <td className="px-6 py-4 font-medium text-orange-900">1</td>
              <td className="px-6 py-4 font-semibold text-gray-800">Juan</td>
              <td className="px-6 py-4 text-gray-600">Pérez</td>
              <td className="px-6 py-4 text-gray-500">123456789</td>
              <td className="px-6 py-4 text-gray-600">3001234567</td>
              <td className="px-6 py-4 text-gray-500">juan.perez@gmail.com</td>
            </tr>

            <tr className="hover:bg-orange-50/50 transition-colors">
              <td className="px-6 py-4 font-medium text-orange-900">2</td>
              <td className="px-6 py-4 font-semibold text-gray-800">María</td>
              <td className="px-6 py-4 text-gray-600">López</td>
              <td className="px-6 py-4 text-gray-500">987654321</td>
              <td className="px-6 py-4 text-gray-600">3019876543</td>
              <td className="px-6 py-4 text-gray-500">maria.lopez@gmail.com</td>
            </tr>

            <tr className="hover:bg-orange-50/50 transition-colors">
              <td className="px-6 py-4 font-medium text-orange-900">3</td>
              <td className="px-6 py-4 font-semibold text-gray-800">Carlos</td>
              <td className="px-6 py-4 text-gray-600">Gómez</td>
              <td className="px-6 py-4 text-gray-500">456789123</td>
              <td className="px-6 py-4 text-gray-600">3024567890</td>
              <td className="px-6 py-4 text-gray-500">carlos.gomez@gmail.com</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
}
