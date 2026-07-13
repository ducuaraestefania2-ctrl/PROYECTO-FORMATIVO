function FormCreationMortality() {
  return (
    
    <div className="flex justify-center p-6 w-full">
      
      <div className="w-full max-w-2xl bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
        
        <h2 className="text-2xl font-bold text-orange-600 mb-6">
          Creación de Mortalidad
        </h2>

        <form className="space-y-5">
          <div>
            <label htmlFor="date" className="block text-sm text-gray-700 mb-2">
              Fecha
            </label>
            <input 
              type="date" 
              id="date" 
              name="date" 
              className="w-full p-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 text-gray-700"
            />
          </div>

          <div>
            <label htmlFor="livestock_id" className="block text-sm text-gray-700 mb-2">
              ID ovino
            </label>
            <input 
              type="number" 
              id="livestock_id" 
              name="livestock_id" 
              className="w-full p-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 text-gray-700"
            />
          </div>

          <div>
            <label htmlFor="cause" className="block text-sm text-gray-700 mb-2">
              Causa
            </label>
            <input 
              type="text" 
              id="cause" 
              name="cause" 
              className="w-full p-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 text-gray-700"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm text-gray-700 mb-2">
              Descripción
            </label>
            <input 
              type="text" 
              id="description" 
              name="description" 
              className="w-full p-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 text-gray-700"
            />
          </div>

          
          <div className="pt-2">
            <button 
              type="submit" 
              className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-6 rounded-xl transition-colors cursor-pointer text-sm"
            >
              Crear Mortalidad
            </button>
          </div>
        </form>
      </div>

    </div>
  );
}

export default FormCreationMortality;
