function FormCreationMounting() {
  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md">
      <h1 className="text-2xl font-bold text-orange-600 mb-4">
        Registro de Montas
      </h1>

      <form className="space-y-3">
        <div>
          <label>Fecha</label>
          <input
            type="date"
            className="w-full border border-orange-300 rounded-lg p-2"
          />
        </div>

        <div>
          <label>ID Macho</label>
          <input
            type="number"
            className="w-full border border-orange-300 rounded-lg p-2"
          />
        </div>

        <div>
          <label>ID Hembra</label>
          <input
            type="number"
            className="w-full border border-orange-300 rounded-lg p-2"
          />
        </div>

        <div>
          <label>Resultado</label>
          <input
            type="text"
            className="w-full border border-orange-300 rounded-lg p-2"
          />
        </div>

        <div>
          <label>Notas</label>
          <input
            type="text"
            className="w-full border border-orange-300 rounded-lg p-2"
          />
        </div>

        <button
          type="submit"
          className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700"
        >
          Crear Monta
        </button>
      </form>
    </div>
  );
}

export default FormCreationMounting;