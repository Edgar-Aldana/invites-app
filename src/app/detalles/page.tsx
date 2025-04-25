"use client";
import { motion } from 'framer-motion'
import { WeddingTimeline } from '../components/timeline/timeline';
import { BackgroundDetails } from '../components/backgroundDetails/backgroundDetails';
import { Background } from '../components/background/backGround';

export default function Detalles() {
  return (


    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative flex flex-col justify-center items-center h-screen bg-transparent text-white"
    >
      <BackgroundDetails />

      <div className="font-['weddingStarlightFont'] text-[50px] sm:text-[75px] text-center mb-6 -mt-10">¿Dónde y cuándo?</div>
      <div className="relative z-10 w-full sm:w-[90%] max-w-3xl p-6 rounded-2xl backdrop-blur-[4px] bg-white/10 border border-white/30 shadow-xl">
        <WeddingTimeline />
      </div>
    </motion.div>



  )
}



