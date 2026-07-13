function FormCreationResponsibles() {
  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md">
      <h1 className="text-2xl font-bold text-orange-600 mb-4">
        Crear Responsable
      </h1>

      <form className="space-y-3">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border border-orange-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-1">
            Apellido:
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            className="w-full border border-orange-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label htmlFor="document" className="block text-sm font-medium text-gray-700 mb-1">
            Documento:
          </label>
          <input
            type="text"
            id="document"
            name="document"
            className="w-full border border-orange-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Teléfono:
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            className="w-full border border-orange-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border border-orange-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 font-medium transition-colors"
        >
          Crear Responsable
        </button>
      </form>
    </div>
  );
}

export default FormCreationResponsibles;
