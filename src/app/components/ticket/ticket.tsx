"use client";

interface TicketCardProps {
  mesa: string;
  familia: string;
  integrantes: number;
}


export default function TicketCard({ mesa, familia, integrantes }: TicketCardProps) {
  return (
    <div
      className="relative w-full lg:w-[65%] flex justify-center h-[90vh]
        bg-black text-white rounded-2xl shadow-2xl
        pt-25 lg:p-15 overflow-hidden"
    >

      <img
        src="/media/images/sunflower-frame-3.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0 scale-[1.3] sm:scale-[1.4]"
      />


      <div className="relative z-10 flex w-full h-[80%] lg:w-[75%] lg:h-[95%] flex-col justify-center gap-8 items-center backdrop-blur-[4px] 
                      bg-black/10 rounded-2xl shadow-black">

        <div className="text-2xl lg:text-3xl font-bold text-white font-['forumFont'] border-4 border-yellow-200 p-2">
          Mesa {mesa}
        </div>

        <div className="w-full text-[50px] text-center sm:text-[55px] lg:text-[60px] text-white font-['weddingSecondaryFont']">
          Nuestra Boda
        </div>

        <div className="flex flex-col w-full text-[50px] text-center sm:text-[55px] lg:text-[60px] text-white font-['weddingScriptFont']">
          <span> A y E</span>
          <span className="font-['brillantFont'] text-[22px] font-semibold text-[#bbdb93]">26/09/2026</span>
          <img src="/media/images/butterfly.png" alt="" className="w-[120px] h-[90px] absolute top-10 -left-4 lg:top-10 lg:left-5 sm:w-[200px] sm:h-[150px] scale-x-[-1]" />
          <img src="/media/images/butterfly.png" alt="" className="w-[120px] h-[100px] absolute bottom-60 right-0 lg:bottom-80 lg:right-10 sm:w-[200px] sm:h-[150px]" />
          <img src="/media/images/butterfly-golden.png" alt="" className="w-[130px] h-[100px] absolute bottom-30 right-65 lg:bottom-50 lg:left-5 sm:w-[250px] sm:h-[180px] rotate-45" />
          <img src="/media/images/butterfly-golden-2.png" alt="" className="w-[80px] h-[60px] absolute bottom-15 right-5 lg:bottom-20 lg:right-23 sm:w-[130px] sm:h-[100px] -rotate-38" />
        </div>

        <div className="flex flex-col justify-center items-center text-white font-['forumFont'] text-[24px] lg:text-[42px]">
          
          <div className="font-semibold text-center font-medium">
            Familia: <br />{familia}
          </div>

          <div className="text-white text-[24px] lg:text-[36px] font-['paladiseFont'] mt-6">
            Asistentes:{" "}
            <span className="bg-[#00000050] text-white px-4 py-2 rounded-md border border-[#d9c8a0] text-[32px] font-['weddingSecondaryFont'] shadow-sm">
              {integrantes}
            </span>
          </div>



        </div>

      </div>
    </div>
  );
}
