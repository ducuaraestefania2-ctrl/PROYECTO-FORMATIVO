export default function TableOvine() {
  return (
    <div className="mt-10 bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-orange-600 mb-4">
        Tabla de Ovinos
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-orange-600 text-white">
              <th className="p-3">ID</th>
              <th className="p-3">Etiqueta</th>
              <th className="p-3">Raza</th>
              <th className="p-3">Sexo</th>
              <th className="p-3">Fecha Nacimiento</th>
              <th className="p-3">Peso</th>
              <th className="p-3">Estado</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b hover:bg-orange-50">
              <td className="p-3">1</td>
              <td className="p-3">OV-001</td>
              <td className="p-3">Merino</td>
              <td className="p-3">Macho</td>
              <td className="p-3">10/01/2026</td>
              <td className="p-3">45 kg</td>
              <td className="p-3 text-green-600 font-semibold">Activo</td>
            </tr>

            <tr className="border-b hover:bg-orange-50">
              <td className="p-3">2</td>
              <td className="p-3">OV-002</td>
              <td className="p-3">Blackface</td>
              <td className="p-3">Hembra</td>
              <td className="p-3">15/02/2026</td>
              <td className="p-3">40 kg</td>
              <td className="p-3 text-green-600 font-semibold">Activo</td>
            </tr>

            <tr className="hover:bg-orange-50">
              <td className="p-3">3</td>
              <td className="p-3">OV-003</td>
              <td className="p-3">Dorper</td>
              <td className="p-3">Macho</td>
              <td className="p-3">20/03/2026</td>
              <td className="p-3">50 kg</td>
              <td className="p-3 text-red-600 font-semibold">Inactivo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}