import "@/app/globals.css";
import "./topBar.css";

export const TopBar = () => {
    return (


        <header className="flex h-full flex-col justify-center items-center text-center text-white">

            <div className="w-full flex flex-col justify-center items-center p-1">

                <div className="font-['weddingStarlightFont'] text-[75px] sm:text-[120px]">Angélica y Edgar</div>
                <div className="font-['weddingScriptFont'] text-[60px] sm:text-[90px] mb-4">Nuestra boda</div>
                <img className="w-[120px] sm:w-[170px]" src="/media/images/rings.png" alt="" />

                <div className="w-[90%] h-[80px] sm:w-[35%] flex justify-center items-center bg-[#ffffff10] backdrop-blur-[10px] rounded-lg mt-2 mb-9">
                    <p className="text-[14px] sm:text-[18px] text-white drop-shadow-lg bg-black/20 px-3 py-1 rounded font-semibold">El día más especial de nuestra vida llegará pronto y esperamos que nos puedas acompañar.</p>
                </div>

                <div className="w-[90%] h-[80px] sm:w-[35%] sm:h-[100px] flex justify-center items-center border-2 border-white border-dashed rounded-full p-2">

                    <h3 className="text-[13px] sm:text-[22px]">El evento se llevará a cabo en el estado de Morelos</h3>
                    <img src="/media/images/morelos.svg" alt="" className="w-[75px] sm:w-[120px]"/>

                </div>

                <div className="w-[90%] sm:w-[30%] flex flex-col items-center gap-2 mt-4">

                    <div className="flex font-['palisadeFont'] text-[36px] text-white text-shadow-[#da286c] font-bold text-shadow-lg animate-pulse">
                        Reserva la fecha
                    </div>
                    <div className="flex w-[90%] h-[70px] justify-around gap-5">
                        <div className="flex justify-center items-center w-[40%] font-['weddingStarlightFont'] text-[40px] border-b-2 border-t-2">Septiembre</div>
                        <div className="flex justify-center items-center w-[20%] font-['weddingScriptFont'] text-[110px]">26</div>
                        <div className="flex justify-center items-center w-[40%] font-['weddingStarlightFont'] text-[40px] border-b-2 border-t-2">2026</div>
                    </div>

                </div>

                {/* <button className="mt-4 w-[230px] bg-white text-black font-semibold py-2 rounded-lg shadow-md hover:bg-gray-200 transition">
                    CONFIRMAR ASISTENCIA
                </button> */}

            </div>
        </header>


    );
};
