"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { BackgroundDetails } from "../components/backgroundDetails/backgroundDetails";
import { Separator } from "../components/separator/separator";
import { AnimatedText } from "../components/textShadow/textShadow";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Details() {
    const router = useRouter();
    const [clicked, setClicked] = useState(false);

    const handleConfirmacionClick = () => {
        setClicked(true);
        setTimeout(() => router.push("/asistencia"), 600);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full min-h-screen bg-transparent flex flex-col items-center">

            <BackgroundDetails />

            <div className="w-full sm:w-[80%] flex flex-col items-center p-4 rounded-2xl text-center mb-10 backdrop-blur-[4px] bg-black/35 border border-white/30 shadow-xl">

                <div className="text-[54px] sm:text-[70px] md:text-[80px] font-['weddingSecondaryFont'] text-white">¿Cuando y dónde?</div>

                <Separator width="32" height="0.5" color="yellow" />
                    <h3 className="text-white tracking-widest uppercase text-lg sm:text-lg">26 de septiembre de 2026</h3>
                    <h3 className="text-[#bbdb93] italic tracking-widest uppercase text-xs sm:text-lg">El gran día se acerca</h3>
                <Separator marginDown="4" width="32" height="0.5" color="yellow" />

                <div className="font-['forumFont'] text-white max-w-xl mx-auto text-md sm:text-[26px] sm:mb-20">
                    <AnimatedText textSizeClasses="text-[40px] sm:text-[60px]" color="#ffffff" shadowColor="#ffe600">Familia o Invitado</AnimatedText>
                    Nos encantaría que nos acompañen en nuestra boda y disfrutes de una celebración llena de tradición y amor
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl">

                    <div className="w-[95%] h-[60px] sm:w-[80%] sm:h-[100px] flex justify-center items-center p-2 mt-5 sm:my-8">

                        <div className="font-['forumFont'] text-white text-[16px] sm:text-[26px]">

                            El evento se llevará a cabo en la ciudad de
                            <h3 className="text-[#bbdb93] font-['palisadeFont'] font-bold text-[10px] sm:text-[22px]">Cuautla, Morelos</h3>

                        </div>

                        <img src="/media/images/morelos.svg" alt="" className="w-[55px] sm:w-[120px] ml-6" />

                    </div>


                    <div className="flex flex-col items-center text-center">
                        <div className="relative w-full h-64">
                            <Image
                                src="/media/images/wedding-garden.jpeg"
                                alt="Reception"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-md"
                            />
                        </div>
                        <h2 className="font-['forumFont'] text-2xl text-white mt-5">Jardin Antigua Fabrica de Hielo "El Molino"</h2>
                        <p className="text-yellow-300 mt-2">Cordoba No. 111, Colonia Centro,
                            <br />Cuautla, Morelos.</p>
                        <p className="text-green-200 mt-1">Ceremonia - 05:00PM</p>
                        <p className="text-green-200 mt-1">Recepción - 07:00PM</p>
                    </div>
                </div>

                <div className="mt-10 mb-6">
                    <motion.button 
                        onClick={handleConfirmacionClick}
                        whileTap={{ scale: 0.95 }}
                        className="w-[250px] sm:w-[300px] flex justify-center items-center gap-2 h-14 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-[linear-gradient(to_right,rgba(0,0,0,0.5),rgba(255,215,0,0.4),rgba(0,0,0,0.5))] hover:bg-[linear-gradient(to_right,rgba(0,0,0,0.6),rgba(255,215,0,0.5),rgba(0,0,0,0.6))] hover:shadow-xl hover:shadow-yellow-400 hover:scale-105 duration-300 backdrop-blur-md border border-white/35"
                    >
                        Confirmar Asistencia
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}