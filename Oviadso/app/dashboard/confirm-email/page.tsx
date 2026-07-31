export default function ConfirmEmail() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-xl text-center">

        <div className="text-6xl mb-6">✅</div>

        <h1 className="text-4xl font-bold text-green-600 mb-4">
          ¡Correo confirmado!
        </h1>

        <p className="text-gray-600 text-lg mb-8">
          Tu cuenta fue verificada correctamente.
          <br />
          Ya puedes ingresar a <strong>OVIADSO</strong>.
        </p>

        <a
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Ir al inicio
        </a>

      </div>
    </main>
  );
}