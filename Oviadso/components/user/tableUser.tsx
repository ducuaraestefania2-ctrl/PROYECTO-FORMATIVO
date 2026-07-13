export default function TableUser() {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-orange-700 mb-6 border-b-2 border-orange-200 pb-2 flex items-center gap-2">
        Tabla de Usuarios
      </h2>

      <div className="overflow-x-auto rounded-lg border border-orange-100 shadow-sm">
        <table className="w-full text-left border-collapse bg-white text-sm text-gray-700">
          
          <thead className="bg-orange-500 text-white font-semibold uppercase text-xs tracking-wider">
            <tr>
              <th className="px-6 py-4">Username</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Role</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-orange-100">
            
            <tr className="hover:bg-orange-50/50 transition-colors">
              <td className="px-6 py-4 font-medium text-orange-900">JohnDoe</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-500">john.doe@example.com</td>
              <td className="px-6 py-4 font-semibold text-gray-800">Admin</td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-orange-100 text-orange-800">
                  Active
                </span>
              </td>
            </tr>

            <tr className="hover:bg-orange-50/50 transition-colors">
              <td className="px-6 py-4 font-medium text-orange-900">JaneSmith</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-500">jane.smith@example.com</td>
              <td className="px-6 py-4 font-semibold text-gray-800">User</td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-600">
                  Inactive
                </span>
              </td>
            </tr>

            <tr className="hover:bg-orange-50/50 transition-colors">
              <td className="px-6 py-4 font-medium text-orange-900">BobJohnson</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-500">bob.johnson@example.com</td>
              <td className="px-6 py-4 font-semibold text-gray-800">Editor</td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-orange-100 text-orange-800">
                  Active
                </span>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
}
