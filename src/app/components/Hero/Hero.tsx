"use client";
import "@/app/globals.css";
import "./Hero.css";
import Falling from "@/app/components/falling/falling";
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useState } from "react";

export const Hero = () => {

    const router = useRouter();
    const [clicked, setClicked] = useState(false);

    return (

        <motion.div className="@container min-h-full flex justify-center items-center mx-auto p-8"
            initial={{ y: 0, opacity: 1 }}
            animate={clicked ? { x: "-100vw", opacity: 0 } : { y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}>

            <img src="/media/images/bugambilia.png" alt="" className="w-45 -top-5 -right-10 fixed scale-x-[-1]"></img>
            <img src="/media/images/bugambilia.png" alt="" className="w-45 -top-5 -left-10 fixed"></img>

            <Falling />

            <div className="w-full flex flex-col justify-center items-center gap-4 px-2 py-10">

                <div className="text-fluid font-sacramento text-pink-500 font-bold">
                    Angélica y Edgar
                </div>


                <div className="text-xl sm:text-2xl md:text-3xl font-['forumFont'] text-green-700">
                    Nuestra boda
                </div>


                <div className="w-1/3 sm:w-1/6 lg:w-1/8">
                    <img src="/media/images/rings-sunflower.png" alt="Anillos" />
                </div>


                <div className="max-w-md text-center text-base sm:text-lg md:text-xl font-['forumFont']">
                    El día más especial de nuestra vida llegará pronto y esperamos que nos puedas acompañar.
                </div>


                <div className="font-['palisadeFont'] text-fluid text-black text-shadow-pink-500 text-shadow-lg animate-pulse">
                    Reserva la fecha
                </div>


                <div className="w-[80%] sm:w-1/2 lg:w-1/4 invite gap-2 text-xl md:text-2xl lg:text-4xl font-['forumFont']">

                    <span>26</span>
                    <span className="font-semibold border-b border-t">Septiembre</span>
                    <span>2026</span>

                </div>

                <motion.div
                    onClick={() => {
                        setClicked(true)
                        setTimeout(() => router.push("/detalles"), 600)
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex justify-center items-center font-['oswaldFont'] text-white bg-purple-500 rounded-xl shadow-lg  mt-2 gap-2 px-12 py-4"
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

        </motion.div >

    );
};