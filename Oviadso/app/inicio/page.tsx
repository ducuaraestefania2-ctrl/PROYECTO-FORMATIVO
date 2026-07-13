import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
export default function App() {
    return (
        <>
            <NavBar />

            <main className="w-full px-10 py-16 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">

                <div className="max-w-7xl mx-auto flex items-center justify-between gap-10">

                    {/* TEXTO */}
                    <div className="max-w-xl">
                        <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Crea experiencias web modernas
                        </h1>

                        <p className="text-lg text-gray-700">
                            Aprende a construir interfaces rápidas, elegantes y totalmente responsivas utilizando Next.js y Tailwind CSS.
                        </p>
                    </div>

                    {/* IMAGEN */}
                    <div>
                        <img
                            src="/ovi1.jpeg"
                            alt="Imagen"
                            className="w-[300px] h-[300px] object-cover border"
                        />
                    </div>

                </div>

            </main>

            <Footer />
        </>
    );
}