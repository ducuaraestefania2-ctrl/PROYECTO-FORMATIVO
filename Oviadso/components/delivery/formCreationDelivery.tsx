function FormCreationDelivery() {
  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md">
      <h1 className="text-2xl font-bold text-orange-600 mb-4">
        Crear Parto
      </h1>

      <form className="space-y-3">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
            Fecha:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="w-full border border-orange-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label htmlFor="mother_id" className="block text-sm font-medium text-gray-700 mb-1">
            ID Madre:
          </label>
          <input
            type="number"
            id="mother_id"
            name="mother_id"
            className="w-full border border-orange-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label htmlFor="number_of_offspring" className="block text-sm font-medium text-gray-700 mb-1">
            Número de Crías:
          </label>
          <input
            type="number"
            id="number_of_offspring"
            name="number_of_offspring"
            className="w-full border border-orange-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label htmlFor="type_of_birth" className="block text-sm font-medium text-gray-700 mb-1">
            Tipo de Parto:
          </label>
          <input
            type="text"
            id="type_of_birth"
            name="type_of_birth"
            className="w-full border border-orange-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label htmlFor="complications" className="block text-sm font-medium text-gray-700 mb-1">
            Complicaciones:
          </label>
          <input
            type="text"
            id="complications"
            name="complications"
            className="w-full border border-orange-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
            Notas:
          </label>
          <input
            type="text"
            id="notes"
            name="notes"
            className="w-full border border-orange-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 font-medium transition-colors"
        >
          Crear Parto
        </button>
      </form>
    </div>
  );
}

export default FormCreationDelivery;
