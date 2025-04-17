import "@/app/globals.css";
import "./topBar.css";

export const TopBar = () => {
    return (
        <header>

            <header>

                <div className="flex flex-col justify-center items-center text-center text-white">

                    <h1 className="text-4xl">Angélica y Edgar</h1>
                    <h3 className="text-2xl mb-4">Nuestra boda</h3>

                    <p className="text-[20px] max-w-xl">
                        El día más especial de nuestra vida llegará pronto y esperamos que nos puedas acompañar.
                        El evento se llevará a cabo en el estado de Morelos.
                    </p>

                    <div className="date-container mt-6">
                        <div className="date-event">25</div>
                        <div className="date-event">09</div>
                        <div className="date-event">2026</div>
                    </div>

                    <button className="mt-4 w-[230px] bg-white text-black font-semibold py-2 rounded-lg shadow-md hover:bg-gray-200 transition">
                        CONFIRMAR ASISTENCIA
                    </button>

                </div>
            </header>

        </header>
    );
};
