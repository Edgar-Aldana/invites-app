"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { BackgroundDetails } from "../components/backgroundDetails/backgroundDetails";
import { Separator } from "../components/separator/separator";
import { AnimatedText } from "../components/textShadow/textShadow";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaChurch, FaUsers, FaArrowLeft, FaArrowRight, FaCheck, FaCalendarCheck } from "react-icons/fa";


interface InvitadoData {
    id: string;
    familia: string;
    respuesta: boolean;
    asistir: boolean | null;
}





export default function Details() {
    const router = useRouter();
    const [clicked, setClicked] = useState(false);
    const [invitadoData, setInvitadoData] = useState<InvitadoData | null>(null);

    const today = new Date();
    const deadline = new Date("2025-05-10");

    const showRespondButton = invitadoData?.respuesta === false && invitadoData?.asistir === null && today < deadline;
    const showItineraryButton = invitadoData?.respuesta === true && invitadoData?.asistir === true;
    const showChangeMindButton = invitadoData?.respuesta === true && invitadoData?.asistir === false && today < deadline;

    const handleConfirmacionClick = () => {
        setClicked(true);
        setTimeout(() => router.push("/asistencia"), 600);
    };


    useEffect(() => {

        setInvitadoData({
            id: "fam123",
            familia: "Familia Zarazúa Cruz",
            respuesta: false,
            asistir: null
        });

    }, []);


    return (

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full min-h-screen bg-transparent flex flex-col items-center px-4 py-8"
        >
            <BackgroundDetails />

            <div className="w-full max-w-7xl flex flex-col items-center rounded-2xl text-center mb-10 p-4 backdrop-blur-md bg-black/35 border border-white/30 shadow-xl">


                <div className="text-4xl sm:text-6xl md:text-7xl font-['weddingSecondaryFont'] text-white">
                    ¿Cuándo y dónde?
                </div>

                <Separator width="32" height="0.5" color="yellow" />
                <h3 className="text-white text-sm sm:text-lg uppercase tracking-widest">26 de septiembre de 2026</h3>
                <h3 className="text-[#bbdb93] italic text-xs sm:text-lg uppercase tracking-widest">El gran día se acerca</h3>
                <Separator marginDown="4" width="32" height="0.5" color="yellow" />


                <div className="font-['forumFont'] text-white max-w-2xl mx-auto text-base sm:text-xl mb-10">
                    <AnimatedText textSizeClasses="text-3xl sm:text-5xl" color="#ffffff" shadowColor="#ffe600">
                        {invitadoData?.familia}
                    </AnimatedText>
                    Nos encantaría que nos acompañes en nuestra boda y disfrutes de una celebración llena de tradición y amor.
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-12 w-full max-w-5xl place-items-center mb-10">


                    <div className="w-full sm:w-[90%] flex items-center justify-between p-4 border-2 border-dashed border-[#bbdb93] rounded-xl bg-black/25">
                        <span className="font-['forumFont'] text-white text-base sm:text-xl">
                            El evento se llevará a cabo en la ciudad de{" "}
                            <span className="font-bold text-[#bbdb93]">Cuautla, Morelos</span>
                        </span>
                        <img src="/media/images/morelos.svg" alt="Morelos" className="w-[40px] sm:w-[80px] ml-4" />
                    </div>


                    <div className="flex flex-col items-center text-center w-full sm:w-[90%]">
                        <div className="relative w-full h-64 sm:h-80 md:h-96">
                            <Image
                                src="/media/images/wedding-garden.jpeg"
                                alt="Reception"
                                fill
                                className="object-cover rounded-md"
                            />
                        </div>
                        <span className="font-['forumFont'] text-xl sm:text-2xl text-white mt-4">Jardín Antigua Fábrica de Hielo</span>
                        <span className="font-['forumFont'] text-xl sm:text-2xl text-white">"El Molino"</span>


                        <a
                            href="https://www.google.com/maps/search/?api=1&query=Jardin+Antigua+Fabrica+de+Hielo+Cuautla+Morelos"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-[60%] flex items-center justify-center font-['forumFont'] bg-yellow-400 text-lg sm:text-2xl mt-4 rounded-md p-2 border-2 border-dashed border-red-400 hover:bg-yellow-300 transition"
                        >
                            <FaMapMarkerAlt className="mr-2 text-red-600" />
                            Ver ubicación
                        </a>


                        <div className="flex flex-col w-[90%] font-['forumFont'] text-lg sm:text-xl text-white mt-5 rounded-md p-4 border border-white bg-white/25">
                            <div className="mb-2 flex justify-center gap-2 items-center">
                                <FaChurch className="mr-2 text-white" />
                                <span>Ceremonia:</span>
                                <span className="font-bold text-[#bbdb93]">6:00 pm</span>
                            </div>

                            <div className="mb-2 flex justify-center gap-2 items-center">
                                <FaUsers className="mr-2 text-white" />
                                <span>Recepción:</span>
                                <span className="font-bold text-[#bbdb93]">7:00 pm</span>
                            </div>
                        </div>
                    </div>
                </div>




                {showRespondButton || showChangeMindButton ? (
                    <motion.div
                        onClick={handleConfirmacionClick}
                        whileTap={{ scale: 0.95 }}
                        className="flex w-[80%] sm:w-[65%] md:w-[70%] lg:w-[30%] justify-center items-center gap-2 h-14 
                   cursor-pointer rounded-md shadow-2xl text-white font-semibold 
                   bg-gradient-to-r from-black/50 via-yellow-300/40 to-black/50 
                   hover:via-yellow-300/50 hover:shadow-xl hover:scale-105 duration-300 
                   backdrop-blur-md border border-white/35 mb-5"
                    >
                        {showChangeMindButton ? "Cambiar de opinión" : "Responder a evento"}
                        <FaCalendarCheck className="ml-2 text-yellow-400" />
                    </motion.div>
                ) : showItineraryButton ? (
                    <motion.div
                        onClick={() => router.push("/itinerario")}
                        whileTap={{ scale: 0.95 }}
                        className="flex w-[80%] sm:w-[65%] md:w-[70%] lg:w-[30%] justify-center items-center gap-2 h-14 
                   cursor-pointer rounded-md shadow-2xl text-white font-semibold 
                   bg-gradient-to-r from-black/50 via-[#bbdb93]/60 to-black/50 
                   hover:via-green-300/50 hover:shadow-xl hover:scale-105 duration-300 
                   backdrop-blur-md border border-white/35 mb-5"
                    >
                        Ver itinerario
                        <FaCalendarCheck className="ml-2 text-[#bbdb93]" />
                    </motion.div>
                ) : null}






                <motion.div className="text-[#ff9eb1] hover:text-[#ff7a93] transition-colors duration-300 flex items-center justify-center cursor-pointer"
                    onClick={() => router.push("/")}
                    whileTap={{ scale: 0.95 }}
                >
                    <FaArrowLeft className="mr-2 text-pink-300" />
                    Volver a página principal

                </motion.div>


            </div>
        </motion.div>
    );
}
