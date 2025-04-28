"use client";
import "@/app/globals.css";
import "./topBar.css";
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useState } from "react";

export const TopBar = () => {

    const router = useRouter();
    const [clicked, setClicked] = useState(false);

    return (

        <motion.header className="flex h-full flex-col justify-center items-center text-center text-white"
            initial={{ y: 0, opacity: 1 }}
            animate={clicked ? { y: "-100vh", opacity: 0 } : { y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}>

            <div className="w-full flex flex-col justify-center items-center">

                <div className="font-['weddingStarlightFont'] text-[75px] sm:text-[120px]">Angélica y Edgar</div>
                <div className="font-['weddingScriptFont'] text-[60px] sm:text-[90px]">Nuestra boda</div>
                <img className="w-[160px] sm:w-[180px]" src="/media/images/rings-sunflower.png" alt="" />

                <div className="w-[90%] h-[80px] sm:w-[35%] flex justify-center items-center bg-[#ffffff10] backdrop-blur-[10px] rounded-lg -mt-4 mb-4">
                    <p className="text-[13px] sm:text-[18px] text-white drop-shadow-lg bg-black/20 px-3 py-1 rounded font-semibold">El día más especial de nuestra vida llegará pronto y esperamos que nos puedas acompañar.</p>
                </div>


                <div className="w-[90%] sm:w-[30%] flex flex-col items-center gap-2">

                    <div className="flex font-['palisadeFont'] text-[36px] text-white text-shadow-[#da286c] font-bold text-shadow-lg animate-pulse -mt-2 mb-5">
                        Reserva la fecha
                    </div>
                    <div className="flex w-[90%] h-[70px] justify-around gap-5 mb-6">
                        <div className="flex justify-center items-center w-[40%] font-['weddingStarlightFont'] text-[40px] border-b-2 border-t-2">Septiembre</div>
                        <div className="flex justify-center items-center w-[20%] font-['weddingScriptFont'] text-[110px]">26</div>
                        <div className="flex justify-center items-center w-[40%] font-['weddingStarlightFont'] text-[40px] border-b-2 border-t-2">2026</div>
                    </div>
                </div>


                
                <motion.div
                    onClick={() => {
                        setClicked(true)
                        setTimeout(() => router.push("/detalles"), 600) // Espera a que se complete la animación
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-[50%] sm:w-[20%] flex justify-center items-center gap-2 h-10 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-[linear-gradient(to_right,rgba(0,0,0,0.5),rgba(255,215,0,0.4),rgba(0,0,0,0.5))] hover:bg-[linear-gradient(to_right,rgba(0,0,0,0.6),rgba(255,215,0,0.5),rgba(0,0,0,0.6))] hover:shadow-xl hover:shadow-yellow-400 hover:scale-105 duration-300 mt-4 backdrop-blur-md border border-white/35"
                >
                    Más detalles
                    <svg
                        className="w-5 h-5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                        ></path>
                    </svg>
                </motion.div>


            </div>
        </motion.header>

    );
};