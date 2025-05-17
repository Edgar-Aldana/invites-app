"use client";

import { Suspense } from "react";
import { Background } from "./components/background/backGround";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  return (
    <Suspense fallback={<div className="w-full h-screen flex items-center justify-center bg-black text-white">Cargando...</div>}>
      <div className="w-full h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <Background />
        
        <div className="z-10 text-center p-6 backdrop-blur-sm bg-black/40 rounded-xl border border-white/20 shadow-xl max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[40px] font-['weddingSecondaryFont'] text-white mb-4">Página no encontrada</h2>
            
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent my-4"></div>
            
            <p className="text-white/90 mb-6 font-['forumFont'] text-lg">
              Lo sentimos, la página que buscas no existe o ha sido movida.
            </p>
            
            <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-[#bbdb93]/80 hover:bg-[#bbdb93] text-black rounded-full transition-all duration-300 font-medium">
              <FaArrowLeft />
              Volver al inicio
            </Link>
          </motion.div>
        </div>
      </div>
    </Suspense>
  );
}