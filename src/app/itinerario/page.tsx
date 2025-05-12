"use client";

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { WeddingTimeline } from '../components/timeline/timeline';
import { BackgroundDetails } from '../components/backgroundDetails/backgroundDetails';
import { Loader } from '../components/loader/loader';

export default function Itinerary() {
  const [isGenerating, setIsGenerating] = useState(false);
  const router = useRouter();

  const handleConfirmacionClick = () => {
    setIsGenerating(true);
    setTimeout(() => {
      router.push("/ticket/563510c2-bae8-44e5-8d3e-77604e5801f6");
    }, 1500);
  };

  if (isGenerating) return <Loader />;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative flex flex-col justify-center items-center h-[100dvh] bg-transparent text-white"
    >
      <BackgroundDetails />

      <div className="font-['weddingSecondaryFont'] text-[50px] sm:text-[75px] text-center mb-6 -mt-25 lg:mt-15">
        Itinerario
      </div>

      <div className="relative z-10 w-full sm:w-[90%] max-w-3xl p-6 rounded-2xl backdrop-blur-[4px] bg-white/10 border border-white/30 shadow-xl">
        <WeddingTimeline />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleConfirmacionClick}
        className="relative z-10 w-[38%] sm:w-[60%] md:w-[45%] lg:w-[20%] p-6 backdrop-blur-[4px] bg-gradient-to-br from-yellow-100/20 via-white/20 to-yellow-200/10 shadow-2xl text-center font-['forumFont'] text-[16px] sm:text-[18px] mt-6 text-white overflow-hidden
                   bg-yellow-400/50 border-b-2 border-t-2 border-yellow-400 border-dashed font-bold cursor-pointer"
      >
        <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black rounded-full z-20 shadow-inner shadow-yellow-500 border border-dashed border-black"></div>
        <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black rounded-full z-20 shadow-inner shadow-yellow-500 border border-dashed border-black"></div>

        Obtener ticket
      </motion.div>
    </motion.div>
  );
}
