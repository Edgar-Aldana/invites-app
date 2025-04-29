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

        <motion.header className="flex min-h-100vh text-center text-white p-4"
            initial={{ y: 0, opacity: 1 }}
            animate={clicked ? { y: "-100vh", opacity: 0 } : { y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}>

            <div className="w-full h-[88vh] lg:h-[92vh] flex flex-col items-center justify-around">

                <div className="w-full px-2 sm:w-[60%] md:w-[50%] lg:w-[35%] flex items-center justify-center font-['weddingStarlightFont'] text-[60px] sm:text-[72px] md:text-[82px] leading-tight break-words">
                    Angélica y Edgar
                </div>

                <div className="w-full px-2 sm:w-[60%] md:w-[50%] lg:w-[35%] flex items-center justify-center font-['weddingScriptFont'] text-[50px] sm:text-[55px] md:text-[65px] leading-tight break-words">
                    Nuestra boda
                </div>


                <div className="max-w-[140px] h-auto object-contain">
                    <img src="/media/images/rings-sunflower.png" alt="Anillos" />
                </div>


                <div className="flex flex-col items-center justify-center w-full h-[10%] sm:w-[60%] lg:w-[35%] sm:h-[15%] font-['brillantFont'] font-semibold bg-[#ffffff10] backdrop-blur-[10px] rounded-lg text-[13px] sm:text-[16px] text-white drop-shadow-lg bg-black/20 px-3 py-1 rounded font-semibold">
                    El día más especial de nuestra vida llegará pronto y esperamos que nos puedas acompañar.
                </div>


                <div className="w-full h-[40%] sm:w-[60%] md:w-[50%] lg:w-[35%] flex flex-col items-center justify-center gap-[10%] lg:gap-[15%]">

                    <div className="flex font-['palisadeFont'] text-[40px] text-white text-shadow-[#da286c] font-bold text-shadow-lg animate-pulse">
                        Reserva la fecha
                    </div>


                    <div className="flex w-[80%] h-[70px] justify-center gap-8">
                        <div className="flex justify-center items-center w-[45%] font-['weddingStarlightFont'] text-[40px] border-b-2 border-t-2">Septiembre</div>
                        <div className="flex justify-center items-center w-[10%] font-['weddingScriptFont'] text-[110px]">26</div>
                        <div className="flex justify-center items-center w-[45%] font-['weddingStarlightFont'] text-[40px] border-b-2 border-t-2">2026</div>
                    </div>


                    <motion.div
                        onClick={() => {
                            setClicked(true)
                            setTimeout(() => router.push("/detalles"), 600)
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="w-[60%] sm:w-[65%] md:w-[70%] lg:w-[75%] flex justify-center items-center gap-2 h-14 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-[linear-gradient(to_right,rgba(0,0,0,0.5),rgba(255,215,0,0.4),rgba(0,0,0,0.5))] hover:bg-[linear-gradient(to_right,rgba(0,0,0,0.6),rgba(255,215,0,0.5),rgba(0,0,0,0.6))] hover:shadow-xl hover:shadow-yellow-400 hover:scale-105 duration-300 backdrop-blur-md border border-white/35"
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




            </div>

        </motion.header>

    );
};