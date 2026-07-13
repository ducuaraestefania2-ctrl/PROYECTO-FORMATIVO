function FormCreationBirth() {
  return (
    <div className="flex justify-center p-8">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">

        {/* Encabezado */}
        <div className="bg-orange-600 p-6">
          <h1 className="text-3xl font-bold text-white">
            Formulario de Nacimiento
          </h1>
          <p className="text-orange-100 mt-1">
            Registra la información del nacimiento
          </p>
        </div>

        {/* Formulario */}
        <form className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Fecha
            </label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              ID Ganado
            </label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              ID Madre
            </label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Peso (kg)
            </label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Estado
            </label>
            <select className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 outline-none">
              <option>Activo</option>
              <option>Inactivo</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Notas
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 outline-none"
            />
          </div>

          <div className="md:col-span-2 flex justify-end">
            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition"
            >
              Guardar Nacimiento
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default FormCreationBirth;