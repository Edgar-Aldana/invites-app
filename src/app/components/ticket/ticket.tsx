"use client";

import { Piano } from "lucide-react";
import PianoCard from "../pianoCard/pianoCard";

interface TicketCardProps {
  mesa: string;
  familia: string;
  integrantes: number;
}


export default function TicketCard({ mesa, familia, integrantes }: TicketCardProps) {
  return (
    <div
      className="relative w-full lg:w-[65%] flex justify-center h-[90vh]
        bg-black text-white rounded-xl shadow-black
        pt-5 lg:p-15 overflow-hidden lg:overflow-visible"
    >

      <img
        src="/media/images/sunflower-frame-3.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0 scale-[1.4] lg:scale-[1.3]"
      />


      <div className="relative z-10 flex w-full lg:w-[75%] h-full flex-col justify-center gap-4 sm:gap-7 lg:gap-6 items-center 
                      bg-black/10 rounded-2xl shadow-black">


        {/* <div className="relative p-[3px] rounded-lg bg-gradient-to-r from-[#bbdb93] via-[#fe7d00] via-[#5b1101] to-[#ffe600] drop-shadow-white drop-shadow-lg">
          <div className="rounded-lg bg-black/90 backdrop-blur-[10px] text-white text-2xl lg:text-3xl font-bold text-white font-['forumFont'] p-4">
          Mesa {mesa}
          </div>
        </div> */}

        <div className="w-[48%] h-[15%] lg:w-full lg:h-[20%] flex justify-center">
          
          <PianoCard texto={`${mesa}`} className="w-full h-full border"/>
          
        </div>
        
        

        <div className="w-full text-[50px] text-center sm:text-[55px] lg:text-[60px] text-white font-['weddingSecondaryFont'] z-10 drop-shadow-lg drop-shadow-white">
          Nuestra Boda
        </div>

        <div className="flex flex-col w-full text-[50px] text-center sm:text-[55px] lg:text-[60px] text-white font-['weddingScriptFont']">
          <span> A y E</span>
          <span className="font-['brillantFont'] text-[22px] font-semibold text-[#bbdb93]"> <br />26/09/2026</span>

          <img
            src="/media/images/butterfly.png"
            alt=""
            className="absolute w-[28vw] max-w-[200px] h-auto top-[9%] -left-[3%] sm:w-[15vw] sm:top-[3%] sm:left-[0%]  scale-x-[-1]"
          />


          <img
            src="/media/images/butterfly.png"
            alt=""
            className="absolute w-[32vw] max-w-[200px] h-auto bottom-[55%] right-[3%] sm:w-[15vw] sm:bottom-[55%] sm:right-[2%]"
          />


          <img
            src="/media/images/butterfly-golden.png"
            alt=""
            className="absolute w-[32vw] max-w-[220px] h-auto bottom-[36%] sm:bottom-[25%] left-[0%] rotate-[45deg]"
          />


          <img
            src="/media/images/butterfly-golden-2.png"
            alt=""
            className="absolute w-[18vw] max-w-[120px] h-auto bottom-[28%] lg:bottom-[13%] right-[8%] -rotate-[38deg]"
          />


        </div>

        <div className="flex flex-col justify-center items-center text-white font-['forumFont'] text-[32px] lg:text-[42px]">

          <div className="flex flex-col gap-2 text-[26px] lg:text-[36px] font-semibold text-center font-medium">
            <span className="text-white font-semibold text-[28px]">Familia: </span>
            <span className="text-[42px] drop-shadow-xl drop-shadow-orange-400 font-['weddingStarlightFont']">{familia}</span>
          </div>

          <div className="text-white text-[26px] lg:text-[36px] font-['paladiseFont'] mt-6">
            Asistentes:{" "}
            <span className="bg-[#00000050] text-white px-4 py-2 rounded-md border border-[#d9c8a0] text-[32px] font-['weddingSecondaryFont'] shadow-sm">
              {integrantes}
            </span>
          </div>

        </div>

        <div className="text-white text-[36px] lg:text-[36px] font-['weddingStarlightFont'] backdrop-blur-[2px] bg-black/20 border border-black/30 shadow-xl p-4">
          Gracias por acompañarnos
        </div>


      </div>
    </div>
  );
}
